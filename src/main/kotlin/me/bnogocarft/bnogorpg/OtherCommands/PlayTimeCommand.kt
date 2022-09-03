package me.bnogocarft.bnogorpg.OtherCommands

import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import org.bukkit.ChatColor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class PlayTimeCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String?, args: Array<out String>?): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can execute this command")
            return true
        }

        val bPlayer = OnlineBPlayers[sender]!!
        PlaytimeUtils.addPlaytime(bPlayer)
        bPlayer.updatePlayTime()

        val playTime = bPlayer.playTime.split(" ")

        sender.sendMessage("${ChatColor.YELLOW}Your total Play time on RPG Factions is:")
        sender.sendMessage(
            "[${ChatColor.BLUE}${ChatColor.BOLD}${playTime[0]} ${ChatColor.RESET}${ChatColor.BLUE}Hours${ChatColor.WHITE}, " +
                    "${ChatColor.GREEN}${ChatColor.BOLD}${playTime[1]} ${ChatColor.RESET}${ChatColor.GREEN}Minutes${ChatColor.WHITE}]"
        )
        // I think the above would look like [10 Hours, 45 Minutes]
        return true
    }
}