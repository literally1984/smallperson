package me.bnogocarft.bnogorpg.Player.PlayerBar

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.BPlayer.OnlineBPlayer
import org.bukkit.Bukkit

data class ComboBar(val player: OnlineBPlayer) : Bar {
    var timeLeft = 5f
        set(value) {
            field = value
            health -= (value * 60).toInt()
        }
    override var name: String = "Combo Damage: ${player.combo!!.damage}"
    override val priority: Int = 1
    override var health = 300

    init {
        var id = 0
        id = Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
            if (timeLeft <= 0) {
                player.bars.remove(this)
                Bukkit.getScheduler().cancelTask(id)
            }
            timeLeft -= 0.05f
            if (player.bars.current() == this) {
                player.bar.health = health
                player.bar.text = name
            }
        }, 0, 1)
    }
}