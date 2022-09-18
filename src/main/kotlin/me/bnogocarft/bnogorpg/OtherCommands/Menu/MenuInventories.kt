package me.bnogocarft.bnogorpg.OtherCommands.Menu

import me.bnogocarft.bnogorpg.Utils.*
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.*
import org.bukkit.event.block.BlockPlaceEvent

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
        val spellLayer = GUILayer()
        for (slot in 1..8) {
            spellLayer.backgrounds.add(GUIBackground(player.spells[slot-1].displayItem, slot))
        }


    }
}