package me.bnogocarft.bnogorpg.Player.Inspect

import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.guis
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.player.PlayerInteractEntityEvent

class InspectListener : Listener {
    @EventHandler
    fun onInspectClose(e: InventoryCloseEvent) {
        if (e.inventory.title.contains("'s Profile")) {
            try {
                for (gui in guis) {
                    if (e.inventory.title == gui.inv.title) {
                        guis.remove(gui)
                    }
                }
            } catch (ignored: ConcurrentModificationException) {}
        }
    }

    @EventHandler
    fun onInspectOpen(e: PlayerInteractEntityEvent) {
        if (e.rightClicked is Player && e.player.isSneaking) {
            e.player.openInventory(OnlineBPlayers[e.rightClicked]?.generateInspectGui())
        }
    }
}