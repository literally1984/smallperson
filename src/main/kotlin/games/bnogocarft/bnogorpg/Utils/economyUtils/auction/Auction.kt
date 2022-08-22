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
    var ID: String = "000000"
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
            if (Bukkit.getOnlinePlayers().contains(Bukkit.getPlayer(currentBidder!!.name))) {
                currentBidder!!.inventory.addItem(item)
                currentBidder!!.sendMessage("${ChatColor.GREEN}You have won the auction for ${if (item.hasItemMeta()) item.itemMeta.displayName else item.type.name} (#$ID)")
            } else {
                val player = BPlayers[currentBidder!!]!!
                player.stash.add(item)
            }
            Main.econ.depositPlayer(creator.displayName, highestBid)
            if (Bukkit.getOnlinePlayers().contains(Bukkit.getPlayer(creator.displayName))) {
                currentBidder!!.inventory.addItem(item)
                currentBidder!!.sendMessage("${ChatColor.GREEN}You received $highestBid from auction #$ID for your ${if (item.hasItemMeta()) item.itemMeta.displayName else item.type.name}!")
            }
        }

        for (player in Bukkit.getOnlinePlayers()) {
            player.sendMessage("${ChatColor.GREEN}Auction $ID has ended with a highest bid of $$highestBid")
        }
        ended = true
    }

    init {
        Main.auctions.add(this)
        val splitAucID = Main.lastAuctionID.split("").toMutableList()
        splitAucID[splitAucID.size-2].replace(splitAucID[splitAucID.size-2], (splitAucID[splitAucID.size-2].toInt() + 1).toString())
        for (char in splitAucID) {
            if (char != "") {
                if (char.toInt() > 9) {
                    splitAucID[splitAucID.indexOf(char)].replace(splitAucID[splitAucID.indexOf(char)], (splitAucID[splitAucID.indexOf(char)].toInt() - 10).toString())
                    splitAucID[splitAucID.indexOf(char) - 1].replace(splitAucID[splitAucID.indexOf(char) - 1], (splitAucID[splitAucID.indexOf(char) - 1].toInt() + 1).toString())
                }
            }
        }
        ID = splitAucID.joinToString("")
        Main.lastAuctionID += 1
    }
}