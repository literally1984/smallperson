package me.bnogocarft.bnogorpg.player.Stash

import me.bnogocarft.bnogorpg.player.OnlineBPlayers
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCloseEvent

class StashListener : Listener {
    @EventHandler
    fun onPlayerCloseStash(e: InventoryCloseEvent) {
        if (e.inventory.name == "${ChatColor.GOLD}Your Stash") {
            val player = OnlineBPlayers[e.player]
            player!!.stash.clear()
            for (item in e.inventory.contents) {
                player.stash.add(item)
            }
        }
    }
}