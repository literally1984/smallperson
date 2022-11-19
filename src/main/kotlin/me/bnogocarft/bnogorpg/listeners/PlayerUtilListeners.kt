package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerInteractEvent

class PlayerUtilListeners : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onClick(e: PlayerInteractEvent) {
        e.player.bPlayer().isRightClicking = true
    }
}