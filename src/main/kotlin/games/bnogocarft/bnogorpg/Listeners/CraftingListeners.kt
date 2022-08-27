package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.PrepareItemCraftEvent

class CraftingListeners : Listener {

    @EventHandler
    fun onCraft(event: PrepareItemCraftEvent) {
        if (event.recipe.result.hasItemMeta() && (
                    event.recipe.result.itemMeta.displayName.contains("diamond") ||
                    event.recipe.result.itemMeta.displayName.contains("gold") ||
                    event.recipe.result.itemMeta.displayName.contains("iron") ||
                    event.recipe.result.itemMeta.displayName.contains("stone") ||
                    event.recipe.result.itemMeta.displayName.contains("leather") ||
                    event.recipe.result.itemMeta.displayName.contains("wood"))) {
            event.inventory.result = BItemFactory.makeItem(BItemUtils.getBMaterial(event.inventory.result))
        }
    }
}