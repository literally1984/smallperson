package me.bnogocarft.bnogorpg.utils.particle

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.spawnParticle
import net.minecraft.server.v1_8_R3.EnumParticle
import org.bukkit.Bukkit
import org.bukkit.Location
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
                val loc2 = Location(loc.world, radius * cos(angle), y, radius * sin(angle))
                loc2.spawnParticle(EnumParticle.FLAME)

                y += 0.1
                angle += 1
            }
            isStopped = true
            return@runTaskTimer
        }, 0, speed)
    }
}