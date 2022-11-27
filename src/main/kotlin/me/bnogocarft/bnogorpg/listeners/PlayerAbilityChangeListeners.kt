package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.*
import me.bnogocarft.bnogorpg.utils.events.ArmorChangeEvent
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.entity.player.bPlayer
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
        val new = player.inventory.getItem(event.newSlot)
        val old = player.inventory.getItem(event.previousSlot)
        if (new != null) {
            if (new canBe B.WEAPON) {
                val newB = new.getBWeapon()!!
                bplayer.activeAbilities.addAll(newB.abilities)
            }
        }

        // If the new Item is not null and is a weapon, then add the new item's stats to the player
        if (old != null) {
            if (old canBe B.WEAPON) {
                val oldB = old.getBWeapon()!!
                bplayer.activeAbilities.removeAll(oldB.abilities.toSet())
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
                if (old != null) {
                    if (old canBe B.ARMOR) {
                        val bOld = old.getBArmor()!!
                        for (ability in bOld.abilities) {
                            event.player.bPlayer().activeAbilities.remove(ability)
                        }
                    }
                }

                // If the old armor slot didn't have an item and the new one does
                if (old == null) {
                    if (armor canBe B.ARMOR) {
                        val bNew = armor.getBArmor()!!
                        for (ability in bNew.abilities) {
                            event.player.bPlayer().activeAbilities.add(ability)
                        }
                    }
                }

                if (armor != null) {
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