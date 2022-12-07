package me.bnogocarft.bnogorpg.utils.auction

import org.bukkit.scheduler.BukkitRunnable

class AuctionTimer(auction: Auction) : BukkitRunnable() {
    val auc = auction
    override fun run() {
        if ((System.currentTimeMillis() / 1000) >= auc.endTimeUnix && !(auc.ended)) {
            auc.endAuction()
            try {
                cancel()
            } catch (ignored: IllegalStateException) {
            }
            return
        }
        if (auc.ended) {
            try {
                cancel()
            } catch (ignored: IllegalStateException) {
            }
        }
    }
}