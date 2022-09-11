package me.bnogocarft.bnogorpg.Utils.Particle

import me.bnogocarft.bnogorpg.Main
import net.minecraft.server.v1_5_R3.Packet63WorldParticles
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.craftbukkit.v1_5_R3.entity.CraftPlayer
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import kotlin.math.cos
import kotlin.math.sin


interface Animation {
    var isStopped: Boolean
    var loc: Location
    var particleType: String
    fun play()
}