package me.bnogocarft.bnogorpg.Events

import me.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

class BloodMoon {
    companion object {
        fun startListener() {
            // Start the blood moon
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                if (Bukkit.getWorld("world").time > 19000) {
                    if (!Main.isBloodMoon) {
                        Main.isBloodMoon = true
                    }

                }
            }, 0, 5 * 20)

            // Ends the blood moon
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                if (Bukkit.getWorld("world").time < 7000 && Bukkit.getWorld("world").time < 19000) {
                    if (Main.isBloodMoon) Main.isBloodMoon = false
                }
            }, 0, 7 * 20)
        }
    }
}

class BloodMoonCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (args[0] == "start") {
            Main.isBloodMoon = true
            Bukkit.getWorld("world").time = 19000
            return true
        } else if (args[0] == "stop") {
            Main.isBloodMoon = false
            return true
        }
        return false
    }
}