package games.bnogocarft.bnogorpg.Utils.PItems.PPlayer

import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import games.bnogocarft.bnogorpg.Utils.PItems.Abilities.PlayerAbility.Ability
import games.bnogocarft.bnogorpg.Utils.PItems.Abilities.PlayerAbility.AbilityUtils
import games.bnogocarft.bnogorpg.Utils.PItems.Mode.Mode
import games.bnogocarft.bnogorpg.Utils.PItems.StatUtils.StatManager
import games.bnogocarft.bnogorpg.Utils.PItems.Talisman.Talisman
import games.bnogocarft.bnogorpg.Utils.PItems.Talisman.TalismanUtils
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import java.io.File
import java.text.SimpleDateFormat
import java.util.*
import kotlin.collections.ArrayList


/**
 * Stores the RPG attributes of a player.
 * @constructor Fully constructs the RPG attributes of a given Online Player
 */
data class BPlayer(val player: Player) {
    private val playerStats = StatManager.calculateStats(player)
    /**
     * The server time in which the player joined
     */
    var joinTime: String

    /**
     * The latest update of the player's [PlayerStat]
     */
    var stats = PlayerStat(playerStats)

    /**
     * The latest update of the player's base Axe break speed
     * with their fist
     */
    var baseAxeBreakSpeed: Int

    /**
     * The latest update of the player's base Pickaxe break speed
     * using their fist
     */
    var basePickBreakSpeed: Int

    /**
     * The latest update of the player's base Shovel break speed
     * using their fist
     */
    var baseShovelBreakSpeed: Int

    /**
     * The latest update of the player's [Mode]
     */
    var mode: Mode = Mode.NONE

    /**
     * The latest update of the player's [Talisman]
     */
    val talismans = ArrayList<Talisman>()

    /**
     * The latest update of the player's [Ability]
     */
    val abilities = ArrayList<Ability>()

    /**
     * Used to get the player of the player's
     * YML data [File]
     */
    val playerFile = File("${YMLUtils.getUsersFolder()}/${player.displayName}.yml")

    /**
     * The player's [YamlConfiguration] used to access the player's YML
     * data file.
     */
    val playerConfig: YamlConfiguration = YamlConfiguration.loadConfiguration(playerFile)
    var playTime = playerConfig.getString("other.playTime")

    init {
        // Makes sure the PPlayer's data file is saved when PPlayer is created
        if (!(playerFile.exists())) {
            YMLUtils.saveCustomYml(playerConfig, playerFile)
            playerConfig.set("items.talisman", "")
            playerConfig.set("items.abilities", "")
            playerConfig.set("stats.pickBreakSpeed", 1)
            playerConfig.set("stats.axeBreakSpeed", 1)
            playerConfig.set("stats.shovelBreakSpeed", 1)
            playerConfig.set("other.playTime", "0 0")
        }

        baseAxeBreakSpeed = playerConfig.getInt("stats.axeBreakSpeed")
        basePickBreakSpeed = playerConfig.getInt("stats.pickBreakSpeed")
        baseShovelBreakSpeed = playerConfig.getInt("stats.shovelBreakSpeed")

        // Gets player Talismans from file
        for (s: String in playerConfig.getString("items.talisman").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }
        // Gets Player abilities from file
        for (s: String in playerConfig.getString("items.abilities").split(",".toRegex())) {
            abilities.add(AbilityUtils.getAbility(s))
        }

        val now = Date()
        val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")
        joinTime = format.format(now)

    }

    fun updatePlayTime() {
        playTime = playerConfig.getString("other.playTime")
    }
}