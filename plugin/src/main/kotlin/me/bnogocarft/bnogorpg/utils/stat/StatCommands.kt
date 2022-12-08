package me.bnogocarft.bnogorpg.utils.stat

import me.bnogocarft.bnogorpg.player.utils.bPlayer
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player


class StatCommands : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("§cYou must be a player to use this command!")
            return true
        }
        val increaseOrDecrease = args[1] == "inc"
        val player = sender.bPlayer()
        when (args[0]) {
            "mana" -> {
                if (increaseOrDecrease) {
                    try {
                        player.stats.currentMana += args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Mana increased")
                    return true
                } else {
                    try {
                        player.stats.currentMana -= args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Mana decreased")
                    return true
                }
            }

            "maxmana" -> {
                if (increaseOrDecrease) {
                    try {
                        player.stats.maxMana += args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Max Mana increased")
                    return true
                } else {
                    try {
                        player.stats.maxMana -= args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Max Mana decreased")
                    return true
                }
            }

            "stamina" -> {
                if (increaseOrDecrease) {
                    try {
                        player.stats.currentStamina += args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Stamina increased")
                    return true
                } else {
                    try {
                        player.stats.currentStamina -= args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Stamina decreased")
                    return true
                }
            }

            "maxstamina" -> {
                if (increaseOrDecrease) {
                    try {
                        player.stats.maxStamina += args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Max Stamina increased")
                    return true
                } else {
                    try {
                        player.stats.maxStamina -= args[2].toInt()
                    } catch (e: NumberFormatException) {
                        player.sendMessage("§cYou must enter a number!")
                        return true
                    }
                    sender.sendMessage("Max Stamina decreased")
                    return true
                }
            }
        }

        return false
    }
}