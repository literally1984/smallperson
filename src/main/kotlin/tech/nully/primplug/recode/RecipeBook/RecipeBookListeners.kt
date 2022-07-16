package tech.nully.primplug.recode.RecipeBook

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import tech.nully.primplug.recode.Utils.InventoryUtils

class RecipeBookListeners : Listener {

    @EventHandler
    fun onPlayerClickRecipe(e: InventoryClickEvent) {
        if (InventoryUtils.isInDoubleChest(e.slot)) {

        }
    }
}