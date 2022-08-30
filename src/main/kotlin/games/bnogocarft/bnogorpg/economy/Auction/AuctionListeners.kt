package games.bnogocarft.bnogorpg.economy.Auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.guis
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent

class AuctionListeners : Listener {
    @EventHandler
    fun onAuctionPut(e: InventoryClickEvent) {
        if (e.inventory.name == "Auction House") {
            if (e.click == ClickType.SHIFT_LEFT) {
                e.isCancelled = true
            }
        }
    }

    @EventHandler
    fun onInfoGUIClose(e: InventoryCloseEvent) {
        if (e.inventory.name.contains("Auction Info for:")) {
            for (gui in guis) {
                if (gui.inv.name == e.inventory.name) {
                    guis.remove(gui)
                }
            }
        }
    }
}