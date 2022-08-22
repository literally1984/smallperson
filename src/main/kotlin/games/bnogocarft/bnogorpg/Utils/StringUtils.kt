package games.bnogocarft.bnogorpg.Utils

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.Auction
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTime
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTimer
import org.bukkit.Bukkit
import org.bukkit.ChatColor

val logo = "[BnogoRPG]"

class StringUtils {
    companion object {
        val Common = "${ChatColor.BOLD}${ChatColor.GRAY}"
        val Uncommon = "${ChatColor.BOLD}${ChatColor.GREEN}"
        val Rare = "${ChatColor.BOLD}${ChatColor.BLUE}"
        val Epic = "${ChatColor.BOLD}${ChatColor.LIGHT_PURPLE}"
        val Legendary = "${ChatColor.BOLD}${ChatColor.GOLD}"
        val Mythical = "${ChatColor.BOLD}${ChatColor.RED}"
        val Divine = "${ChatColor.BOLD}${ChatColor.AQUA}"
    }
}

fun encode(s: String): String {
    return s.replace("", "§")
}

fun decode(s: String): String {
    return s.replace("§", "")
}

fun serializeAuction(auction: Auction): String {
    var returnString = ""
    for (line in serializeItem(auction.item)) {
        returnString += "$line,"
    }
    returnString += "itemDataSeperator,"
    returnString += "${auction.startingBid},"
    returnString += "${auction.creator.name},"
    returnString += "${auction.timeLeft.seconds},"
    returnString += "${auction.timeLeft.minutes},"
    returnString += "${auction.timeLeft.hours},"
    returnString += "${auction.timeLeft.days},"
    returnString += "${if (auction.currentBidder == null) "null" else auction.currentBidder!!.name},"
    returnString += "${auction.highestBid}"
    returnString += auction.ID

    return returnString
}

fun deserializeAuction(s: String): Auction {
    val splitString = s.split(",itemDataSeperator,")

    val aucData = splitString[1].split(",")

    val item = deserializeItem(splitString[0].split(","))

    val deserializedAuc = Auction(
        item,
        aucData[0].toDouble(),
        try {
            Bukkit.getPlayer(aucData[1])
        } catch (e: NullPointerException) {
            Bukkit.getOfflinePlayer(aucData[1]).player
        },
        AuctionTime(aucData[5].toInt(), aucData[4].toInt(), aucData[3].toInt(), aucData[2].toInt()),
        if (aucData[6] == "null") {
            null
        } else {
            try {
                Bukkit.getPlayer(aucData[6])
            } catch (e: NullPointerException) {
                Bukkit.getOfflinePlayer(aucData[6]).player
            }
        },
        aucData[7].toDouble(),
        aucData[8]
        )

    Main.auctions.add(deserializedAuc)
    Bukkit.getScheduler().runTaskTimer(Main.instance, AuctionTimer(deserializedAuc), 0, 20)
    return deserializedAuc
}