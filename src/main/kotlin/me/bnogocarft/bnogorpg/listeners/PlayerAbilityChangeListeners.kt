package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.canBe
import me.bnogocarft.bnogorpg.utils.events.ArmorChangeEvent
import me.bnogocarft.bnogorpg.utils.getBArmor
import me.bnogocarft.bnogorpg.utils.getBGear
import me.bnogocarft.bnogorpg.utils.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerItemHeldEvent

class PlayerAbilityChangeListeners : Listener {
    @EventHandler (priority = EventPriority.HIGHEST)
    fun onHotbarChange(event: PlayerItemHeldEvent) {
        val player = event.player
        val oldItem = player.inventory.getItem(event.previousSlot)

        val bplayer = OnlineBPlayers[player]
        // Checks if the new slot is empty && checks if the old slot was a BWeapon
        if (player.inventory.getItem(event.newSlot) == null && oldItem != null && oldItem canBe B.WEAPON) {
            val bItem = if (oldItem canBe B.GEAR) oldItem.getBGear() else return
            bplayer.stats.subtract(bItem!!.stats)
            bplayer.activeAbilities.removeAll(bItem.abilities.toSet())
            return
        }

        // If the new Item is not null and is a weapon, then add the new item's stats to the player
        if (player.inventory.getItem(event.newSlot) != null) {
            val newItem = player.inventory.getItem(event.newSlot)
            val bItem = try {
                BItemUtils.getBGear(newItem)
            } catch (e: IllegalArgumentException) {
                return
            }
            bplayer.stats.add(bItem.stats)
            for (ability in bItem.abilities) {
                bplayer.activeAbilities.add(ability)
            }
        }
    }

    @EventHandler (priority = EventPriority.HIGHEST)
    fun onArmorChange(event: ArmorChangeEvent) {
        val oldSet = event.oldSet
        for ((index, armor) in event.player.inventory.armorContents.withIndex()) {
            if (oldSet[index] != armor) {
                val old = oldSet[index]

                // If the old armor slot had an item and the new one doesn't
                if (old != null && armor == null) {
                    if (old canBe B.ARMOR) {
                        val bOld = old.getBArmor()!!
                        for (ability in bOld.abilities) {
                            event.player.bPlayer().activeAbilities.remove(ability)
                        }
                    }
                }

                // If the old armor slot didn't have an item and the new one does
                if (old == null && armor != null) {
                    if (armor canBe B.ARMOR) {
                        val bNew = armor.getBArmor()!!
                        for (ability in bNew.abilities) {
                            event.player.bPlayer().activeAbilities.add(ability)
                        }
                    }
                }
            }
        }
    }
}