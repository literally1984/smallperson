package games.bnogocarft.bnogorpg.economy.Auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Main.Companion.auctions
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.Auction
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTime
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTimer
import games.bnogocarft.bnogorpg.Utils.logo
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import java.util.logging.Level

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

                        for (auc in auctions) {
                            if (args[1] == auc.ID) {
                                sender.sendMessage("${ChatColor.GOLD}You ${ChatColor.RED}${ChatColor.BOLD}Force Ended${ChatColor.GOLD} auction ${ChatColor.BLUE}${ChatColor.BOLD}#${auc.ID}")
                                Bukkit.getLogger().log(
                                    Level.INFO,
                                    "$logo ${ChatColor.GREEN}${sender.displayName} ${ChatColor.RED}${ChatColor.BOLD}Force Ended${ChatColor.GOLD} auction #${auc.ID}"
                                )

                            }
                        }
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
                                            sender.itemInHand.itemMeta.displayName
                                        } else {
                                            sender.itemInHand.type.name
                                        }
                                    } ${ChatColor.RESET}| " +
                                    "${
                                        if (auc.highestBid > 0) {
                                            "${ChatColor.BLUE}Current Bid: ${auc.highestBid}"
                                        } else {
                                            "${ChatColor.GREEN}Starting Bid: ${auc.startingBid}"
                                        }
                                    } ${ChatColor.LIGHT_PURPLE}Ending in: " +
                                    "${auc.timeLeft.days}D, " +
                                    "${auc.timeLeft.hours}H, " +
                                    "${auc.timeLeft.minutes}M, " +
                                    "${auc.timeLeft.seconds}S"
                        )
                    }
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

                    if (sender.displayName == auc.creator.displayName) {
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

                    auc.highestBid = bid
                    auc.currentBidder = sender
                    Main.econ.withdrawPlayer(sender.name, bid)
                    sender.sendMessage(
                        "${ChatColor.GREEN}You bid $bid on ${auc.ID} (" +
                                "${
                                    if (auc.item.hasItemMeta())
                                        auc.item.itemMeta.displayName
                                    else
                                        auc.item.type.toString()
                                })"
                    )
                    return true
                }

                "create" -> {
                    // /auction create <time> <starting bid>
                    if (args.size != 3) {
                        sender.sendMessage("${ChatColor.RED}Insufficient arguments!")
                        return true
                    }

                    if (sender.itemInHand == null) {
                        sender.sendMessage("${ChatColor.RED}You are not holding an item to auction!")
                        return true
                    }
                    val time = try {
                        AuctionTime(args[1])
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("${ChatColor.RED}Invalid time! (NumberFormatException)")
                        return true
                    } catch (e: IndexOutOfBoundsException) {
                        sender.sendMessage("${ChatColor.RED}Invalid time! (IndexOutOfBoundsException)")
                        return true
                    }

                    val startingBid = try {
                        args[2].toDouble()
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("${ChatColor.RED}Invalid bid amount")
                        return true
                    }

                    val auc = Auction(sender.itemInHand, startingBid, sender, time)
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
                    sender.sendMessage("${ChatColor.GREEN}with Auction ID ${ChatColor.LIGHT_PURPLE}${auc.ID}")
                    return true
                }

                else -> {
                    sender.sendMessage("${ChatColor.RED}Invalid command arguments!")
                    return true
                }
            }
        } else {
            sender.sendMessage("${ChatColor.RED}You must provide one of the following arguments: list, bid, add")
            return true
        }
        return false
    }
}