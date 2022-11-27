package me.bnogocarft.bnogorpg.entity

import me.bnogocarft.bnogorpg.entity.player.bPlayer
import me.bnogocarft.bnogorpg.utils.setAi
import me.bnogocarft.bnogorpg.utils.stat.EntityStat
import me.bnogocarft.bnogorpg.utils.stat.StatManager
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player

class BLivingEntity(override val entity: LivingEntity) : BEntity(entity){
    val stats = EntityStat(StatManager.calculateEntityStats(entity))

    override fun setController(p: Player) {
        p.bPlayer().controlling = entity
        entity.setAi(false)
    }
}