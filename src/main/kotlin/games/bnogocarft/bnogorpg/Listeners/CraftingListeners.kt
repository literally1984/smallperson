package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.CraftItemEvent
import org.bukkit.event.inventory.PrepareItemCraftEvent

class CraftingListeners : Listener {

    @EventHandler
    fun onCraft(event: CraftItemEvent) {
        if (event.recipe.result.hasItemMeta() && (
                    event.recipe.result.itemMeta.displayName.contains("diamond", true) ||
                            event.recipe.result.itemMeta.displayName.contains("gold", true) ||
                            event.recipe.result.itemMeta.displayName.contains("iron", true) ||
                            event.recipe.result.itemMeta.displayName.contains("stone", true) ||
                            event.recipe.result.itemMeta.displayName.contains("leather", true) ||
                            event.recipe.result.itemMeta.displayName.contains("wood", true))
        ) {
            print("trigger")
            if (event.inventory.result != null) {
                event.inventory.result = BItemFactory.makeItem(BItemUtils.getBMaterial(event.inventory.result))
            }
        }
    }
}