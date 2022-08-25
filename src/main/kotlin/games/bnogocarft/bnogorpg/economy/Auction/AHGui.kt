package games.bnogocarft.bnogorpg.economy.Auction

import games.bnogocarft.bnogorpg.Utils.BackgroundItem
import games.bnogocarft.bnogorpg.Utils.GUIButton
import games.bnogocarft.bnogorpg.Utils.GUIFactory
import games.bnogocarft.bnogorpg.Utils.StandardBackground
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

class AHGui {
    companion object {
        lateinit var gui: Inventory
        lateinit var weapon: ItemStack
    }

    init {
        val fGui = GUIFactory.createInventory("Auction House", 54)

        val layer1bk = ArrayList<BackgroundItem>()
        for (index in 0..53) {
            layer1bk.add(BackgroundItem(StandardBackground, 0))
        }


    }

    private fun createWeaponButton() {

    }
}