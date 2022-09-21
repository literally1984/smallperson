package me.bnogocarft.bnogorpg.Utils

import org.bukkit.Location
import org.bukkit.entity.Bat


data class Hologram(val location: Location, var message: String) {
    var entity: Bat? = null
    fun spawn() {
        entity = location.world.spawn(location, Bat::class.java)
        entity!!.customName = message
        entity!!.isCustomNameVisible = true
    }
}