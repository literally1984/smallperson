package games.bnogocarft.bnogorpg.recode.Listeners

import games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack.BItemUtils
import games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer.BPlayers
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerItemHeldEvent

class HotbarChangeEvent : Listener {
    @EventHandler
    fun onHotbarChange(event: PlayerItemHeldEvent) {
        val player = event.player
        val oldItem = player.inventory.getItem(event.previousSlot)

        val bplayer = BPlayers.BPlayerMap[player]!!
        // Checks if the new slot is empty && checks if the old slot was a BWeapon
        if (player.inventory.getItem(event.newSlot) == null && oldItem != null && BItemUtils.getBType(oldItem).equals("weapon")) {
            bplayer.stats.subtract(BItemUtils.BWeapons[oldItem]!!.stats)
        }
        val newItem = player.inventory.getItem(event.newSlot)
    }
}