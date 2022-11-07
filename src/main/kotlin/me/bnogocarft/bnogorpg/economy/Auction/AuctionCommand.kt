package me.bnogocarft.bnogorpg.economy.Auction

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Main.Companion.auctions
import me.bnogocarft.bnogorpg.utils.cloneInv
import me.bnogocarft.bnogorpg.utils.Economy.auction.Auction
import me.bnogocarft.bnogorpg.utils.Economy.auction.AuctionTimer
import me.bnogocarft.bnogorpg.utils.Economy.auction.bidOnAuction
import me.bnogocarft.bnogorpg.utils.Economy.auction.getAuctionByID
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import java.lang.Math.floor

class AuctionCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command!")
            return true
        }

        if (args.isNotEmpty()) {
            when (args[0]) {
                "forceend" -> {
                    if (sender.hasPermission("bnogorpg.auction.forceend")) {
                        if (args.size != 2) {
                            sender.sendMessage("Incorrect arguments. Correct usage: /auction forceend <auction ID>")
                            return true
                        }

                        val auc: Auction
                        try {
                            auc = getAuctionByID(args[1])
                        } catch (e: IllegalArgumentException) {
                            sender.sendMessage("${ChatColor.RED}Invalid auction ID!")
                            return true
                        }

                        auc.endAuction()

                    } else {
                        sender.sendMessage("${ChatColor.RED}You do not have permission to do this!")
                        return true
                    }
                }

                "list" -> {
                    for (i in 0..9) {
                        val auc = try {
                            auctions[i]
                        } catch (e: IndexOutOfBoundsException) {
                            sender.sendMessage("No more auctions found!")
                            break
                        }

                        sender.sendMessage(
                            "${ChatColor.BOLD}${auc.ID}: " +
                                    "${ChatColor.RESET}${ChatColor.GOLD}${
                                        if (auc.item.hasItemMeta()) {
                                            auc.item.itemMeta.displayName
                                        } else {
                                            auc.item.type.name
                                        }
                                    } ${ChatColor.RESET}| " +
                                    "${
                                        if (auc.highestBid > 0) {
                                            "${ChatColor.BLUE}Current Bid: ${auc.highestBid}"
                                        } else {
                                            "${ChatColor.GREEN}Starting Bid: ${auc.startingBid}"
                                        }
                                    } ${ChatColor.LIGHT_PURPLE}Ending in: " +
                                    "${floor(floor(auc.timeLeft / 86400.0))}D, " +
                                    "${floor(floor(auc.timeLeft / 3600.0))}H, " +
                                    "${floor(floor(auc.timeLeft / 60.0))}M, " +
                                    "${floor(auc.timeLeft.toDouble())}S"
                        )
                    }
                    return true
                }

                "house" -> {
                    sender.openInventory(cloneInv(AHGui.mainGui))
                    return true
                }

                "bid" -> {
                    if (args.size != 3) {
                        sender.sendMessage("${ChatColor.RED}Insufficient Arguments!")
                        return true
                    }
                    var auc: Auction? = null
                    for (auction in auctions) {
                        try {
                            if (auction.ID == args[1]) {
                                auc = auction
                            }
                        } catch (e: NumberFormatException) {
                            sender.sendMessage("${ChatColor.RED}Invalid auction ID")
                            return true
                        }
                    }


                    if (auc == null) {
                        sender.sendMessage("${ChatColor.RED}Auction not found!")
                        return true
                    }

                    if (sender.displayName == auc.creator) {
                        sender.sendMessage("${ChatColor.RED}You cannot bid on your own auction!")
                        return true
                    }

                    val bid = try {
                        args[2].toDouble()
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("${ChatColor.RED}Invalid bid amount")
                        return true
                    }

                    if (bid < auc.highestBid || bid < auc.startingBid) {
                        sender.sendMessage("${ChatColor.RED}Bid must be higher than current bid!")
                        return true
                    }

                    if (bid > Main.econ.getBalance(sender.name)) {
                        sender.sendMessage("${ChatColor.RED}You don't have enough money to bid $$bid!")
                        return true
                    }

                    bidOnAuction(sender.name, auc, bid, true)
                }

                "create" -> {
                    var playerAuctions = 0
                    for (a in auctions) {
                        if (a.creator == sender.name) {
                            playerAuctions++
                        }
                    }
                    if (playerAuctions >= 3) {
                        sender.sendMessage("${ChatColor.RED}You can only have 3 auctions at a time!")
                        return true
                    }
                    // /auction create <time> <starting bid>
                    if (args.size != 3) {
                        sender.sendMessage("${ChatColor.RED}Insufficient arguments!")
                        return true
                    }

                    if (sender.itemInHand == null || sender.itemInHand.type == Material.AIR) {
                        sender.sendMessage("${ChatColor.RED}You are not holding an item to auction!")
                        return true
                    }
                    val stringTime = args[1].split(Regex("[A-Za-z]"))

                    val daysMili: Int = (stringTime[0].toInt() * 86400)
                    val hoursMili: Int = (stringTime[1].toInt() * 3600)
                    val minutesMili: Int = (stringTime[2].toInt() * 60)
                    val secondsMili: Int = stringTime[3].toInt()
                    val time = try {
                        daysMili + hoursMili + minutesMili + secondsMili + (System.currentTimeMillis() / 1000)
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("${ChatColor.RED}Invalid time! (NumberFormatException)")
                        return true
                    } catch (e: IndexOutOfBoundsException) {
                        sender.sendMessage("${ChatColor.RED}Invalid time! (IndexOutOfBoundsException)")
                        return true
                    }
                    print(time)
                    print(System.currentTimeMillis() / 1000)

                    val startingBid = try {
                        args[2].toDouble()
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("${ChatColor.RED}Invalid bid amount")
                        return true
                    }

                    val auc = Auction(sender.itemInHand, startingBid, sender.name, time.toInt())
                    val countdown = Bukkit.getScheduler().runTaskTimer(Main.instance, AuctionTimer(auc), 0, 20)
                    auc.task = countdown
                    sender.sendMessage(
                        "${ChatColor.GREEN}You successfully created an auction for your ${ChatColor.BLUE}" +
                                if (sender.itemInHand.hasItemMeta()) {
                                    sender.itemInHand.itemMeta.displayName
                                } else {
                                    sender.itemInHand.type.name
                                }
                    )
                    sender.itemInHand = null
                    sender.sendMessage("${ChatColor.GREEN}with Auction ID ${ChatColor.LIGHT_PURPLE}${auc.ID}")
                    return true
                }

                else -> {
                    sender.sendMessage("${ChatColor.RED}Invalid command arguments!")
                    return true
                }
            }
        } else {
            sender.sendMessage("${ChatColor.RED}You must provide one of the following arguments: list, bid, create, house, forceend")
            return true
        }
        return false
    }
}