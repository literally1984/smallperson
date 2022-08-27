package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItemType
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import games.bnogocarft.bnogorpg.Utils.Exceptions.InvalidConstructorInputException
import org.bukkit.Material
import org.bukkit.inventory.ItemStack


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

enum class AuctionType {
    WEAPON,
    ARMOR,
    MAGIC_ITEMS,
    FOOD,
    BLOCKS,
    OTHER
}