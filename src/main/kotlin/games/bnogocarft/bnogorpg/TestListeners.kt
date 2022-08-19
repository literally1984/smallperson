package games.bnogocarft.bnogorpg

import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent

class TestListeners : Listener {

    @EventHandler
    fun onPlayerClickInv(e: InventoryClickEvent) {
        println(e.slot)
        println(e.rawSlot)
        println(e.slotType.name)
    }
}