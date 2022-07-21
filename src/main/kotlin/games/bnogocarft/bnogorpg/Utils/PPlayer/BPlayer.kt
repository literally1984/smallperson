package games.bnogocarft.bnogorpg.Utils.PPlayer

import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.Ability
import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.AbilityUtils
import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import games.bnogocarft.bnogorpg.Utils.Mode.Mode
import games.bnogocarft.bnogorpg.Utils.StatUtils.StatManager
import games.bnogocarft.bnogorpg.Utils.Talisman.Talisman
import games.bnogocarft.bnogorpg.Utils.Talisman.TalismanUtils
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import tech.nully.BossBarAPI.BossBar
import java.io.File
import java.text.SimpleDateFormat
import java.util.*


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
    var playerConfig: YamlConfiguration = YamlConfiguration.loadConfiguration(playerFile)
    var playTime = playerConfig.getString("other.playTime")

    val bar = BossBar(player)

    init {
        bar.text = "BnogoCarftMC!"
        bar.display()
        // Makes sure the PPlayer's data file is saved when PPlayer is created
        if (!(playerFile.exists())) {
            playerConfig.set("items.talisman", " ")
            playerConfig.set("items.abilities", " ")
            playerConfig.set("stats.pickBreakSpeed", 1)
            playerConfig.set("stats.axeBreakSpeed", 1)
            playerConfig.set("stats.shovelBreakSpeed", 1)
            playerConfig.set("other.playTime", "0 0")
            YMLUtils.saveCustomYml(playerConfig, playerFile)
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