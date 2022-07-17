package games.bnogocarft.bnogorpg.recode.RecipeBook

import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import tech.nully.primplug.recode.Utils.InventoryUtils
import tech.nully.primplug.recode.Utils.PItems.PPlayer.BPlayers

class RecipeBookListeners : Listener {

    @EventHandler
    fun onPlayerClickRecipe(e: InventoryClickEvent) {
        if (!InventoryUtils.isInRecipeSlot(e.slot) || e.currentItem == null) {
            return
        }

        val clickItem = e.currentItem
        if (RecipeBook.getRecipeFor(clickItem) != null) { // Checks if the ItemStack has a valid recipe page
            e.whoClicked.openInventory(RecipeBook.getRecipeFor(clickItem)!!.pageInventory) // Opens recipe page inventory to player
            val player = BPlayers.BPlayerMap?.get(e.whoClicked as Player)
            return
        }
    }
}