package games.bnogocarft.bnogorpg.PlayerBar.ComboCounter

import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayer
import org.bukkit.scheduler.BukkitRunnable

class ComboTimer(p: BPlayer) : BukkitRunnable() {
    val player = p
    override fun run() {
        val bar = player.bar
        if (bar.health <= 0) {
            bar.text = player.mainBar.getText()
            bar.health = player.mainBar.getHealth()
            return
        }
        bar.health -= 25
    }
}