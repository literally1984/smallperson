package games.bnogocarft.bnogorpg.OtherCommands

import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.util.logging.Level

val customItemMap = HashMap<String, ItemStack>()

class GiveCommand : CommandExecutor {

    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender is ConsoleCommandSender) {
            if (args.size != 2) {
                Bukkit.getLogger().log(Level.ALL, "You must provide both a Player and Item argument to use this command!")
                return true;
            } else {
                var argIsValidPlayer = false
                lateinit var player: Player

                for (p in Bukkit.getOnlinePlayers()) {
                    if (p.displayName.lowercase().equals(args[0].lowercase())) {
                        argIsValidPlayer = true
                        player = p
                    }
                }

                if (!argIsValidPlayer) {
                    Bukkit.getLogger().log(Level.ALL, "You must provide a valid player to use this command!")
                    return true
                }

                if (customItemMap.containsKey(args[1].lowercase())) {
                    player.inventory.addItem(customItemMap[args[1].lowercase()])
                    Bukkit.getLogger().log(Level.ALL, "You just gave ${player.displayName} a ${args[0]}!")
                }
            }
        }

        if (sender is Player) {
            if (args.size == 1) {
                if (customItemMap.containsKey(args[0].lowercase())) {
                    sender.inventory.addItem(customItemMap[args[0].lowercase()])
                    sender.sendMessage("You gave yourself an ${args[0]}")
                    return true
                }
            }

            if (args.size == 2) {
                var argIsValidPlayer = false
                lateinit var player: Player

                for (p in Bukkit.getOnlinePlayers()) {
                    if (p.displayName.lowercase().equals(args[0].lowercase())) {
                        argIsValidPlayer = true
                        player = p
                    }
                }

                if (!argIsValidPlayer) {
                    sender.sendMessage("You must provide a valid player to use this command!")
                    return true
                }

                if (customItemMap.containsKey(args[1].lowercase())) {
                    player.inventory.addItem(customItemMap[args[1].lowercase()])
                    sender.sendMessage("You just gave ${player.displayName} a ${args[0]}!")
                }
            }

            sender.sendMessage("You must provide both a Player and Item argument to use this command!")
            return true

        }

        return false
    }
}