package tech.nully.primplug.recode.Utils.PItems

import org.bukkit.entity.Player
import tech.nully.primplug.recode.Utils.Database.YMLUtils
import tech.nully.primplug.recode.Utils.PItems.Talisman.Talisman
import tech.nully.primplug.recode.Utils.PItems.Talisman.TalismanUtils
import tech.nully.primplug.recode.Utils.StatUtils.StatManager
import java.io.File

data class PPlayer(val player: Player) {
    init {
        val playerStats = StatManager.calculateStats(player)

        var defense = playerStats[0]
        var mdefense = playerStats[1]
        var mana = playerStats[2]
        var stamina = playerStats[3]
        var mode: Mode = Mode.NONE
        val talismans = ArrayList<Talisman>()

        // Defines the player's file and FileConfig
        val playerFile = File("${YMLUtils.getUsersFolder()}/${player.displayName}.yml")
        val playerConfig = YMLUtils.getConfig(player)
        if (!(playerFile.exists())) {
            YMLUtils.saveCustomYml(playerConfig, playerFile)
        }

        // Gets player Talismans from file
        for (s: String in playerConfig.getString("items.talisman").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }
        // Gets Player abilities from file
        for (s: String in playerConfig.getString("items.abilities").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }

        // TODO: finish
    }
}