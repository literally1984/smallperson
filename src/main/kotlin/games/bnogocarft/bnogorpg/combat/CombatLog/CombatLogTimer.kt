package games.bnogocarft.bnogorpg.combat.CombatLog

import games.bnogocarft.bnogorpg.PlayerBar.Bar
import games.bnogocarft.bnogorpg.PlayerBar.ComboBar
import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayer
import org.bukkit.ChatColor
import org.bukkit.scheduler.BukkitRunnable

class CombatLogTimer(player: BPlayer) : BukkitRunnable() {
    val t = (player.metadata["combat"] as CombatLog).task
    val p = player
    override fun run() {
        if (p.metadata["combat"] == 0) {
            p.metadata.remove("combat")
            t.cancel()
            p.player.sendMessage(
                "${ChatColor.GREEN}You are no longer in Combat!"
            )
            var mBar: Bar? = null
            for (bar1 in p.bars) {
                if (bar1.priority < 3) {
                    if (mBar != null && mBar.priority > bar1.priority) {
                        continue
                    }
                    mBar = bar1
                }
            }
            p.bar.text = mBar!!.name
            p.bar.health = mBar.health
        }
        p.metadata["combat"] = (p.metadata["combat"] as Int) - 1
        for (bar2 in p.bars) {
            if (bar2 is ComboBar) {
                bar2.health -= 4
            }
        }
    }
}