package games.bnogocarft.bnogorpg.recode.OtherCommands

import games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer.BPlayer
import games.bnogocarft.bnogorpg.recode.Utils.others.PlaytimeUtils
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class PlayTimeCommand : CommandExecutor{
    override fun onCommand(sender: CommandSender, cmd: Command, label: String?, args: Array<out String>?): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can execute this command")
            return true;
        }

        val BPlayer = BPlayer(sender)
        PlaytimeUtils.addPlaytime(BPlayer)
        BPlayer.updatePlayTime()

        sender.sendMessage(BPlayer.playTime)
        return true
    }
}