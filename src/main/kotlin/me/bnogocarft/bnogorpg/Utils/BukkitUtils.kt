package me.bnogocarft.bnogorpg.Utils

import net.minecraft.server.v1_5_R3.Packet62NamedSoundEffect
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.craftbukkit.v1_5_R3.entity.CraftPlayer

fun playSound(location: Location, sound: String, volume: Float, pitch: Float) {
    val packet = Packet62NamedSoundEffect(
        sound,
        location.x,
        location.y,
        location.z,
        volume,
        pitch
    )
    for (player in Bukkit.getOnlinePlayers()) {
        (player as CraftPlayer).handle.playerConnection.sendPacket(packet)
    }
}