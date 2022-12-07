package me.bnogocarft.bnogorpg.combat.CombatLog

import me.bnogocarft.bnogorpg.player.PlayerBar.Bar
import me.bnogocarft.bnogorpg.player.PlayerBar.CombatLogBar
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayer
import org.bukkit.ChatColor
import org.bukkit.scheduler.BukkitRunnable

class CombatLogTimer(player: OnlineBPlayer) : BukkitRunnable() {
    val t = (player.metadata["combat"] as CombatLog).task
    val p = player
    override fun run() {
        if ((p.metadata["combat"] as CombatLog).timeLeft == 0) {
            p.metadata.remove("combat")
            t.cancel()
            p.player.sendMessage(
                "${ChatColor.GREEN}You are no longer in Combat!"
            )
            var mBar: Bar? = null
            for (bar1 in p.bars) {
                if (bar1 is CombatLogBar) {
                    p.bars.remove(bar1)
                }
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
        (p.metadata["combat"] as CombatLog).timeLeft--
        for (bar2 in p.bars) {
            if (bar2 is CombatLogBar) {
                bar2.health -= 4
                if (p.bars.current is CombatLogBar) {
                    p.bar.health = bar2.health
                    p.bar.text = bar2.name
                }
            }
        }
    }
}