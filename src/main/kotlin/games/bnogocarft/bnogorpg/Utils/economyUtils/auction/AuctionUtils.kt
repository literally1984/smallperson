package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

import org.bukkit.inventory.ItemStack


fun getAuctionType(item: ItemStack): AuctionType {
    if (item.hasItemMeta()) {
        if (item.itemMeta.displayName.contains("sword")  ||
            item.itemMeta.displayName.contains("blade")) {
            return AuctionType.WEAPON
        } else if (item.itemMeta.displayName.contains("helmet") ||
            item.itemMeta.displayName.contains("chestplate") ||
            item.itemMeta.displayName.contains("leggings") ||
            item.itemMeta.displayName.contains("boots")) {
            return AuctionType.ARMOR
        } else return AuctionType.OTHER
    } else return AuctionType.OTHER
}

enum class AuctionType {
    WEAPON,
    ARMOR,
    BLOCK,
    MAGIC_ITEMS,
    FOOD,
    BLOCKS,
    OTHER
}