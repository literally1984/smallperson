package games.bnogocarft.bnogorpg.Utils.PPlayer.Abilities

import org.bukkit.util.Vector
import java.nio.ByteBuffer
import kotlin.math.cos
import kotlin.math.sin

fun getYawFromVector(motion: Vector): Float {
    val dx: Double = motion.x
    val dz: Double = motion.z
    var yaw = 0.0
    // Set yaw
    if (dx != 0.0) {
        // Set yaw start value based on dx
        yaw = if (dx < 0) {
            1.5 * Math.PI
        } else {
            0.5 * Math.PI
        }
        yaw -= Math.atan(dz / dx)
    } else if (dz < 0) {
        yaw = Math.PI
    }
    return (-yaw * 180 / Math.PI - 90).toFloat()
}

fun float2ByteArray(value: Float): ByteArray? {
    return ByteBuffer.allocate(4).putFloat(value).array()
}

fun yaw2vector(yaw: Float): Vector {
    return Vector(sin(yaw).toDouble(), 0.0, cos(yaw).toDouble())
}
