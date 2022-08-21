package games.bnogocarft.bnogorpg.economy.Auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Main.Companion.auctions
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.Auction
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTime
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTimer
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitTask
import java.lang.NumberFormatException

class AuctionCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command!")
            return true
        }

        if (args.isNotEmpty()) {
            when (args[0]) {
                "list" -> {
                    for (i in 0..9) {
                        val auc = try {
                            auctions[i]
                        } catch (e: IndexOutOfBoundsException) {
                            sender.sendMessage("No more auctions found!")
                            break
                        }

                        sender.sendMessage("${auc.ID} " +
                                "${
                                    if (sender.itemInHand != null) {
                                        if (sender.itemInHand.hasItemMeta()) {
                                            sender.itemInHand.itemMeta.displayName
                                        } else {
                                            sender.itemInHand.type.name
                                        }
                                    } else {
                                        sender.sendMessage("You are not holding an item to auction!")
                                        return true
                                    }
                                } " +
                                "Current Bid: ${auc.highestBid} Ending in: " +
                                "${auc.timeLeft.days}D, " +
                                "${auc.timeLeft.hours}H, " +
                                "${auc.timeLeft.minutes}M, " +
                                "${auc.timeLeft.seconds}S")
                    }
                    return true
                }

                "bid" -> {
                    if (args.size != 3) {
                        sender.sendMessage("Insufficient Arguments!")
                        return true
                    }
                    var auc: Auction? = null
                    for (auction in auctions) {
                        try {
                            if (auction.ID == args[1].toInt()) {
                                auc = auction
                            }
                        } catch (e: NumberFormatException) {
                            sender.sendMessage("Invalid auction ID")
                            return true
                        }
                    }

                        if (auc == null) {
                        sender.sendMessage("Auction not found!")
                        return true
                    }

                        val bid = try {
                        args[2].toDouble()
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("Invalid bid amount")
                        return true
                    }

                    if (bid < auc.highestBid) {
                        sender.sendMessage("Bid must be higher than current bid!")
                        return true
                    }

                        if (bid > Main.econ.getBalance(sender.name)) {
                        sender.sendMessage("You don't have enough money to bid $bid!")
                        return true
                    }

                    auc.highestBid = bid
                    auc.currentBidder = sender
                    Main.econ.withdrawPlayer(sender.name, bid)
                    sender.sendMessage("You bid $bid on ${auc.ID} (" +
                            "${
                                if (auc.item.hasItemMeta())
                                    auc.item.itemMeta.displayName
                                else
                                    auc.item.type.toString()
                            })")
                    }

                "create" -> {
                    // /auction create <time> <starting bid>
                    if (args.size != 3) {
                        sender.sendMessage("Insufficient arguments!")
                        return true
                    }

                    val time = try {
                        AuctionTime(args[1])
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("Invalid time! (NumberFormatException)")
                        return true
                    } catch (e: IndexOutOfBoundsException) {
                        sender.sendMessage("Invalid time! (IndexOutOfBoundsException)")
                        return true
                    }

                    val startingBid = try {
                        args[2].toDouble()
                    } catch (e: NumberFormatException) {
                        sender.sendMessage("Invalid bid amount")
                        return true
                    }

                    lateinit var countdown: BukkitTask
                    val auc = Auction(sender.itemInHand, countdown, startingBid, sender, time)
                    countdown = Bukkit.getScheduler().runTaskTimer(Main.instance, AuctionTimer(auc), 0, 20)
                }

                else -> {
                    sender.sendMessage("Invalid command arguments!")
                    return true
                }
            }
        } else {
            sender.sendMessage("You must provide one of the following arguments: list, bid, add")
            return true
        }
        return false
    }
}