package games.bnogocarft.bnogorpg.Utils

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayer
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

class GrappleCDTask(task: BukkitTask, player: BPlayer) : BukkitRunnable() {
    val t = task
    val p = player
    override fun run() {
        if (p.metadata["grappleCd"] == null) {
            t.cancel()
            return
        }

        if (p.metadata["grappleCd"] == 0.0) {
            t.cancel()
            p.metadata.remove("grappleCd")
            return
        }
        p.metadata["grappleCd"] = p.metadata["grappleCd"] as Double - 1.0
    }
}