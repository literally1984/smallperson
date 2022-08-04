package games.bnogocarft.bnogorpg.PlayerBar.ComboCounter

import org.bukkit.scheduler.BukkitTask

data class Combo (var task: BukkitTask, var timeLeft: Int = 4, var damage: Int) {
}