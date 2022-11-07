package me.bnogocarft.bnogorpg.utils.Particle

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

data class HelixAnimation(
    val radius: Double,
    val height: Double,
    val speed: Long,
    val direction: Vector,
    override var particleType: String,
    override var loc: Location
) : Animation {
    override var isStopped = false
    override fun play() {
        lateinit var task: BukkitTask
        task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
            if (isStopped) {
                task.cancel()
            }
            var y = 0.0
            var angle = 0.0
            while (y <= 36) {
                val x = radius * cos(angle)
                val z = radius * sin(angle)
                val packet = Packet63WorldParticles()
                val bas = ByteArrayOutputStream()
                val ds = DataOutputStream(bas)
                ds.writeShort(particleType.length)
                ds.writeChar('f'.code)
                ds.writeChar('l'.code)
                ds.writeChar('a'.code)
                ds.writeChar('m'.code)
                ds.writeChar('e'.code)
                ds.writeFloat((x + loc.x).toFloat())
                ds.writeFloat((y + loc.y).toFloat())
                ds.writeFloat((z + loc.z).toFloat())
                ds.writeFloat(0f)
                ds.writeFloat(0f)
                ds.writeFloat(0f)
                ds.writeInt(1)
                ds.writeInt(10)
                val bytes = bas.toByteArray()

                val dataStream = DataInputStream(ByteArrayInputStream(bytes))
                packet.a(dataStream)
                for (p in Bukkit.getOnlinePlayers()) {
                    (p as CraftPlayer).handle.playerConnection.sendPacket(packet)
                }
                y += 0.1
                angle += 1
            }
            isStopped = true
            return@runTaskTimer
        }, 0, speed)
    }
}