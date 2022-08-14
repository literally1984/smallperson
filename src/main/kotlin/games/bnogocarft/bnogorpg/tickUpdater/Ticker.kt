package games.bnogocarft.bnogorpg.tickUpdater

import games.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit

class Ticker {
    companion object {
        fun startTicker() {
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {

            }, 0, 1)
        }
    }
}