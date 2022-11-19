package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.events.ArmorWearEvent
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener

class ArmorWearListener : Listener {

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onArmorWear(e: ArmorWearEvent) {
        for (armor in e.player.inventory.armorContents) {
            TODO("make s set bonus checker")
        }
    }
}