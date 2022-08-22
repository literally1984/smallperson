package games.bnogocarft.bnogorpg.Player.Stash

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCloseEvent

class StashListener : Listener {
    @EventHandler
    fun onPlayerCloseStash(e: InventoryCloseEvent) {
        if (e.inventory.name == "${ChatColor.GOLD}Your Stash") {
            val player = BPlayers[e.player]
            player!!.stash.clear()
            for (item in e.inventory.contents) {
                player.stash.add(item)
            }
        }
    }
}