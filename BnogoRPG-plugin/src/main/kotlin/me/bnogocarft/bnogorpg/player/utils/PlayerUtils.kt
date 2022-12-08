package me.bnogocarft.bnogorpg.player.utils

import me.bnogocarft.bnogorpg.player.OnlineBPlayers
import org.bukkit.entity.Player
import org.bukkit.event.entity.EntityDamageByEntityEvent

fun Player.bPlayer() = OnlineBPlayers[this]
typealias DamageHandler = (EntityDamageByEntityEvent) -> Unit