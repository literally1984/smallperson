package games.bnogocarft.bnogorpg.OtherCommands.Reforge

import games.bnogocarft.bnogorpg.Utils.InventoryUtils
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class ReforgeCommand: CommandExecutor {
    override fun onCommand(sender: CommandSender?, cmd: Command?, label: String?, args: Array<out String>?): Boolean {
        if (sender !is Player) {
            sender!!.sendMessage("Only players can use this command")
            return true
        }

        val reforgeInv = ReforgeUtils.reforgeGUI
        val playerSender = sender

        playerSender.openInventory(reforgeInv)
        return true
    }
}