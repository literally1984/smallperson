package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.canBe
import me.bnogocarft.bnogorpg.utils.events.ClickStateChangeEvent
import me.bnogocarft.bnogorpg.player.utils.bPlayer
import me.bnogocarft.bnogorpg.utils.ability.ManaAbility
import me.bnogocarft.bnogorpg.utils.getBWeapon
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.event.player.PlayerInteractEvent

val noMana = "${ChatColor.RED}${ChatColor.BOLD}You don't have enough mana to cast this ability!"

class AbilityListeners : Listener {

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onRightClick(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null) {
            val itemInHand = e.player.itemInHand
            if (itemInHand canBe B.WEAPON) { // up to this point, everything is a checker

                val bItem = itemInHand.getBWeapon()!!
                val p = e.player

                for (ability in bItem.abilities) {
                    ability.cast(p, e)
                }

                e.isCancelled = true
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onRightClick(e: EntityDamageEvent) {
        if (e.entity is Player) {
            val player = e.entity as Player
            val stats = player.bPlayer().stats
            for (ability in player.bPlayer().activeAbilities) {
                if (ability is ManaAbility) {
                    if (stats.currentMana >= ability.manaCost) {
                        player.bPlayer().stats.currentMana -= ability.manaCost
                    } else {
                        player.sendMessage()
                    }
                }
                ability.cast(player, e)
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onGrapple(event: PlayerFishEvent) {
        for (ability in event.player.bPlayer().activeAbilities) {
            ability.cast(event.player, event)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onMouseStateChange(e: ClickStateChangeEvent) {
        val gp = e.player.bPlayer()
        for (ability in gp.activeAbilities) {
            ability.cast(e.player, e)
        }
    }
}