package games.bnogocarft.bnogorpg.OtherCommands

import games.bnogocarft.bnogorpg.Planes.PlaneEntity
import games.bnogocarft.bnogorpg.Planes.planeEntitites
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.*
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
                Bukkit.getLogger()
                    .log(Level.ALL, "You must provide both a Player and Item argument to use this command!")
                return true
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
                    val item = customItemMap[args[1].lowercase()]!!.clone()
                    player.inventory.addItem(customItemMap[args[1].lowercase()])
                    Bukkit.getLogger().log(Level.ALL, "You just gave ${player.displayName} a ${item.itemMeta.displayName}!")
                    return true
                }
            }
        }

        if (sender is Player) {
            if (args.size == 1) {
                if (customItemMap.containsKey(args[0].lowercase())) {
                    val item = customItemMap[args[0].lowercase()]!!.clone()
                    sender.inventory.addItem(item)
                    when (BItemUtils.getBType(item)) {
                        "weapon" -> BItemUtils.addBWeapon(item, BWeapon(item))
                        "armor" -> BItemUtils.addBArmor(item, BArmor(item))
                        "axe" -> BItemUtils.addBAxe(item, BAxe(item))
                        "pickaxe" -> BItemUtils.addBPickaxe(item, BPickaxe(item))
                    }
                    sender.sendMessage("You gave yourself a ${item.itemMeta.displayName}")
                    if (args[0].lowercase() == "planekey") {
                        planeEntitites[item] = PlaneEntity(item)
                    }
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
                    val item = customItemMap[args[1].lowercase()]!!.clone()
                    player.inventory.addItem(item)
                    sender.sendMessage("You just gave ${player.displayName} a ${item.itemMeta.displayName}!")
                    return true
                }
            }
            sender.sendMessage("You must provide both a Player and Item argument to use this command!")
            return true
        }
        return false
    }
}