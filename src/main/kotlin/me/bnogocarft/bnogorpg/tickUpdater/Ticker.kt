package me.bnogocarft.bnogorpg.tickUpdater

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import kotlin.math.ceil

class Ticker {
    companion object {
        val oldPlayerBalanceScores = HashMap<Player, String>()
        val oldPlayerManaScores = HashMap<Player, String>()
        val oldPlayerStaminaScores = HashMap<Player, String>()
        fun startPlayerUpdater() {
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    OnlineBPlayers[player].saveStats()
                }

            }, 0, 5 * 60)
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    val bplayer = OnlineBPlayers[player]

                    val board = player.scoreboard
                    val obj = board.getObjective("Mainboard")

                    board.resetScores(Bukkit.getOfflinePlayer(oldPlayerManaScores[player]))
                    val mana = obj
                        .getScore(
                            Bukkit.getOfflinePlayer(
                                "${ChatColor.AQUA}Mana: " +
                                        "${bplayer.stats.currentMana}" +
                                        "/" +
                                        "${bplayer.stats.maxMana}"
                            )
                        )

                    board.resetScores(Bukkit.getOfflinePlayer(oldPlayerStaminaScores[player]))
                    val stamina = obj
                        .getScore(
                            Bukkit.getOfflinePlayer(
                                "${ChatColor.GOLD}Stamina: " +
                                        "${bplayer.stats.currentStamina}" +
                                        "/" +
                                        "${bplayer.stats.maxStamina}"
                            )
                        )

                    board.resetScores(Bukkit.getOfflinePlayer(oldPlayerBalanceScores[player]))
                    val bal =
                        obj.getScore(Bukkit.getOfflinePlayer("${ChatColor.GREEN}Bal: ${Main.econ.getBalance(player.name)}"))

                    bal.score = 1
                    mana.score = 2
                    stamina.score = 3

                    player.scoreboard = board
                    oldPlayerBalanceScores[player] = "${ChatColor.GREEN}Bal: ${Main.econ.getBalance(player.name)}"
                    oldPlayerManaScores[player] = "${ChatColor.AQUA}Mana: " +
                            "${bplayer.stats.currentMana}" +
                            "/" +
                            "${bplayer.stats.maxMana}"

                    oldPlayerStaminaScores[player] = "${ChatColor.GOLD}Stamina: " +
                            "${bplayer.stats.currentStamina}" +
                            "/" +
                            "${bplayer.stats.maxStamina}"
                }
            }, 0, 12)
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    val p = OnlineBPlayers[player]
                    if (p.stats.currentMana < p.stats.maxMana) {
                        val regen = ceil(p.stats.maxMana / 100.0).toInt()
                        p.stats.currentMana += regen
                        if (p.stats.currentMana > p.stats.maxMana) p.stats.currentMana = p.stats.maxMana
                    }
                }
            }, 0, 40)
        }
    }
}