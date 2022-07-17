package games.bnogocarft.bnogorpg.recode.Listeners

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerItemHeldEvent

class HotbarChangeEvent : Listener {
    @EventHandler
    fun onHotbarChange(event: PlayerItemHeldEvent) {
        val player = event.player
        val oldItem = player.inventory.getItem(event.previousSlot)

        if (player.inventory.getItem(event.newSlot) == null) { // null checker for the [newItem] variable

        }
        val newItem = player.inventory.getItem(event.newSlot)
    }
}