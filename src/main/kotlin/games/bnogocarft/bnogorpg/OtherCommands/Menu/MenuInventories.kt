package games.bnogocarft.bnogorpg.OtherCommands.Menu

import games.bnogocarft.bnogorpg.Utils.GUIButton
import games.bnogocarft.bnogorpg.Utils.InventoryFactory
import org.bukkit.ChatColor

class MenuInventories {
    companion object{

    }

    init {
        createMainMenuInventory()
    }

    private fun createMainMenuInventory() {
        val inv = InventoryFactory.createInventory("${ChatColor.BLUE}Main Menu", 54)
        val recipeBookButton = GUIButton(TODO(), TODO(), TODO())
    }
}