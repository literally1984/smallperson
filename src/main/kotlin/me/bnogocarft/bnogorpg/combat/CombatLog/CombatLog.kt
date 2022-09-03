package me.bnogocarft.bnogorpg.combat.CombatLog

import org.bukkit.scheduler.BukkitTask

data class CombatLog(val task: BukkitTask) {
    var timeLeft = 5
}