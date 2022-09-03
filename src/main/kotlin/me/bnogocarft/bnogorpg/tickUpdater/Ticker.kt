package me.bnogocarft.bnogorpg.tickUpdater

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import org.bukkit.Bukkit

class Ticker {
    companion object {
        fun startTicker() {
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    OnlineBPlayers[player]!!.saveStats()
                }

            }, 0, 1)
        }
    }
}