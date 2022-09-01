package games.bnogocarft.bnogorpg.economy.Auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.guis
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.scheduler.BukkitRunnable

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
            try {
                for (gui in guis) {
                    if (gui.inv.name == e.inventory.name) {
                        guis.remove(gui)
                    }
                }
            } catch (ex: ConcurrentModificationException) {
                Bukkit.getScheduler().scheduleSyncDelayedTask(
                    Main.instance,
                    tryAgainTimer(e.inventory), 30
                )
            }
        }
    }
}

class tryAgainTimer(val inv: Inventory) : BukkitRunnable() {
    override fun run() {
        for (gui in guis) {
            if (gui.inv.name == inv.name) {
                guis.remove(gui)
            }
        }
    }
}