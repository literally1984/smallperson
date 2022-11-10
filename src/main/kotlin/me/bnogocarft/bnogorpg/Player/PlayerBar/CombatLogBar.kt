package me.bnogocarft.bnogorpg.Player.PlayerBar

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.BPlayer.BPlayer
import me.bnogocarft.bnogorpg.utils.BPlayer.OnlineBPlayer
import org.bukkit.Bukkit

data class CombatLogBar(val player: OnlineBPlayer) : Bar {
    var timeLeft = 10f
        set(value) {
            field = value
            health -= (value * 30).toInt()
        }
    override var name: String = "You are in Combat: $timeLeft"
    override val priority: Int = 3
    override var health = 300

    init {
        Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
            timeLeft -= 0.05f
            player.bar.health = health
            player.bar.text = name
        }, 0, 1)
    }
}