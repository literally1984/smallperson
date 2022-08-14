package games.bnogocarft.bnogorpg.combat.ComboCounter

import games.bnogocarft.bnogorpg.PlayerBar.Bar
import games.bnogocarft.bnogorpg.PlayerBar.CombatLogBar
import games.bnogocarft.bnogorpg.PlayerBar.ComboBar
import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayer
import org.bukkit.scheduler.BukkitRunnable

class ComboTimer(p: BPlayer) : BukkitRunnable() {
    val player = p
    override fun run() {
        val bar = player.bar
        if (bar.health <= 0) {
            var mBar: Bar? = null
            for (bar1 in player.bars) {
                if (bar1.priority < 3) {
                    if (mBar != null && mBar.priority > bar1.priority) {
                        continue
                    }
                    mBar = bar1
                }
            }
            player.bar.text = mBar!!.name
            player.bar.health = mBar.health
            player.combo!!.task.cancel()
            player.combo = null
            return
        }
        for (bar2 in player.bars) {
            if (bar2 is CombatLogBar) {
                bar.health -= 4
                if (player.currentBar is ComboBar) {
                    player.bar.health = bar2.health
                    player.bar.text = bar2.name
                }
            }
        }
        if (bar.health % 75 == 0) {
            player.combo!!.timeLeft - 1
        }
    }
}