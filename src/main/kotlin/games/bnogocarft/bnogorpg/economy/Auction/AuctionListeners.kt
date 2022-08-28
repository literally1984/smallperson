package games.bnogocarft.bnogorpg.economy.Auction

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryType

class AuctionListeners : Listener{
    @EventHandler
    fun onAuctionPut(e: InventoryClickEvent) {
        if (e.inventory.name == "Auction House") {
            if (e.click == ClickType.SHIFT_LEFT) {
                e.isCancelled = true
            }
        }
    }
}