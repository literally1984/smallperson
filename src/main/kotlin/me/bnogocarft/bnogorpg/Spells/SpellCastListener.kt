package me.bnogocarft.bnogorpg.Spells

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayer
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerInteractEvent

class SpellCastListener : Listener {
    @EventHandler
    fun onCombatSwitch(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null && e.player.itemInHand.hasItemMeta()) {
            val bItem = BItem(e.player.itemInHand)
            if (bItem.type == BItemType.WEAPON) {
                val bPlayer = OnlineBPlayer(e.player)
                bPlayer.isInCastMode = true
            }
        }
    }
}