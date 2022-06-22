package tech.nully.primplug.recode.Utils.PItems

import org.bukkit.ChatColor
import org.bukkit.entity.Player
import tech.nully.primplug.recode.Utils.StatUtils.StatManager

data class PPlayer(val player: Player) {
    init {
        val playerStats = StatManager.calculateStats(player)

        var defense = playerStats[0]
        var mdefense = playerStats[1]
        var mana = playerStats[2]
        var stamina = playerStats[3]

        var mode: Mode = Mode.NONE
        // TODO: finish
    }
}