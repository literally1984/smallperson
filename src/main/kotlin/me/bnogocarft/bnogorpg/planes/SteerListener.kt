package me.bnogocarft.bnogorpg.planes

import com.comphenix.protocol.PacketType
import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.events.ListenerPriority
import com.comphenix.protocol.events.PacketAdapter
import com.comphenix.protocol.events.PacketEvent
import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.getData
import me.bnogocarft.bnogorpg.utils.plus
import org.bukkit.entity.Minecart
import org.bukkit.util.Vector
import java.lang.Math.cos
import java.lang.Math.sin


class SteerListener {
    fun enable() {
        ProtocolLibrary.getProtocolManager().addPacketListener(
            object : PacketAdapter(Main.instance, ListenerPriority.HIGHEST, PacketType.Play.Client.STEER_VEHICLE) {
                override fun onPacketReceiving(e: PacketEvent) {
                    val player = e.player
                    val packet = e.packet
                    val sideways = packet.float.read(0)
                    val forward = packet.float.read(1)
                    val jump = packet.booleans.read(0)
                    val shift = packet.booleans.read(1)

                    if (player.vehicle is Minecart) {
                        if (player.vehicle.getData("plane") != null) {
                            val plane = player.vehicle.getData("plane") as Plane
                            if (plane.isRunning) {
                                // Player presses A
                                if (sideways > 0) {
                                    player.vehicle.velocity += Vector(cos(100.0), 0.0, sin(100.0))
                                }

                                // Player presses D
                                if (sideways < 0) {
                                    player.vehicle.velocity += Vector(cos(80.0), 0.0, sin(80.0))
                                }

                                // Player presses W
                                if (forward > 0) {
                                    player.vehicle.velocity += Vector(0, 1, 0)
                                }

                                // Player presses S
                                if (forward < 0) {
                                    player.vehicle.velocity = Vector(0, 1, 0)
                                }
                            }
                        }
                    }
                }
            }
        )
    }
}