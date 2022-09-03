package me.bnogocarft.bnogorpg.OtherCommands.Menu

import me.bnogocarft.bnogorpg.Utils.GUIButton
import me.bnogocarft.bnogorpg.Utils.GUIFactory
import org.bukkit.ChatColor

class MenuInventories {
    companion object;

    init {
        createMainMenuInventory()
    }

    private fun createMainMenuInventory() {
        val inv = GUIFactory.createInventory("${ChatColor.BLUE}Main Menu", 54)
        val recipeBookButton = GUIButton(TODO(), TODO(), TODO())
    }
}