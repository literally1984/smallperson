package games.bnogocarft.bnogorpg.Utils.Abilities

import org.bukkit.util.Vector

fun getYawFromVector(motion: Vector): Float {
    val dx: Double = motion.getX()
    val dz: Double = motion.getZ()
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