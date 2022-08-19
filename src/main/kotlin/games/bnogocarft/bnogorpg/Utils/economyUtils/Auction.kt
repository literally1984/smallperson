package games.bnogocarft.bnogorpg.Utils.economyUtils

import games.bnogocarft.bnogorpg.Main
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask

data class Auction(val item: ItemStack,
                   val countdown: BukkitTask,
                   val startingBid: Long,
                   val creator: Player,
                   var timeLeft: Long) {

    var currentBidder: Player? = null
    var highestBid: Long = 0

    init {
        Main.auctions.add(this)
        TODO("Add ID's")
    }
}