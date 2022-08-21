package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import games.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

data class Auction(
    val item: ItemStack,
    val startingBid: Double,
    val creator: Player,
    var timeLeft: AuctionTime) {

    var currentBidder: Player? = null
    var highestBid: Double = 0.0
    var ID = Main.lastAuctionID++
    var ended = false

    constructor(
        item: ItemStack,
        startingBid: Double,
        creator: Player,
        timeLeft: AuctionTime,
        currentBidder: Player?,
        highestBid: Double,
        ID: Int) : this(item, startingBid, creator, timeLeft) {
            this.ID = ID
            this.currentBidder = currentBidder
            this.highestBid = highestBid
        }

    fun endAuction() {
        Main.auctions.remove(this)
        if (highestBid > 0) {
            currentBidder!!.inventory.addItem(item)
            Main.econ.depositPlayer(currentBidder!!.displayName, highestBid)
        }

        for (player in Bukkit.getOnlinePlayers()) {
            player.sendMessage("${ChatColor.GREEN}Auction $ID has ended with a highest bid of $$highestBid")
        }
        ended = true
    }

    init {
        Main.auctions.add(this)
        Main.lastAuctionID += 1
    }
}