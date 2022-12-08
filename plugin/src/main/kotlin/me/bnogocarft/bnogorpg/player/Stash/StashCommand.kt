package me.bnogocarft.bnogorpg.player.Stash

import me.bnogocarft.bnogorpg.player.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class StashCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("You must be a player to use this command!")
            return true
        }

        val stashInv = Bukkit.createInventory(null, 54, "${ChatColor.GOLD}Your Stash")
        val player = OnlineBPlayers[sender]
        for (item in player.stash) {
            if (item != null) stashInv.addItem(item)
        }

        sender.openInventory(stashInv)
        return true
    }
}