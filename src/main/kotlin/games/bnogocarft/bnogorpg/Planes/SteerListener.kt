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
                    Bukkit.getConsoleSender().sendMessage("W")
                }

                in 90.0..179.0 -> {
                    Bukkit.getConsoleSender().sendMessage("A")
                }

                in 180.0..269.0 -> {
                    Bukkit.getConsoleSender().sendMessage("S")
                }

                in 270.0..359.0 -> {
                    Bukkit.getConsoleSender().sendMessage("D")
                }
            }
        }
        if (e.x < 0.0 && e.z < 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    Bukkit.getConsoleSender().sendMessage("D")
                }

                in 90.0..179.0 -> {
                    Bukkit.getConsoleSender().sendMessage("W")
                }

                in 180.0..269.0 -> {
                    Bukkit.getConsoleSender().sendMessage("A")
                }

                in 270.0..359.0 -> {
                    Bukkit.getConsoleSender().sendMessage("S")
                }
            }
        }
        if (e.x > 0.0 && e.z > 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    Bukkit.getConsoleSender().sendMessage("A")
                }

                in 90.0..179.0 -> {
                    Bukkit.getConsoleSender().sendMessage("S")
                }

                in 180.0..269.0 -> {
                    Bukkit.getConsoleSender().sendMessage("D")
                }

                in 270.0..359.0 -> {
                    Bukkit.getConsoleSender().sendMessage("W")
                }
            }
        }

        if (e.x > 0.0 && e.z < 0.0) {
            when (steerer.eyeLocation.yaw) {
                in 0.0..89.0 -> {
                    Bukkit.getConsoleSender().sendMessage("S")
                }

                in 90.0..179.0 -> {
                    Bukkit.getConsoleSender().sendMessage("D")
                }

                in 180.0..269.0 -> {
                    Bukkit.getConsoleSender().sendMessage("W")
                }

                in 270.0..359.0 -> {
                    Bukkit.getConsoleSender().sendMessage("A")
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