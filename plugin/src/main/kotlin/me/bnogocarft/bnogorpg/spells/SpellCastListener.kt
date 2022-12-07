package me.bnogocarft.bnogorpg.spells

import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BScroll
import me.bnogocarft.bnogorpg.utils.canBe
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.entity.player.bPlayer
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerItemHeldEvent

class SpellCastListener : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onCombatSwitch(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null && e.player.itemInHand.hasItemMeta()) {
            if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                val item = e.player.itemInHand
                if (item canBe B.WEAPON) {
                    val bPlayer = OnlineBPlayers[e.player]
                    if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                        if (e.player.isSneaking) {
                            bPlayer.isInCastMode = !bPlayer.isInCastMode
                        }
                    }
                }

                if (e.player.itemInHand canBe B.SCROLL) {
                    val scroll = BScroll(e.player.itemInHand)
                    scroll.learn(e.player)
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onSpellCast(e: PlayerItemHeldEvent) {
        val bPlayer = e.player.bPlayer()
        if (bPlayer.isInCastMode) {
            if (e.newSlot != 8) {
                if (e.player.inventory.getItem(e.newSlot) == null) {
                    e.isCancelled = true
                    return
                }
                val spellItem = e.player.inventory.getItem(e.newSlot)
                val spell = bPlayer.spellItemMap[spellItem]!!
                if (bPlayer.stats.currentMana >= spell.manaCost) {
                    spell.cast(e.player)
                    bPlayer.stats.currentMana -= spell.manaCost
                } else {
                    bPlayer.sendMessage("${ChatColor.RED}You don't have enough mana to cast this spell!")
                }
                e.isCancelled = true
            }
        }
    }
}