package me.bnogocarft.bnogorpg.ticker

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import kotlin.math.ceil
import kotlin.math.roundToInt

class Ticker {
    companion object {
        val oldPlayerBalanceScores = HashMap<Player, String>()
        fun startPlayerUpdater() {
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    OnlineBPlayers[player].saveStats()
                }

            }, 0, 20 * 60 * 5)
            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    val p = player.bPlayer()
                    if (p.stats.currentMana < p.stats.maxMana) {
                        val regen = ceil(p.stats.maxMana / 100.0).toInt()
                        p.stats.currentMana += regen
                        if (p.stats.currentMana > p.stats.maxMana) p.stats.currentMana = p.stats.maxMana
                    }

                    if (p.stats.currentStamina < p.stats.maxStamina) {
                        val regen = ceil(p.stats.maxStamina / 100.0).toInt()
                        p.stats.currentStamina += regen
                        if (p.stats.currentStamina > p.stats.maxStamina) p.stats.currentStamina = p.stats.maxStamina
                    }
                }
            }, 0, 40)

            Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
                for (player in Bukkit.getOnlinePlayers()) {
                    val onlineBPlayer = player.bPlayer()
                    val s = onlineBPlayer.stats
                    // M: 10/10[██████████] || S: 10/10[██████████]
                    val mBars = (s.currentMana/s.maxMana)*10
                    val sBars = (s.currentStamina/s.maxStamina)*10
                    val mBar = "[          ]".toCharArray()
                    val sBar = "[          ]".toCharArray()

                    var indexOfMBlock = 1
                    for (i in 1..mBars) {
                        mBar[indexOfMBlock] = '█'
                        indexOfMBlock++
                    }

                    var indexOfSBlock = 1
                    for (i in 1..sBars) {
                        sBar[indexOfSBlock] = '█'
                        indexOfSBlock++
                    }
                    val message = "${ChatColor.AQUA}M: ${s.currentMana}/${s.maxMana}${String(mBar)} || " +
                            "${ChatColor.GOLD}S: ${s.currentStamina}/${s.maxStamina}${String(sBar)}"
                    onlineBPlayer.sendActionBar(message)
                }
            }, 0, 2)
        }
    }
}