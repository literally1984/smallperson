package games.bnogocarft.bnogorpg.animation

import games.bnogocarft.bnogorpg.Utils.Particle.HelixAnimation
import games.bnogocarft.bnogorpg.Utils.Particle.playAnimation
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player
import org.bukkit.util.Vector

class animationTestCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender is ConsoleCommandSender) {
            sender.sendMessage("Only players can use this command lmao")
            return true
        }

        val player = sender as Player

        val animation = HelixAnimation(1.0, 5.0, player.location, "flame", 5, Vector(0.0, 0.0, 0.0))
        playAnimation(animation)
        return true
    }
}