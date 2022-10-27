package me.bnogocarft.bnogorpg.Listeners

import me.bnogocarft.bnogorpg.Main.Companion.spawnZones
import me.bnogocarft.bnogorpg.Utils.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.CreatureSpawnEvent

class SpawnListeners : Listener {
    @EventHandler
    fun onMobSpawn(e: CreatureSpawnEvent) {
        for (zone in spawnZones) {
            when (zone) {
                is SpawnRing -> {
                    if (e.location.isInSpawnRing(zone)) {
                        val entity = e.entity.type
                        for (mobIndex in 0..zone.mobAmount) {
                            val spawnedEntity = e.location.world.spawnEntity(e.location, entity)
                            for (slot in 1..5) {
                                if (zone.gear[slot - 1] != null) {
                                    e.entity.setGear(slot, zone.gear[slot - 1]!!)
                                    spawnedEntity.setGear(slot, zone.gear[slot - 1]!!)
                                }
                            }
                        }
                        return
                    }
                }

                is SpawnEdge -> {
                    if (e.location.isInSpawnEdge(zone)) {
                        val entity = e.entity.type
                        for (mobIndex in 0..zone.mobAmount) {
                            val spawnedEntity = e.location.world.spawnEntity(e.location, entity)
                            for (slot in 1..5) {
                                if (zone.gear[slot - 1] != null) {
                                    e.entity.setGear(slot, zone.gear[slot - 1]!!)
                                    spawnedEntity.setGear(slot, zone.gear[slot - 1]!!)
                                }
                            }
                        }
                        return
                    }
                }
            }
        }
    }
}