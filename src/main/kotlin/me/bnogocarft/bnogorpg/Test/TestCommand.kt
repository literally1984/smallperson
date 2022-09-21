package me.bnogocarft.bnogorpg.Test

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player

class TestCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender is ConsoleCommandSender) {
            sender.sendMessage("Only players can use this command lmao")
            return true
        }
        val item = (sender as Player).itemInHand
        return true
    }
}