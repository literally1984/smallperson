package me.bnogocarft.bnogorpg.commands

import me.bnogocarft.bnogorpg.planes.Plane
import me.bnogocarft.bnogorpg.planes.planeEntitites
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BArmor
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BWeapon
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftGear
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.utils.bitem.factory.BItemFactory
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
                    if (p.displayName.lowercase()
                            .equals(args[0].lowercase()) || p.name.lowercase() == args[0].lowercase()
                    ) {
                        argIsValidPlayer = true
                        player = p
                    }
                }

                if (!argIsValidPlayer) {
                    Bukkit.getLogger().log(Level.ALL, "You must provide a valid player to use this command!")
                    return true
                }

                if (customItemMap.containsKey(args[1].lowercase())) {
                    val item =
                        BItemFactory.makeItem(BItemUtils.getBMaterial(customItemMap[args[0].lowercase()]!!.clone()))
                    player.inventory.addItem(item)
                    Bukkit.getLogger()
                        .log(Level.ALL, "You just gave ${player.displayName} a ${item.itemMeta.displayName}!")
                    return true
                }
            }
        }

        if (sender is Player) {
            if (args.size == 1) {
                if (customItemMap.containsKey(args[0].lowercase())) {
                    val item: ItemStack =
                        BItemFactory.makeItem(
                            if (BItemFactory.getCraftType(customItemMap[args[0].lowercase()]!!) == CraftItemType.WEAPON) {
                                CraftGear(customItemMap[args[0].lowercase()]!!.clone()).craft()
                            } else {
                                CraftGear(customItemMap[args[0].lowercase()]!!.clone()).craft()
                            }
                        )
                    sender.inventory.addItem(item)
                    when (BItemUtils.getBType(item)) {
                        "weapon" -> BItemUtils.addBWeapon(item, BWeapon(item))
                        "armor" -> BItemUtils.addBArmor(item, BArmor(item))
                    }
                    sender.sendMessage("You gave yourself a ${item.itemMeta.displayName}")
                    if (args[0].lowercase() == "planekey") {
                        planeEntitites[item] = Plane(item)
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
                    val item =
                        BItemFactory.makeItem(BItemUtils.getBMaterial(customItemMap[args[0].lowercase()]!!.clone()))
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