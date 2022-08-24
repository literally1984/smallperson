package games.bnogocarft.bnogorpg.Player

import games.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayer
import org.bukkit.scheduler.BukkitRunnable

class StatRegenTimer(player: OnlineBPlayer) : BukkitRunnable() {
    val p = player

    override fun run() {
        if (p.stats.currentMana < p.stats.maxMana) {
            p.stats.currentMana += p.stats.maxMana / 100
            if (p.stats.currentMana > p.stats.maxMana) p.stats.currentMana = p.stats.maxMana
        }
    }
}