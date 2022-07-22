package games.bnogocarft.bnogorpg.Planes

import games.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.entity.Minecart
import org.bukkit.entity.Player
import org.bukkit.util.Vector

val pressW = HashMap<Player, Boolean>()
val pressA = HashMap<Player, Boolean>()
val pressS = HashMap<Player, Boolean>()
val pressD = HashMap<Player, Boolean>()

fun RemoveLooper() {
    Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, Runnable() {
        fun run() {

            // W Looper
            for (player in pressW.keys) {
                if (pressW[player] == true) {
                    pressW[player] = false
                }
                if (pressW[player] == false) {
                    pressW.remove(player)
                }
            }

            // A Looper
            for (player in pressA.keys) {
                if (pressA[player] == true) {
                    pressA[player] = false
                }
                if (pressA[player] == false) {
                    pressA.remove(player)
                }
            }

            // S Looper
            for (player in pressS.keys) {
                if (pressS[player] == true) {
                    pressS[player] = false
                }
                if (pressS[player] == false) {
                    pressS.remove(player)
                }
            }

            // D Looper
            for (player in pressD.keys) {
                if (pressD[player] == true) {
                    pressD[player] = false
                }
                if (pressD[player] == false) {
                    pressD.remove(player)
                }
            }


        }
    }, 0L, 1L)
}

val wVector = Vector(0.0, 0.3, 0.0)
val sVector = Vector(-0.3, -0.3, 0.0)

fun VeloLooper() {
    Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, Runnable() {
        fun run() {
            for (player in pressW.keys) {
                if (player.isInsideVehicle) {
                    val plane = player.vehicle as Minecart
                    val planeEntity = planes[plane]!!
                    if (planeEntity.isSpawned && planeEntity.isRunning) {
                        plane.velocity = plane.velocity.add(wVector)
                    }
                }
            }
            for (player in pressA.keys) {
                if (player.isInsideVehicle) {
                    val plane = player.vehicle
                    val planeEntity = planes[plane]!!
                    if (planeEntity.isSpawned && planeEntity.isRunning) {
                        plane.location.yaw = plane.location.yaw + 3
                    }
                }
            }
            for (player in pressS.keys) {
                if (player.isInsideVehicle) {
                    val plane = player.vehicle
                    val planeEntity = planes[plane]!!
                    if (planeEntity.isSpawned && planeEntity.isRunning) {
                        plane.velocity = plane.velocity.add(sVector)
                    }
                }
            }
            for (player in pressD.keys) {
                if (player.isInsideVehicle) {
                    val plane = player.vehicle
                    plane.location.yaw = plane.location.yaw + 3
                }
            }
        }
    }, 0, 1)
}