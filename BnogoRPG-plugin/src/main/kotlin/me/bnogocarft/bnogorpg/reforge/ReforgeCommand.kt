package me.bnogocarft.bnogorpg.reforge

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class ReforgeCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command")
            return true
        }

        val reforgeInv = ReforgeUtils.reforgeGUI

        sender.openInventory(reforgeInv)
        return true
    }
}