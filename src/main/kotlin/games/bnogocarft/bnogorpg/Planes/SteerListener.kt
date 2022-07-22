package games.bnogocarft.bnogorpg.Planes

import net.lax1dude.util.event.PlayerVehicleInputEvent
import org.bukkit.Bukkit
import org.bukkit.entity.Minecart
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener

class SteerListener : Listener {

    @EventHandler
    fun onVehicleSteer(e: PlayerVehicleInputEvent) {
        val steerer = e.player
        val vehicle = e.player.vehicle
        if (vehicle is Minecart) {
            if (planes.containsKey(vehicle)) {

                val plane = planes[vehicle]!!
                if (e.x < 0.0 && e.z > 0.0) {
                    when (steerer.eyeLocation.yaw) {
                        in 0.0..89.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            if (pressW.containsKey(steerer)) {
                                pressW.replace(steerer, true)
                            } else {
                                pressW[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(wVector)
                            vehicle.location.pitch = 20f
                        }

                        in 90.0..179.0 -> {
                            if (!pressA.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing A")
                                plane.isSteering = true
                            }
                            if (pressA.containsKey(steerer)) {
                                pressA.replace(steerer, true)
                            } else {
                                pressA[steerer] = true
                            }
                            vehicle.location.yaw -= 1
                        }

                        in 180.0..269.0 -> {
                            if (!pressS.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing S")
                                plane.isSteering = true
                            }
                            if (pressS.containsKey(steerer)) {
                                pressS.replace(steerer, true)
                            } else {
                                pressS[steerer] = true
                            }
                            pressS[steerer] = true
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }

                        in 270.0..359.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            if (pressD.containsKey(steerer)) {
                                pressD.replace(steerer, true)
                            } else {
                                pressD[steerer] = true
                            }

                            vehicle.location.yaw += 1
                        }
                    }
                }
                if (e.x < 0.0 && e.z < 0.0) {
                    when (steerer.eyeLocation.yaw) {
                        in 0.0..89.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            if (pressD.containsKey(steerer)) {
                                pressD.replace(steerer, true)
                            } else {
                                pressD[steerer] = true
                            }

                            vehicle.location.yaw += 1
                        }

                        in 90.0..179.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            if (pressW.containsKey(steerer)) {
                                pressW.replace(steerer, true)
                            } else {
                                pressW[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(wVector)
                            vehicle.location.pitch = 20f
                        }

                        in 180.0..269.0 -> {
                            if (!pressA.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing A")
                                plane.isSteering = true
                                vehicle.location.yaw -= 1
                            }

                        }

                        in 270.0..359.0 -> {
                            if (!pressS.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing S")
                                plane.isSteering = true
                            }
                            if (pressS.containsKey(steerer)) {
                                pressS.replace(steerer, true)
                            } else {
                                pressS[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }
                    }
                }
                if (e.x > 0.0 && e.z > 0.0) {
                    when (steerer.eyeLocation.yaw) {
                        in 0.0..89.0 -> {
                            if (!pressA.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing A")
                                plane.isSteering = true
                            }
                            if (pressA.containsKey(steerer)) {
                                pressA.replace(steerer, true)
                            } else {
                                pressA[steerer] = true
                            }

                            vehicle.location.yaw -= 1
                        }

                        in 90.0..179.0 -> {
                            if (!pressS.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing S")
                                plane.isSteering = true
                            }
                            if (pressS.containsKey(steerer)) {
                                pressS.replace(steerer, true)
                            } else {
                                pressS[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }

                        in 180.0..269.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            if (pressD.containsKey(steerer)) {
                                pressD.replace(steerer, true)
                            } else {
                                pressD[steerer] = true
                            }
                            vehicle.location.yaw += 1
                        }

                        in 270.0..359.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            if (pressW.containsKey(steerer)) {
                                pressW.replace(steerer, true)
                            } else {
                                pressW[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(wVector)
                            vehicle.location.pitch = 20f
                        }
                    }
                }

                if (e.x > 0.0 && e.z < 0.0) {
                    when (steerer.eyeLocation.yaw) {
                        in 0.0..89.0 -> {
                            if (!pressS.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing S")
                                plane.isSteering = true
                            }
                            if (pressS.containsKey(steerer)) {
                                pressS.replace(steerer, true)
                            } else {
                                pressS[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }

                        in 90.0..179.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            if (pressD.containsKey(steerer)) {
                                pressD.replace(steerer, true)
                            } else {
                                pressD[steerer] = true
                            }
                            vehicle.location.yaw += 1
                        }

                        in 180.0..269.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            if (pressD.containsKey(steerer)) {
                                pressD.replace(steerer, true)
                            } else {
                                pressD[steerer] = true
                            }
                            vehicle.velocity = vehicle.velocity.add(wVector)
                            vehicle.location.pitch = 20f
                        }

                        in 270.0..359.0 -> {
                            if (!pressA.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing A")
                                plane.isSteering = true
                            }
                            if (pressD.containsKey(steerer)) {
                                pressD.replace(steerer, true)
                            } else {
                                pressD[steerer] = true
                            }
                            vehicle.location.yaw -= 1
                        }
                    }
                }
            }
        }
    }
}