package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
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
    var highestBid: Double = 0.0
    var ID: String = "0"
    var task: BukkitTask? = null
    var ended = false

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
            BPlayers[currentBidder!!]!!.stash.add(item)
            if (Bukkit.getOnlinePlayers().contains(Bukkit.getPlayer(currentBidder!!.name))) {
                currentBidder!!.sendMessage("${ChatColor.GREEN}You have won the auction for ${if (item.hasItemMeta()) item.itemMeta.displayName else item.type.name} (#$ID)")
                currentBidder!!.sendMessage("${ChatColor.GREEN}Check your stash for the item with /stash!")
            }
            Main.econ.depositPlayer(creator.displayName, highestBid)
            if (Bukkit.getOnlinePlayers().contains(Bukkit.getPlayer(creator.displayName))) {
                currentBidder!!.sendMessage("${ChatColor.GREEN}You received $highestBid from auction #$ID for your ${if (item.hasItemMeta()) item.itemMeta.displayName else item.type.name}!")
            }
        } else {
            if (Bukkit.getOnlinePlayers().contains(Bukkit.getPlayer(creator.displayName))) {
                creator.sendMessage("${ChatColor.RED}Your auction for ${if (item.hasItemMeta()) item.itemMeta.displayName else item.type.name} (#$ID) got no bids!")
            }
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
        for (i in 1..6-ID.length) {
            stringBuild += "0"
        }
        ID = stringBuild + ID
        Main.lastAuctionID = ID
    }
}