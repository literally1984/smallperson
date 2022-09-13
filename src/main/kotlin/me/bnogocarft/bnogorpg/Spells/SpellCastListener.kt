package me.bnogocarft.bnogorpg.Spells

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import net.minecraft.server.v1_5_R3.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemHeldEvent

class SpellCastListener : Listener {
    @EventHandler
    fun onCombatSwitch(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null && e.player.itemInHand.hasItemMeta()) {
            val bItem = BItem(e.player.itemInHand)
            if (bItem.type == BItemType.WEAPON) {
                if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                    if (e.player.isSneaking) {
                        val bPlayer = OnlineBPlayers[e.player]
                        bPlayer.isInCastMode = !bPlayer.isInCastMode
                    }
                }
            }
        }
    }

    @EventHandler (priority = EventPriority.HIGHEST)
    fun onSpellCast(e: PlayerItemHeldEvent) {
        val bPlayer = OnlineBPlayers[e.player]
        if (bPlayer.isInCastMode) {
            if (e.newSlot != 0) {
                if (e.player.inventory.getItem(e.newSlot) != null) {
                    e.isCancelled = true
                    return
                }
                if (e.player.inventory.getItem(e.newSlot).type != Material.AIR) {
                    e.isCancelled = true
                    return
                }
                val spellItem = e.player.inventory.getItem(e.newSlot)
                bPlayer.spellItemMap[spellItem]!!.cast(e.player)
                e.isCancelled = true
            }
        }
    }
}