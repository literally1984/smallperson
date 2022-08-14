package games.bnogocarft.bnogorpg.combat.ComboCounter

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayer
import org.bukkit.scheduler.BukkitRunnable

class ComboTimer(p: BPlayer) : BukkitRunnable() {
    val player = p
    override fun run() {
        val bar = player.bar
        if (bar.health <= 0) {
            bar.text = player.mainBar.getText(player)
            bar.health = player.mainBar.getHealth(player)
            player.combo!!.task.cancel()
            player.combo = null
            return
        }
        bar.health -= 4
        if (bar.health % 75 == 0) {
            player.combo!!.timeLeft - 1
        }
    }
}