package games.bnogocarft.bnogorpg.Planes

import net.lax1dude.util.event.PlayerVehicleInputEvent
import org.bukkit.Bukkit
import org.bukkit.entity.Minecart
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.util.Vector
import java.lang.Math.cos
import java.lang.Math.sin


class SteerListener : Listener {

    @EventHandler
    fun onVehicleSteer(e: PlayerVehicleInputEvent) {
        val steerer = e.player
        val vehicle = e.player.vehicle
        if (vehicle is Minecart) {
            if (planes.containsKey(vehicle)) {

                val plane = planes[vehicle]!!
                if (e.x < 0.0 && e.z > 0.0) {
                    println(steerer.location.yaw)
                    when (steerer.location.yaw) {
                        in 0.0..89.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            pressW[steerer] = true
                            vehicle.velocity = vehicle.velocity.add(wVector)
                            vehicle.location.pitch = 20f
                        }

                        in 90.0..179.0 -> {
                            if (!pressA.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing A")
                                plane.isSteering = true
                            }
                            pressA[steerer] = true
                            val I = Vector(0,0,1)
                            val vector = Vector((cos((vehicle.location.yaw + 1).toDouble()) * I.x - sin((vehicle.location.yaw + 1).toDouble()) * I.z),
                                0.0,
                                sin((vehicle.location.yaw + 1).toDouble()) * I.x + cos((vehicle.location.yaw + 1).toDouble()) * I.z)
                            vehicle.location.yaw += 1
                            vehicle.velocity = vector
                        }

                        in 180.0..269.0 -> {
                            if (!pressS.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing S")
                                plane.isSteering = true
                            }
                            pressS[steerer] = true
                            pressS[steerer] = true
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }

                        in 270.0..359.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            pressD[steerer] = true
                            val I = Vector(0,0,1)
                            val vector = Vector((cos((steerer.location.yaw - 1).toDouble()) * I.x - sin((steerer.location.yaw - 1).toDouble()) * I.z),
                                0.0,
                                sin((steerer.location.yaw - 1).toDouble()) * I.x + cos((steerer.location.yaw - 1).toDouble()) * I.z)
                            vehicle.location.yaw -= 1
                            vehicle.velocity = vector
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
                            pressD[steerer] = true

                            vehicle.location.yaw += 1
                        }

                        in 90.0..179.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            pressW[steerer] = true
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
                            pressS[steerer] = true
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
                            pressA[steerer] = true

                            vehicle.location.yaw -= 1
                        }

                        in 90.0..179.0 -> {
                            if (!pressS.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing S")
                                plane.isSteering = true
                            }
                            pressS[steerer] = true
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }

                        in 180.0..269.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            pressD[steerer] = true
                            vehicle.location.yaw += 1
                        }

                        in 270.0..359.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            pressW[steerer] = true
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
                            pressS[steerer] = true
                            vehicle.velocity = vehicle.velocity.add(sVector)
                            vehicle.location.pitch = -20f
                        }

                        in 90.0..179.0 -> {
                            if (!pressD.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing D")
                                plane.isSteering = true
                            }
                            pressD[steerer] = true
                            vehicle.location.yaw += 1
                        }

                        in 180.0..269.0 -> {
                            if (!pressW.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing W")
                                plane.isSteering = true
                            }
                            pressD[steerer] = true
                            vehicle.velocity = vehicle.velocity.add(wVector)
                            vehicle.location.pitch = 20f
                        }

                        in 270.0..359.0 -> {
                            if (!pressA.containsKey(steerer)) {
                                Bukkit.getConsoleSender().sendMessage("Started pressing A")
                                plane.isSteering = true
                            }
                            pressD[steerer] = true
                            vehicle.location.yaw -= 1
                        }
                    }
                }
            }
        }
    }
}