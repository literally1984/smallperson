package me.bnogocarft.bnogorpg.combat.ComboCounter

import me.bnogocarft.bnogorpg.player.PlayerBar.Bar
import me.bnogocarft.bnogorpg.player.PlayerBar.ComboBar
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayer
import org.bukkit.scheduler.BukkitRunnable

class ComboTimer(p: OnlineBPlayer) : BukkitRunnable() {
    val player = p
    override fun run() {
        val bar = player.bar
        if (bar.health <= 0) {
            var mBar: Bar? = null
            for (bar1 in player.bars) {
                if (bar1 is ComboBar) {
                    player.bars.remove(bar1)
                }
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
            if (bar2 is ComboBar) {
                bar.health -= 4
                print("subtracted")
                if (player.bars.current is ComboBar) {
                    player.bar.health = bar2.health
                    player.bar.text = bar2.name
                }
                if (bar2.health % 75 == 0) {
                    player.combo!!.timeLeft - 1
                }
            }
        }
    }
}