package games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack

import org.bukkit.inventory.ItemStack

data class BPickaxe(val item: ItemStack){
    val breakSpeed: Int
    init {
        when (item.itemMeta.displayName) {
            "Diamond Pickaxe" -> breakSpeed = 8
            "Gold Pickaxe" -> breakSpeed = 12
            "Iron Pickaxe" -> breakSpeed = 6
            "Stone Pickaxe" -> breakSpeed = 4
            "Wooden Pickaxe" -> breakSpeed = 2
            else -> breakSpeed = 1
        }
    }
}