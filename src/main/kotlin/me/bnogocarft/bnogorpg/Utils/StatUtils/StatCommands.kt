package me.bnogocarft.bnogorpg.Utils.StatUtils

import me.bnogocarft.bnogorpg.Utils.BPlayer.bPlayer
import me.bnogocarft.bnogorpg.Utils.playSound
import net.minecraft.server.v1_5_R3.Packet62NamedSoundEffect
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.craftbukkit.v1_5_R3.entity.CraftPlayer
import org.bukkit.entity.Player


class StatCommands : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("§cYou must be a player to use this command!")
            return true
        }
        val increaseOrDecrease = args[1] == "regen"
        val player = sender.bPlayer()
        when (args[0]) {
            "mana" -> {
                player.p.world.playSound(player.p.location, "~!EAG.adderall.start_instant", 0f, 0f)
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