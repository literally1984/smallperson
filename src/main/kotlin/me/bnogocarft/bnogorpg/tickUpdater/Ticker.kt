package me.bnogocarft.bnogorpg.tickUpdater

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player

class Ticker {
    companion object {
        val oldPlayerBalanceScores = HashMap<Player, String>()
        fun startPlayerUpdater() {
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    OnlineBPlayers[player].saveStats()
                }

            }, 0, 5*60)
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    player.scoreboard.resetScores(Bukkit.getOfflinePlayer(oldPlayerBalanceScores[player]))
                    player.scoreboard.getObjective("test")
                        .getScore(
                            Bukkit.getOfflinePlayer(
                                "${ChatColor.GOLD}\$Balance: ${Main.econ.getBalance(player.name)}"
                            )
                        )
                }

            }, 0, 10)
        }
    }
}