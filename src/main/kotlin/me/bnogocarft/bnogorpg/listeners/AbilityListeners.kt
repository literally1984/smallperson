package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.canBe
import me.bnogocarft.bnogorpg.utils.events.ClickStateChangeEvent
import me.bnogocarft.bnogorpg.entity.player.bPlayer
import me.bnogocarft.bnogorpg.utils.getBWeapon
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.event.player.PlayerInteractEvent


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
            for (ability in player.bPlayer().activeAbilities) {
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