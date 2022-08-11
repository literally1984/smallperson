package games.bnogocarft.bnogorpg.Utils.BPlayer

import org.bukkit.scheduler.BukkitRunnable

class StatRegenTimer(player: BPlayer) : BukkitRunnable() {
    val p = player

    override fun run() {
        if (p.stats.currentMana < p.stats.maxMana) {
            p.stats.currentMana += p.stats.maxMana/100
            if (p.stats.currentMana > p.stats.maxMana) p.stats.currentMana = p.stats.maxMana
        }
    }
}