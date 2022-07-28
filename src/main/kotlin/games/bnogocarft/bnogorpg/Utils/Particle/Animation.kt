package games.bnogocarft.bnogorpg.Utils.Particle

import games.bnogocarft.bnogorpg.Main
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


open class Animation(loc: Location, particle: String) {
    var isStopped = false
}

data class HelixAnimation(
    val radius: Double,
    val height: Double,
    val loc: Location,
    val particle: String,
    val speed: Long,
    val direction: Vector
) : Animation(loc, particle)

fun playAnimation(animation: Animation) {
    if (animation is HelixAnimation) {
        lateinit var task: BukkitTask
        val helix = animation
        task = Bukkit.getScheduler().runTaskTimer(Main.instance, Runnable {
            print("particle spawned")
            if (animation.isStopped) {
                task.cancel()
            }
            var y = 0.0
            var angle = 0.0
            while (y <= 36) {
                val x = helix.radius * Math.cos(angle)
                val z = helix.radius * Math.sin(angle)
                val packet = Packet63WorldParticles()
                val bas = ByteArrayOutputStream()
                val ds = DataOutputStream(bas)
                ds.writeShort(helix.particle.length)
                ds.writeChar('f'.code)
                ds.writeChar('l'.code)
                ds.writeChar('a'.code)
                ds.writeChar('m'.code)
                ds.writeChar('e'.code)
                ds.writeFloat((x + helix.loc.x).toFloat())
                ds.writeFloat((y + helix.loc.y).toFloat())
                ds.writeFloat((z + helix.loc.z).toFloat())
                ds.writeFloat(0f)
                ds.writeFloat(0f)
                ds.writeFloat(0f)
                ds.writeInt(1)
                val bytes = bas.toByteArray()

                val dataStream = DataInputStream(ByteArrayInputStream(bytes))
                packet.a(dataStream)
                for (p in Bukkit.getOnlinePlayers()) {
                    (p as CraftPlayer).handle.playerConnection.sendPacket(packet)
                }
                y += 0.1
                angle += 1
            }
        }, 0, helix.speed)
    }
}