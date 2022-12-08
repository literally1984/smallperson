package me.bnogocarft.bnogorpg.reforge

import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent

class ReforgeBlockListener : Listener {
    @EventHandler
    fun onReforgeOpen(e: PlayerInteractEvent) {
        if (e.action == Action.RIGHT_CLICK_BLOCK &&
            e.clickedBlock.type == Material.DIAMOND_BLOCK
        ) {

            e.player.openInventory(ReforgeUtils.reforgeGUI)
        }
    }
}