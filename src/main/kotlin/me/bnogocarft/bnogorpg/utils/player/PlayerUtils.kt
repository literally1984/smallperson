package me.bnogocarft.bnogorpg.utils.player

import org.bukkit.entity.Player
import org.bukkit.event.entity.EntityDamageByEntityEvent

fun Player.bPlayer() = OnlineBPlayers[this]
typealias DamageHandler = (EntityDamageByEntityEvent) -> Unit