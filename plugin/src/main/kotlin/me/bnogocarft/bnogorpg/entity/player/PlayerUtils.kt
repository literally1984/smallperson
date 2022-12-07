package me.bnogocarft.bnogorpg.entity.player

import org.bukkit.entity.Player
import org.bukkit.event.entity.EntityDamageByEntityEvent

fun Player.bPlayer() = OnlineBPlayers[this]
typealias DamageHandler = (EntityDamageByEntityEvent) -> Unit