package me.bnogocarft.bnogorpg.OtherCommands.Menu

import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.GUIButton
import me.bnogocarft.bnogorpg.Utils.GUIFactory
import me.bnogocarft.bnogorpg.Utils.OpenGUI
import org.bukkit.ChatColor

class MenuInventories {
    companion object;

    init {
        createMainMenuInventory()
    }

    private fun createMainMenuInventory() {
        val inv = GUIFactory.createInventory("${ChatColor.BLUE}Your Profile", 54)
        val recipeBookButton = GUIButton(TODO(), TODO(), TODO())
    }

    private fun spellsClickHandler(gui: OpenGUI) {
        val player = OnlineBPlayers[gui.player]

    }
}