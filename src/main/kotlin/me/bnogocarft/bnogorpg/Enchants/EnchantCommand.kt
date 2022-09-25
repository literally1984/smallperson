package me.bnogocarft.bnogorpg.Enchants

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class EnchantCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("You must be a player to use this command")
            return true
        }
        if (args.size == 1) {
            if (args[0] == "glow") {
                if (sender.itemInHand != null) {
                    return true
                }
            }
        }
        return false
    }
}