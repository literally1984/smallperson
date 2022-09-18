package me.bnogocarft.bnogorpg.Spells

import me.bnogocarft.bnogorpg.Spells.spells.FireballSpell
import me.bnogocarft.bnogorpg.Spells.spells.MeteorSpell
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import net.minecraft.server.v1_5_R3.Material
import org.bukkit.ChatColor
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
            val bPlayer = OnlineBPlayers[e.player]
            if (bItem.type == BItemType.WEAPON) {
                if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                    if (e.player.isSneaking) {
                        bPlayer.isInCastMode = !bPlayer.isInCastMode
                    }
                }
            }

            if (bItem.type == BItemType.SCROLL) {
                if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                    when (e.player.itemInHand.itemMeta.displayName) {
                        "Fireball Spell Scroll" -> {
                            bPlayer.spells.add(FireballSpell(1))
                            bPlayer.sendMessage("You have learned the Fireball spell!")
                            bPlayer.p.itemInHand = null
                        }

                        "Meteor Summon Scroll" -> {
                            bPlayer.spells.add(MeteorSpell(1))
                            bPlayer.sendMessage("You have learned the Meteor Summon spell!")
                            bPlayer.p.itemInHand = null
                        }
                    }
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onSpellCast(e: PlayerItemHeldEvent) {
        val bPlayer = OnlineBPlayers[e.player]
        if (bPlayer.isInCastMode) {
            if (e.newSlot != 8) {
                if (e.player.inventory.getItem(e.newSlot) == null) {
                    e.isCancelled = true
                    return
                }
                if (e.player.inventory.getItem(e.newSlot).type == Material.AIR) {
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