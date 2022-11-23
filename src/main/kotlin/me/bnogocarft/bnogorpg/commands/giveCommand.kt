package me.bnogocarft.bnogorpg.commands

import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

val customItemMap = HashMap<String, ItemStack>()

class GiveCommand : CommandExecutor {

    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command")
            return true
        }

        if (customItemMap[args[0]] != null) {
            sender.inventory.addItem(customItemMap[args[0]])
            return true
        } else {
            sender.sendMessage("Item not found")
            return true
        }
    }
}