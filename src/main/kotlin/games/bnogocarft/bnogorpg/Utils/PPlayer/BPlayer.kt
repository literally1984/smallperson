package games.bnogocarft.bnogorpg.Utils.PPlayer

import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.Ability
import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.AbilityUtils
import games.bnogocarft.bnogorpg.Utils.Abilities.SetBonus
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
        get() {
            stats = PlayerStat(StatManager.calculateStats(player))
            return field
        }

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
    var playTime: String

    val bar = BossBar(player)
    val currentSetBonus = SetBonus.NONE

    var meleeEXP: Long
    var meleeLVL: Long
    var spellcastEXP: Long
    var spellcastLVL: Long
    var woodCuttingEXP: Long
    var woodCuttingLVL: Long
    var miningEXP: Long
    var miningLVL: Long
    var combatEXP: Long
    var combatLVL: Long
    var farmingEXP: Long
    var farmingLVL: Long

    init {
        // Makes sure the PPlayer's data file is saved when PPlayer is created
        if (!(playerFile.exists())) {
            playerConfig.set("i.ta", "")
            playerConfig.set("i.ab", "")
            playerConfig.set("s.bs.p", 1)
            playerConfig.set("s.bs.a", 1)
            playerConfig.set("s.bs.s", 1)

            playerConfig.set("o.pl", "0 0")
            playerConfig.set("s.l.me.e", 0L)
            playerConfig.set("s.l.me.l", 0L)

            playerConfig.set("s.l.sp.e", 0L)
            playerConfig.set("s.l.sp.l", 0L)

            playerConfig.set("s.l.wo.e", 0L)
            playerConfig.set("s.l.wo.l", 0L)

            playerConfig.set("s.l.mi.e", 0L)
            playerConfig.set("s.l.mi.l", 0L)

            playerConfig.set("s.l.co.e", 0L)
            playerConfig.set("s.l.co.l", 0L)

            playerConfig.set("s.l.fa.e", 0L)
            playerConfig.set("s.l.fa.l", 0L)
        }
        YMLUtils.saveCustomYml(playerConfig, playerFile)

        playTime = playerConfig.getString("o.pl")
        baseAxeBreakSpeed = playerConfig.getInt("s.bs.a")
        basePickBreakSpeed = playerConfig.getInt("s.bs.p")
        baseShovelBreakSpeed = playerConfig.getInt("s.bs.s")
        meleeEXP = playerConfig.getLong("s.l.me.e")
        meleeLVL = playerConfig.getLong("s.l.me.l")
        spellcastEXP = playerConfig.getLong("s.l.sp.e")
        spellcastLVL = playerConfig.getLong("s.l.sp.l")
        woodCuttingEXP = playerConfig.getLong("s.l.wo.e")
        woodCuttingLVL = playerConfig.getLong("s.l.wo.l")
        miningEXP = playerConfig.getLong("s.l.mi.e")
        miningLVL = playerConfig.getLong("s.l.mi.l")
        combatEXP = playerConfig.getLong("s.l.co.e")
        combatLVL = playerConfig.getLong("s.l.co.l")
        farmingEXP = playerConfig.getLong("s.l.fa.ed")
        farmingLVL = playerConfig.getLong("s.l.fa.l")

        // Gets player Talismans from file
        for (s: String in playerConfig.getString("i.ta").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }
        // Gets Player abilities from file
        for (s: String in playerConfig.getString("i.ab").split(",".toRegex())) {
            abilities.add(AbilityUtils.getAbility(s))
        }

        val now = Date()
        val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")
        joinTime = format.format(now)

    }

    fun updatePlayTime() {
        playTime = playerConfig.getString("o.pl")
    }

    /**
     * Simiulates the current [BPlayer] dealing damage to another [BPlayer], Handles EXP gain and more
     */
    fun dealDamage(player: BPlayer, amount: Int) {

    }
}