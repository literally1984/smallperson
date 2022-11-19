package me.bnogocarft.bnogorpg.test

import me.bnogocarft.bnogorpg.utils.addFakeBlock
import me.bnogocarft.bnogorpg.utils.glow
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class TestCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command lmao")
            return true
        }

        val item = sender.itemInHand
        item.glow()
        sender.location.addFakeBlock(sender, Material.DIRT)

        return true
    }
}