package games.bnogocarft.bnogorpg.OtherCommands

import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import games.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class PlayTimeCommand : CommandExecutor{
    override fun onCommand(sender: CommandSender, cmd: Command, label: String?, args: Array<out String>?): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can execute this command")
            return true
        }

        val BPlayer = BPlayers.BPlayerMap[sender]!!
        PlaytimeUtils.addPlaytime(BPlayer)
        BPlayer.updatePlayTime()

        val playTime = BPlayer.playTime.split(" ")

        sender.sendMessage("Your total Play Time is:")
        sender.sendMessage("[${playTime[0]} Hours, ${playTime[1]} Minutes]")
        // I think the above would look like [10 Hours, 45 Minutes]
        return true
    }
}