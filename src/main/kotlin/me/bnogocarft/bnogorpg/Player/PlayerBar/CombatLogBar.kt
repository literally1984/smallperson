package me.bnogocarft.bnogorpg.Player.PlayerBar

import me.bnogocarft.bnogorpg.Main
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
        var id = 0
        id = Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
            if (timeLeft <= 0) {
                player.bars.remove(this)
                Bukkit.getScheduler().cancelTask(id)
            }
            timeLeft -= 0.05f
            if (player.bars.current == this) {
                player.bar.health = health
                player.bar.text = name
            }
        }, 0, 1)
    }
}