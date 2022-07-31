package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerItemHeldEvent

class HotbarChangeEvent : Listener {
    @EventHandler
    fun onHotbarChange(event: PlayerItemHeldEvent) {
        val player = event.player
        val oldItem = player.inventory.getItem(event.previousSlot)

        val bplayer = BPlayers[player]!!
        // Checks if the new slot is empty && checks if the old slot was a BWeapon
        if (player.inventory.getItem(event.newSlot) == null && oldItem != null && BItemUtils.getBType(oldItem)
                .equals("weapon")
        ) {
            bplayer.stats.subtract(BItemUtils.getBWeapon(oldItem).stats)
            return
        }

        // If the new Item is not null and is a weapon, then add the new item's stats to the player
        if (player.inventory.getItem(event.newSlot) != null) {
            val newItem = player.inventory.getItem(event.newSlot)
            if (BItemUtils.getBType(newItem).equals("weapon")) {
                val newWeapon = BItemUtils.getBWeapon(newItem)
                bplayer.stats.add(newWeapon.stats)
            }
        }
    }
}