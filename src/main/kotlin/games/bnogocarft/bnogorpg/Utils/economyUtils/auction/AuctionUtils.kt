package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItemType
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import games.bnogocarft.bnogorpg.Utils.Exceptions.InvalidConstructorInputException
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import java.sql.ResultSet


fun getAuctionType(item: ItemStack): AuctionType {
    if (item.hasItemMeta()) {
        var bItem: BItem? = null
        try {
            bItem = BItem(item)
        } catch (ignore: InvalidConstructorInputException) {}
        if (bItem != null) {
            return when (bItem.type) {
                BItemType.TALISMAN -> AuctionType.MAGIC_ITEMS
                BItemType.SCROLL -> AuctionType.MAGIC_ITEMS
                BItemType.WEAPON -> AuctionType.WEAPON
                BItemType.ARMOR -> AuctionType.ARMOR
                BItemType.MISC -> AuctionType.OTHER
            }
        }
        // Checks if the item is a food item
    } else {
        if (item.type == Material.COOKED_BEEF ||
            item.type == Material.RAW_BEEF ||
            item.type == Material.RAW_CHICKEN ||
            item.type == Material.RAW_FISH ||
            item.type == Material.COOKED_CHICKEN ||
            item.type == Material.COOKED_FISH ||
            item.type == Material.PORK ||
            item.type == Material.GRILLED_PORK ||
            item.type == Material.APPLE ||
            item.type == Material.GOLDEN_APPLE ||
            item.type == Material.GOLDEN_CARROT ||
            item.type == Material.POTATO_ITEM ||
            item.type == Material.MELON) {
            return AuctionType.FOOD
        }

        if (item.type.isBlock) {
            return AuctionType.BLOCKS
        }

        return AuctionType.OTHER
    }

    return AuctionType.OTHER
}

fun getAuctions(result: ResultSet): List<Auction> {
    val auctions = mutableListOf<Auction>()
    while (result.next()) {
        /*val auction = Auction(
            result.getString()
        )
        auctions.add(auction)
         */
    }
    return auctions
}

fun createAuctionItemFor(auc: Auction): ItemStack {
    val item = auc.item.clone()
    lateinit var meta: ItemMeta
    lateinit var lore: ArrayList<String>

    if (item.hasItemMeta()) {
        meta = auc.item.itemMeta.clone()
        lore = meta.lore as ArrayList<String>
        if (lore[lore.size-1].contains("${ChatColor.GOLD}ID: ")) {
            return item
        }
    } else {
        meta = Bukkit.getItemFactory().getItemMeta(item.type)
        lore = ArrayList()
        lore.add("")
    }

    lore.add("------------------------------")
    lore.add("${ChatColor.GOLD}Seller: ${ChatColor.GRAY}${auc.creator}")
    lore.add("${ChatColor.GOLD}Starting Bid: ${ChatColor.GRAY}${auc.startingBid}")
    lore.add("")
    lore.add("${ChatColor.GOLD}Highest Bid: ${ChatColor.GRAY}${auc.highestBid}")
    lore.add("${ChatColor.GOLD}Highest Bidder: ${ChatColor.GRAY}" +
            "${
                if (auc.currentBidder == null) {
                    "N/A"
                } else {
                    auc.currentBidder
                }
            }")
    lore.add("")
    lore.add("${ChatColor.GOLD}Ends in: ${ChatColor.GRAY}" +
            "${auc.timeLeft.days} Days, " +
            "${auc.timeLeft.hours} Hours, " +
            "${auc.timeLeft.minutes} Minutes, " +
            "${auc.timeLeft.seconds} Seconds")
    lore.add("${ChatColor.GOLD}ID: ${ChatColor.GRAY}${auc.ID}")

    meta.lore = lore
    item.itemMeta = meta
    return item
}

enum class AuctionType {
    WEAPON,
    ARMOR,
    MAGIC_ITEMS,
    FOOD,
    BLOCKS,
    OTHER
}