package me.bnogocarft.bnogorpg.utils.auction

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.database.*
import me.bnogocarft.bnogorpg.utils.Senders.ItemSender
import me.bnogocarft.bnogorpg.utils.Senders.MessageSender
import me.bnogocarft.bnogorpg.utils.toByteArray
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.transactions.transaction

data class Auction(
    val itemStack: ItemStack,
    val startingBid: Double,
    val creator: String,
    var endTimeUnix: Int
) {

    var currentBidder: String? = null
    var highestBid: Double = 0.0
    var ID: String
    var task: BukkitTask? = null
    var ended = false
    val itemType = getAuctionType(itemStack)

    constructor(
        item: ItemStack,
        startingBid: Double,
        creator: String,
        endTimeUnix: Int,
        currentBidder: String?,
        highestBid: Double,
        ID: Int
    ) : this(item, startingBid, creator, endTimeUnix) {
        var id = ""
        id += ID
        while (id.length < 6) {
            id = id.toCharArray().toMutableList().add(0, '0').toString()
        }
        this.currentBidder = currentBidder
        this.highestBid = highestBid
    }

    fun endAuction() {
        Main.activeAuctions.remove(this)
        auctions.deleteWhere {
            id eq ID.toInt()
        }

        if (highestBid > 0) {
            val sender = MessageSender(currentBidder!!)
            sender.messages.add(
                "${ChatColor.GREEN}You have won the auction for " +
                        "${
                            if (itemStack.hasItemMeta())
                                itemStack.itemMeta.displayName
                            else
                                itemStack.type.name
                        } (#$ID)"
            )
            sender.messages.add("${ChatColor.GREEN}Check your stash for the item with /stash!")
            sender.sendMessage()

            Main.econ.depositPlayer(creator, highestBid)
            val sender2 = MessageSender(creator)
            sender2.messages.add(
                "${ChatColor.GREEN}You received $highestBid from auction #$ID for your " +
                        "${
                            if (itemStack.hasItemMeta())
                                itemStack.itemMeta.displayName
                            else
                                itemStack.type.name
                        }!"
            )
            sender2.sendMessage()

            val bidderSender = ItemSender(currentBidder!!)

            bidderSender.items.add(itemStack)
            bidderSender.sendItems()
        } else {
            val sender = MessageSender(creator)
            val itemSender = ItemSender(creator)

            sender.messages.add("${ChatColor.RED}Your auction for ${if (itemStack.hasItemMeta()) itemStack.itemMeta.displayName else itemStack.type.name} (#$ID) got no bids!")
            sender.messages.add("${ChatColor.GREEN}You have been refunded your item in your stash!")
            sender.sendMessage()

            itemSender.items.add(itemStack)
            itemSender.sendItems()
        }

        for (player in Bukkit.getOnlinePlayers()) {
            player.sendMessage("${ChatColor.GREEN}Auction $ID has ended with a highest bid of $$highestBid")
        }
        ended = true
    }

    init {
        Main.activeAuctions.add(this)
        transaction {
            auctions.insert {
                it[seller] = creator
                it[endTime] = endTimeUnix * 1000
                it[bidder] = null
                it[bid] = null
                it[item] = itemStack.toByteArray()
            }
        }
        ID = (Main.lastAuctionID.toInt() + 1).toString()
        var stringBuild = ""
        for (i in 1..6 - ID.length) {
            stringBuild += "0"
        }
        ID = stringBuild + ID

        Main.lastAuctionID = ID
    }
}