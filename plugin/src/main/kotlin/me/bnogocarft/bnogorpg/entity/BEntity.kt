package me.bnogocarft.bnogorpg.entity

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.player.utils.bPlayer
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.entity.Entity
import org.bukkit.entity.Player

open class BEntity(open val entity: Entity) {
    fun setVelocityForward(velocity: Float) {
        entity.velocity = entity.location.direction.multiply(velocity)
    }

    fun setVelocityTowards(loc: Location, speed: Float, onEnd: () -> Unit) {
        var id = 0
        id = Bukkit.getScheduler().runTaskTimer(Main.instance, {
            if (entity.location.distance(loc) < 0.2) {
                Bukkit.getScheduler().cancelTask(id)
                onEnd()
            } else {
                entity.velocity = loc.toVector().subtract(entity.location.toVector()).normalize().multiply(speed/100)
            }
        }, 0, 1).taskId
    }

    open fun setController(p: Player) {
        p.bPlayer().controlling = entity
    }
}