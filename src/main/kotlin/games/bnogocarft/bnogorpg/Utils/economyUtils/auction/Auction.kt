package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.BPlayer.OfflineBPlayer
import games.bnogocarft.bnogorpg.Utils.Senders.ItemSender
import games.bnogocarft.bnogorpg.Utils.Senders.MessageSender
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask

data class Auction(
    val item: ItemStack,
    val startingBid: Double,
    val creator: Player,
    var timeLeft: AuctionTime
) {

    var currentBidder: Player? = null
        set(value) {
            field = value
            currentBidderName = value!!.name
        }
    var currentBidderName: String? = null
    val creatorName = creator.name
    var highestBid: Double = 0.0
    var ID: String = "0"
    var task: BukkitTask? = null
    var ended = false
    val itemType = getAuctionType(item)

    constructor(
        item: ItemStack,
        startingBid: Double,
        creator: Player,
        timeLeft: AuctionTime,
        currentBidder: Player?,
        highestBid: Double,
        ID: String
    ) : this(item, startingBid, creator, timeLeft) {
        this.ID = ID
        this.currentBidder = currentBidder
        this.highestBid = highestBid
    }

    fun endAuction() {
        Main.auctions.remove(this)
        if (highestBid > 0) {
            var bidderOnline = false
            var creatorOnline = false
            for (player in Bukkit.getOnlinePlayers()) {
                if (player.displayName == currentBidder?.displayName) {
                    bidderOnline = true
                }

                if (player.displayName == creator.displayName) {
                    creatorOnline = true
                }
            }

            val sender = MessageSender(currentBidder!!.name)
            sender.messages.add(
                "${ChatColor.GREEN}You have won the auction for " +
                        "${
                            if (item.hasItemMeta())
                                item.itemMeta.displayName
                            else
                                item.type.name
                        } (#$ID)"
            )
            sender.messages.add("${ChatColor.GREEN}Check your stash for the item with /stash!")
            sender.sendMessage()

            Main.econ.depositPlayer(creator.name, highestBid)
            val sender2 = MessageSender(creator.name)
            sender2.messages.add(
                "${ChatColor.GREEN}You received $highestBid from auction #$ID for your " +
                        "${
                            if (item.hasItemMeta())
                                item.itemMeta.displayName
                            else
                                item.type.name
                        }!"
            )
            sender2.sendMessage()

            val bidderSender = ItemSender(currentBidderName!!)

            bidderSender.items.add(item)
            bidderSender.sendItems()
        } else {
            val sender = MessageSender(creatorName)
            val itemSender = ItemSender(creatorName)

            sender.messages.add("${ChatColor.RED}Your auction for ${if (item.hasItemMeta()) item.itemMeta.displayName else item.type.name} (#$ID) got no bids!")
            sender.messages.add("${ChatColor.GREEN}You have been refunded your item in your stash!")
            sender.sendMessage()

            itemSender.items.add(item)
            itemSender.sendItems()
        }

        for (player in Bukkit.getOnlinePlayers()) {
            player.sendMessage("${ChatColor.GREEN}Auction $ID has ended with a highest bid of $$highestBid")
        }
        ended = true
    }

    init {
        Main.auctions.add(this)
        ID = (Main.lastAuctionID.toInt() + 1).toString()
        var stringBuild = ""
        for (i in 1..6 - ID.length) {
            stringBuild += "0"
        }
        ID = stringBuild + ID
        Main.lastAuctionID = ID
    }
}