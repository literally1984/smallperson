package me.bnogocarft.bnogorpg.combat.ComboCounter

import org.bukkit.scheduler.BukkitTask

data class Combo(var task: BukkitTask, var timeLeft: Int = 5, var damage: Int)