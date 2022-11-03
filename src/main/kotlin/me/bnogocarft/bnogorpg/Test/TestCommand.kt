package me.bnogocarft.bnogorpg.Test

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player

class TestCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command lmao")
            return true
        }

        sender.itemInHand.addUnsafeEnchantment(Enchantment.ARROW_DAMAGE, 32)
        return true
    }
}