package me.bnogocarft.bnogorpg.utils.particle

import org.bukkit.Location


interface Animation {
    var isStopped: Boolean
    var loc: Location
    var particleType: String
    fun play()
}