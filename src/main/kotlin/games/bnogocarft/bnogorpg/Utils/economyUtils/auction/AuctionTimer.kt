package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import org.bukkit.scheduler.BukkitRunnable

class AuctionTimer(auction: Auction) : BukkitRunnable() {
    val auc = auction
    override fun run() {
        auc.timeLeft.subtract("0D0H0M1S")
        if (auc.ended) {
            auc.task!!.cancel()
        }
        if (auc.timeLeft.seconds <= 0 && auc.timeLeft.minutes <= 0 && auc.timeLeft.hours <= 0 && auc.timeLeft.days <= 0) {
            auc.endAuction()
            cancel()
        }
    }
}