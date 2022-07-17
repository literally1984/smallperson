package tech.nully.primplug.recode.Utils.PItems.PPlayer

import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import tech.nully.primplug.recode.Utils.Database.YMLUtils
import tech.nully.primplug.recode.Utils.PItems.Abilities.PlayerAbility.Ability
import tech.nully.primplug.recode.Utils.PItems.Abilities.PlayerAbility.AbilityUtils
import tech.nully.primplug.recode.Utils.PItems.Mode.Mode
import tech.nully.primplug.recode.Utils.PItems.Talisman.Talisman
import tech.nully.primplug.recode.Utils.PItems.Talisman.TalismanUtils
import tech.nully.primplug.recode.Utils.PItems.StatUtils.StatManager
import java.io.File
/**
 * Stores the RPG attributes of a player.
 * @constructor Fully constructs the RPG attributes of a given Online Player
 */
data class BPlayer(val player: Player) {
    private val playerStats = StatManager.calculateStats(player)

    /**
     * The latest update of the player's [PlayerStat]
     */
    var stats = PlayerStat(playerStats)
    /**
     * The latest update of the player's base Axe break speed
     * with their fist
     */
    var baseAxeBreakSpeed = 1
    /**
     * The latest update of the player's base Pickaxe break speed
     * using their fist
     */
    var basePickBreakSpeed = 1
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

    init {
        // Makes sure the PPlayer's data file is saved when PPlayer is created
        if (!(playerFile.exists())) {
            YMLUtils.saveCustomYml(playerConfig, playerFile)
        }

        // Gets player Talismans from file
        for (s: String in playerConfig.getString("items.talisman").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }
        // Gets Player abilities from file
        for (s: String in playerConfig.getString("items.abilities").split(",".toRegex())) {
            abilities.add(AbilityUtils.getAbility(s))
        }
    }
}