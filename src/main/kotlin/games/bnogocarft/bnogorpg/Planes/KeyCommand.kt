package games.bnogocarft.bnogorpg.Planes

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class KeyCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can execute this command")
            return true
        }
        sender.inventory.addItem(PlaneKeyItem.key)
        return true
    }
}