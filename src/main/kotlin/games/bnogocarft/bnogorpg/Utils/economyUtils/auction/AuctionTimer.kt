package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import org.bukkit.scheduler.BukkitRunnable
import kotlin.math.floor

class AuctionTimer(auction: Auction) : BukkitRunnable() {
    val auc = auction
    override fun run() {
        if ((System.currentTimeMillis()/1000) >= auc.timeLeft && !(auc.ended)) {
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