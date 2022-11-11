package me.bnogocarft.bnogorpg.Listeners

import me.bnogocarft.bnogorpg.utils.BPlayer.bPlayer
import org.bukkit.entity.ExperienceOrb
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityTargetLivingEntityEvent

class ExpListeners : Listener {
    @EventHandler
    fun onExpChange(event: EntityTargetLivingEntityEvent) {
        if (event.entity is ExperienceOrb) {
            if (event.target is Player) {
                if ((event.target as Player).bPlayer().chargeBar.enabled) {
                    (event.target as Player).bPlayer().chargeBar.originalExp +=
                        (event.entity as ExperienceOrb).experience
                    (event.entity as ExperienceOrb).experience = 0
                }
            }
        }
    }
}