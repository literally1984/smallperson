package games.bnogocarft.bnogorpg.Player.Stash

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class StashCommand : CommandExecutor{
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("You must be a player to use this command!")
            return true
        }

        val stashInv = Bukkit.createInventory(null, 54, "${ChatColor.GOLD}Your Stash")
        val player = BPlayers[sender]!!
        for (item in player.stash) {
            stashInv.addItem(item)
        }

        sender.openInventory(stashInv)
        return true
    }
}