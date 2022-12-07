package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.entity.player.bPlayer
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerMoveEvent

class PlayerUtilListeners : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onClick(e: PlayerInteractEvent) {
        if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
            e.player.bPlayer().isRightClicking = true
            e.player.bPlayer().rcLastTick = true
        }

        if (e.action == Action.LEFT_CLICK_AIR || e.action == Action.LEFT_CLICK_BLOCK) {
            e.player.bPlayer().isLeftClicking = true
            e.player.bPlayer().lcLastTick = true
        }
    }

    @EventHandler
    fun onPlayerHeadRotate(e: PlayerMoveEvent) {
        val newYaw = e.to.yaw
        val bp = e.player.bPlayer()

        if (bp.controlling != null) {
            bp.controlling!!.location.yaw = newYaw
        }
    }
}