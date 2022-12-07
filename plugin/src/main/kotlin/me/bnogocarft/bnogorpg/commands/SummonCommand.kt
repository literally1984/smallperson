package me.bnogocarft.bnogorpg.commands

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player

class SummonCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("You must be a player to use this command!")
            return true
        }

        if (args.isEmpty()) {
            sender.sendMessage("Usage: /summon <mob>")
            return true
        }

        val summonMob = try {
            EntityType.valueOf(args[0])
        } catch (e: IllegalArgumentException) {
            sender.sendMessage("Invalid mob!")
            return true
        }

        sender.world.spawnEntity(sender.location, summonMob)
        return true
    }
}