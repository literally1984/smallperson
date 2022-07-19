package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.Utils.InventoryUtils
import games.bnogocarft.bnogorpg.Utils.PItems.PPlayer.BPlayers
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent

class RecipeBookListeners : Listener {

    @EventHandler
    fun onPlayerClickRecipe(e: InventoryClickEvent) {
        if (!InventoryUtils.isInRecipeSlot(e.slot) || e.currentItem == null) {
            return
        }

        val clickItem = e.currentItem
        if (RecipeBook.getRecipeFor(clickItem) != null) { // Checks if the ItemStack has a valid recipe page
            e.whoClicked.openInventory(RecipeBook.getRecipeFor(clickItem)!!.pageInventory) // Opens recipe page inventory to player
            val player = BPlayers.BPlayerMap[e.whoClicked]
            return
        }
    }
}