package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.CustomEvents.ArmorWearEvent
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener

class ArmorWearListener : Listener {

    @EventHandler (priority = EventPriority.HIGHEST)
    fun onArmorWear(e: ArmorWearEvent) {
        for (armor in e.player.inventory.armorContents) {

        }
    }
}