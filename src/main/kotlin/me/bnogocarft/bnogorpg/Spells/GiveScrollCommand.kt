package me.bnogocarft.bnogorpg.Spells

import me.bnogocarft.bnogorpg.Spells.spells.FireballSpell
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player

class GiveScrollCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (sender is ConsoleCommandSender) {
            if (args.size == 2) {
                lateinit var player: Player
                for (p in Bukkit.getOnlinePlayers()) {
                    if (p.displayName == args[0]) {
                        player = Bukkit.getPlayer(args[0])!!
                    }
                }
                when (args[1].lowercase()) {
                    "fireball" -> {
                        player.inventory.addItem(FireballSpell.scroll)
                        sender.sendMessage("§aYou have given ${args[0]} a Fireball Spell Scroll!")
                        return true
                    }

                    "meteor" -> {
                        player.inventory.addItem(FireballSpell.scroll)
                        sender.sendMessage("§aYou have given ${args[0]} a Meteor Spell Scroll!")
                        return true
                    }
                }
            } else {
                sender.sendMessage("You must provide a player and a spell!")
                return true
            }
        }

        if (sender is Player) {
            if (args.size == 2) {
                lateinit var player: Player
                for (p in Bukkit.getOnlinePlayers()) {
                    if (p.displayName == args[0]) {
                        player = Bukkit.getPlayer(args[0])!!
                    }
                }
                when (args[1].lowercase()) {
                    "fireball" -> {
                        player.inventory.addItem(FireballSpell.scroll)
                        sender.sendMessage("§aYou have given ${args[0]} a Fireball Spell Scroll!")
                        return true
                    }

                    "meteor" -> {
                        player.inventory.addItem(FireballSpell.scroll)
                        sender.sendMessage("§aYou have given ${args[0]} a Meteor Spell Scroll!")
                        return true
                    }
                }
            }

            if (args.size == 1) {
                when (args[0].lowercase()) {
                    "fireball" -> {
                        sender.inventory.addItem(FireballSpell.scroll)
                        sender.sendMessage("§aYou have given ${args[0]} a Fireball Spell Scroll!")
                        return true
                    }

                    "meteor" -> {
                        sender.inventory.addItem(FireballSpell.scroll)
                        sender.sendMessage("§aYou have given ${args[0]} a Meteor Spell Scroll!")
                        return true
                    }
                }
            }
        }

        return false
    }
}