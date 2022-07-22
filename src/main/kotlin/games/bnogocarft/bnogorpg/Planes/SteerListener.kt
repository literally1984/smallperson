package games.bnogocarft.bnogorpg.Planes

import net.lax1dude.util.event.PlayerVehicleInputEvent
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener

class SteerListener : Listener {

    @EventHandler
    fun onVehicleSteer(e: PlayerVehicleInputEvent) {
        val steerer = e.player
        val vehicle = e.player.vehicle
        if (e.x < 0.0 && e.z > 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    if (!pressW.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing W")
                    }
                    pressW[steerer] = true
                }

                in 90.0..179.0 -> {
                    if (!pressA.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing A")
                    }
                    pressA[steerer] = true
                }

                in 180.0..269.0 -> {
                    if (!pressS.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing S")
                    }
                    pressS[steerer] = true
                }

                in 270.0..359.0 -> {
                    if (!pressD.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing D")
                    }
                    pressD[steerer] = true
                }
            }
        }
        if (e.x < 0.0 && e.z < 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    if (!pressD.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing D")
                    }
                    pressD[steerer] = true
                }

                in 90.0..179.0 -> {
                    if (!pressW.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing W")
                    }
                    pressW[steerer] = true
                }

                in 180.0..269.0 -> {
                    if (!pressA.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing A")
                    }
                    pressA[steerer] = true
                }

                in 270.0..359.0 -> {
                    if (!pressS.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing S")
                    }
                    pressS[steerer] = true
                }
            }
        }
        if (e.x > 0.0 && e.z > 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    if (!pressA.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing A")
                    }
                    pressA[steerer] = true
                }

                in 90.0..179.0 -> {
                    if (!pressS.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing S")
                    }
                    pressS[steerer] = true
                }

                in 180.0..269.0 -> {
                    if (!pressD.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing D")
                    }
                    pressD[steerer] = true
                }

                in 270.0..359.0 -> {
                    Bukkit.getConsoleSender().sendMessage("Started pressing W")
                    if (!pressW.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing W")
                    }
                    pressW[steerer] = true
                }
            }
        }

        if (e.x > 0.0 && e.z < 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    if (!pressS.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing S")
                    }
                    pressS[steerer] = true
                }

                in 90.0..179.0 -> {
                    if (!pressD.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing D")
                    }
                    pressD[steerer] = true
                }

                in 180.0..269.0 -> {
                    if (!pressW.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing W")
                    }
                    pressW[steerer] = true
                }

                in 270.0..359.0 -> {
                    if (!pressA.containsKey(steerer)) {
                        Bukkit.getConsoleSender().sendMessage("Started pressing A")
                    }
                    pressA[steerer] = true
                }
            }
        }
        if (e.x == 0.0 || e.z == 0.0) {
            return
        }
        var xStatus = "Negative"
        var zStatus = "Negative"
        if (e.x > 0.0) {
            xStatus = "Positive"
        }
        if (e.z > 0.0) {
            zStatus = "Positive"
        }
        Bukkit.getConsoleSender().sendMessage("$xStatus X  ||  $zStatus Z ${steerer.eyeLocation.yaw}")
        Bukkit.getConsoleSender().sendMessage("")
    }
}