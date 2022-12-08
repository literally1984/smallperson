package me.bnogocarft.bnogorpg.utils

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import com.comphenix.protocol.events.*
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin
import org.bukkit.util.Vector
import java.lang.reflect.InvocationTargetException
import java.util.concurrent.ConcurrentHashMap


open class SignInputer(plugin: Plugin?) {
    private var protocolManager: ProtocolManager = ProtocolLibrary.getProtocolManager()
    private var packetListener: PacketAdapter
    protected var listeners: MutableMap<String, SignGUIListener>
    protected var signLocations: MutableMap<String, Vector>

    init {
        packetListener = PacketListener(plugin)
        protocolManager.addPacketListener(packetListener)
        listeners = ConcurrentHashMap()
        signLocations = ConcurrentHashMap()
    }

    fun open(player: Player, response: SignGUIListener) {
        open(player, null as Location?, response)
    }

    fun open(player: Player, signLocation: Location?, response: SignGUIListener) {
        var x = 0
        var y = 0
        var z = 0
        if (signLocation != null) {
            x = signLocation.blockX
            y = signLocation.blockY
            z = signLocation.blockZ
        }
        val packet = protocolManager.createPacket(133)
        packet.integers.write(0, 0).write(1, x).write(2, y).write(3, z)
        try {
            protocolManager.sendServerPacket(player, packet)
            signLocations[player.name] = Vector(x, y, z)
            listeners[player.name] = response
        } catch (e: InvocationTargetException) {
            e.printStackTrace()
        }
    }

    fun open(player: Player, defaultText: Array<String?>?, response: SignGUIListener) {
        val packets: MutableList<PacketContainer> = ArrayList()
        var x = 0
        val y = 0
        var z = 0
        if (defaultText != null) {
            x = player.location.blockX
            z = player.location.blockZ
            val packet53 = protocolManager.createPacket(53)
            packet53.integers.write(0, x).write(1, y).write(2, z).write(3, 63).write(4, 0)
            packets.add(packet53)
            val packet130 = protocolManager.createPacket(130)
            packet130.integers.write(0, x).write(1, y).write(2, z)
            packet130.stringArrays.write(0, defaultText)
            packets.add(packet130)
        }
        val packet133 = protocolManager.createPacket(133)
        packet133.integers.write(0, 0).write(1, x).write(2, y).write(3, z)
        packets.add(packet133)
        if (defaultText != null) {
            val packet53 = protocolManager.createPacket(53)
            packet53.integers.write(0, x).write(1, y).write(2, z).write(3, 7).write(4, 0)
            packets.add(packet53)
        }
        try {
            for (packet in packets) {
                protocolManager.sendServerPacket(player, packet)
            }
            signLocations[player.name] = Vector(x, y, z)
            listeners[player.name] = response
        } catch (e: InvocationTargetException) {
            e.printStackTrace()
        }
    }

    fun destroy() {
        protocolManager.removePacketListener(packetListener)
        listeners.clear()
        signLocations.clear()
    }

    interface SignGUIListener {
        fun onSignDone(player: Player?, lines: Array<String?>?)
    }

    internal inner class PacketListener(plugin: Plugin?) :
        PacketAdapter(plugin, ConnectionSide.CLIENT_SIDE, ListenerPriority.NORMAL, 0x82) {
        var plugi: Plugin?

        init {
            this.plugi = plugin
        }

        override fun onPacketReceiving(event: PacketEvent) {
            val player = event.player
            val v = signLocations.remove(player.name) ?: return
            val list = event.packet.integers.values
            if (list[0] != v.blockX) return
            if (list[1] != v.blockY) return
            if (list[2] != v.blockZ) return
            val lines = event.packet.stringArrays.values[0]
            val response = listeners.remove(event.player.name)
            if (response != null) {
                event.isCancelled = true
                Bukkit.getScheduler().scheduleSyncDelayedTask(
                    plugin
                ) { response.onSignDone(player, lines) }
            }
        }
    }
}
