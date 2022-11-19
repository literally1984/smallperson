package me.bnogocarft.bnogorpg.utils

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.auction.Auction
import me.bnogocarft.bnogorpg.utils.auction.AuctionTimer
import org.bukkit.Bukkit
import org.bukkit.ChatColor

val logo = "[BnogoRPG]"

class StringUtils {
    companion object {
        val Common = "${ChatColor.GOLD}✪"
        val Uncommon = "${ChatColor.GOLD}✪✪"
        val Rare = "${ChatColor.GOLD}✪✪✪"
        val Epic = "${ChatColor.GOLD}✪✪✪✪"
        val Legendary = "${ChatColor.GOLD}✪✪✪✪✪"
        val Mythical = "${ChatColor.GOLD}✪✪✪✪✪✪"
        val Divine = "${ChatColor.GOLD}✪✪✪✪✪✪✪"
    }
}

fun encode(s: String): String {
    return s.replace("", "§").dropLast(1)
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
    returnString += "${auction.creator},"
    returnString += "${auction.timeLeft},"
    returnString += "${if (auction.currentBidder == null) "null" else auction.currentBidder!!},"
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
            Bukkit.getPlayer(aucData[1]).name
        } catch (e: NullPointerException) {
            Bukkit.getOfflinePlayer(aucData[1]).player.name
        },
        aucData[2].toInt(),
        if (aucData[6] == "null") {
            null
        } else {
            try {
                Bukkit.getPlayer(aucData[3]).name
            } catch (e: NullPointerException) {
                Bukkit.getOfflinePlayer(aucData[3]).player.name
            }
        },
        aucData[4].toDouble(),
        aucData[5]
    )

    val task = Bukkit.getScheduler().runTaskTimer(Main.instance, AuctionTimer(deserializedAuc), 0, 20)
    deserializedAuc.task = task
    Main.auctions.add(deserializedAuc)
    return deserializedAuc
}