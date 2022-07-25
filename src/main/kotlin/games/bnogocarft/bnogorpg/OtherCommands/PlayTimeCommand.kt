package games.bnogocarft.bnogorpg.OtherCommands

import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import games.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
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

        val BPlayer = BPlayers[sender]!!
        PlaytimeUtils.addPlaytime(BPlayer)
        BPlayer.updatePlayTime()

        val playTime = BPlayer.playTime.split(" ")

        sender.sendMessage("${ChatColor.YELLOW}Your total Play Time is:")
        sender.sendMessage("[${ChatColor.BLUE}${playTime[0]} Hours, ${ChatColor.GREEN}${playTime[1]} Minutes]")
        // I think the above would look like [10 Hours, 45 Minutes]
        return true
    }
}