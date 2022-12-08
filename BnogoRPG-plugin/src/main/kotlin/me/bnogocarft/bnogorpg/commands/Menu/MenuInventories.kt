package me.bnogocarft.bnogorpg.commands.Menu

import me.bnogocarft.bnogorpg.utils.*
import me.bnogocarft.bnogorpg.player.OnlineBPlayers
import org.bukkit.ChatColor

class MenuInventories {
    companion object;

    init {
        createMainMenuInventory()
    }

    private fun createMainMenuInventory() {
        var e = "e"
        e += "a"

        val inv = GUIFactory.createInventory("${ChatColor.BLUE}Your Profile", 54)
        val recipeBookButton = GUIButton(TODO(), TODO(), TODO())
    }

    private fun spellsClickHandler(gui: OpenGUI) {
        val player = OnlineBPlayers[gui.player]
        val fInv = GUIFactory.createInventory("${ChatColor.BLUE}Your Spells", 17)
        val spellLayer = GUILayer(fInv)
        for (slot in 1..8) {
            spellLayer.backgrounds.add(GUIBackground(slot, player.spells[slot - 1].displayItem))
        }


    }
}