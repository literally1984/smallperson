package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import org.bukkit.scheduler.BukkitRunnable

class AuctionTimer(auction: Auction) : BukkitRunnable() {
    val auc = auction
    override fun run() {
        auc.timeLeft.seconds -= 1

    }
}