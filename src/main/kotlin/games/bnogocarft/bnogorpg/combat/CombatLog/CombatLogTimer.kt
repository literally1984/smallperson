package games.bnogocarft.bnogorpg.combat.CombatLog

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayer
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

class CombatLogTimer(player: BPlayer) : BukkitRunnable() {
    val t = (player.metadata["combat"] as CombatLog).task
    val p = player
    override fun run() {
        if (p.metadata["combat"] == 0) {
            p.metadata.remove("combat")
            t.cancel()
        }
        p.metadata["combat"] = (p.metadata["combat"] as Int) - 1
    }
}