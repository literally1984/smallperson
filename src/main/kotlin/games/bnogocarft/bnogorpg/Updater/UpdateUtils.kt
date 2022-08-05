package games.bnogocarft.bnogorpg.Updater

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import org.bukkit.inventory.ItemStack

class UpdateUtils {
    companion object {
        fun update(item: ItemStack) {
            // Checks if the BType is "armor" or "weapon"
            if (BItemUtils.getBType(item) == "armor" || BItemUtils.getBType(item) == "weapon") {
                val bitem = BItemUtils.getBGear(item)
                if (bitem.lastUpdate != Main.patch) {

                }
            }
        }
    }
}