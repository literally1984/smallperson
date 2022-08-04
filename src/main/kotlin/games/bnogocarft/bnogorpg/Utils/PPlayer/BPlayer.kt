package games.bnogocarft.bnogorpg.Utils.PPlayer

import games.bnogocarft.bnogorpg.PlayerBar.ComboCounter.Combo
import games.bnogocarft.bnogorpg.PlayerBar.MainBar
import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.Ability
import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.AbilityUtils
import games.bnogocarft.bnogorpg.Utils.Abilities.SetBonus
import games.bnogocarft.bnogorpg.Utils.BItemStack.Talisman.Talisman
import games.bnogocarft.bnogorpg.Utils.BItemStack.Talisman.TalismanUtils
import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import games.bnogocarft.bnogorpg.Utils.Mode.Mode
import games.bnogocarft.bnogorpg.Utils.StatUtils.StatManager
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
    var config: YamlConfiguration = YamlConfiguration.loadConfiguration(playerFile)
    var playTime: String

    val bar = BossBar(player)
    var mainBar = MainBar.SERVER_IP

    var combo: Combo? = null
    var currentSetBonus = SetBonus.NONE

    var meleeEXP: Long = 0
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
            config.set("i.ta", "")
            config.set("i.ab", "")
            config.set("o.st", "")
            config.set("s.bs.p", 1)
            config.set("s.bs.a", 1)
            config.set("s.bs.s", 1)

            config.set("o.pl", "0 0")
            config.set("s.l.me.e", 0L)
            config.set("s.l.me.l", 0L)

            config.set("s.l.sp.e", 0L)
            config.set("s.l.sp.l", 0L)

            config.set("s.l.wo.e", 0L)
            config.set("s.l.wo.l", 0L)

            config.set("s.l.mi.e", 0L)
            config.set("s.l.mi.l", 0L)

            config.set("s.l.co.e", 0L)
            config.set("s.l.co.l", 0L)

            config.set("s.l.fa.e", 0L)
            config.set("s.l.fa.l", 0L)
        }
        YMLUtils.saveCustomYml(config, playerFile)

        playTime = config.getString("o.pl")
        baseAxeBreakSpeed = config.getInt("s.bs.a")
        basePickBreakSpeed = config.getInt("s.bs.p")
        baseShovelBreakSpeed = config.getInt("s.bs.s")
        meleeEXP = config.getLong("s.l.me.e")
        meleeLVL = config.getLong("s.l.me.l")
        spellcastEXP = config.getLong("s.l.sp.e")
        spellcastLVL = config.getLong("s.l.sp.l")
        woodCuttingEXP = config.getLong("s.l.wo.e")
        woodCuttingLVL = config.getLong("s.l.wo.l")
        miningEXP = config.getLong("s.l.mi.e")
        miningLVL = config.getLong("s.l.mi.l")
        combatEXP = config.getLong("s.l.co.e")
        combatLVL = config.getLong("s.l.co.l")
        farmingEXP = config.getLong("s.l.fa.ed")
        farmingLVL = config.getLong("s.l.fa.l")

        // Gets player Talismans from file
        for (s: String in config.getString("i.ta").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }
        // Gets Player abilities from file
        for (s: String in config.getString("i.ab").split(",".toRegex())) {
            abilities.add(AbilityUtils.getAbility(s))
        }

        val now = Date()
        val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")
        joinTime = format.format(now)

    }

    fun saveStats() {
        config.set("i.ta", talismans)
        config.set("i.ab", abilities)
        config.set("s.bs.p", basePickBreakSpeed)
        config.set("s.bs.a", baseAxeBreakSpeed)
        config.set("s.bs.s", baseShovelBreakSpeed)

        config.set("s.l.me.e", meleeEXP)
        config.set("s.l.me.l", meleeLVL)

        config.set("s.l.sp.e", spellcastEXP)
        config.set("s.l.sp.l", spellcastLVL)

        config.set("s.l.wo.e", woodCuttingEXP)
        config.set("s.l.wo.l", woodCuttingLVL)

        config.set("s.l.mi.e", miningEXP)
        config.set("s.l.mi.l", miningLVL)

        config.set("s.l.co.e", combatEXP)
        config.set("s.l.co.l", combatLVL)

        config.set("s.l.fa.e", farmingEXP)
        config.set("s.l.fa.l", farmingLVL)
    }

    fun addToMelee(amount: Int) {
        combatEXP += amount / 2
        meleeEXP += amount
        if (meleeEXP >= getNeededEXP(meleeLVL)) {
            levelUp("melee")
        }

        if (combatEXP >= getNeededEXP(combatLVL)) {
            levelUp("combat")
        }
    }

    fun addToSpellcast(amount: Int) {
        combatEXP += amount / 2
        spellcastEXP += amount

        if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
            levelUp("spellcast")
        }

        if (combatEXP >= getNeededEXP(combatLVL)) {
            levelUp("combat")
        }
    }

    fun updatePlayTime() {
        playTime = config.getString("o.pl")
    }

    /**
     * Simiulates the current [BPlayer] dealing damage to another [BPlayer], Handles EXP gain and more
     */
    fun dealDamage(player: BPlayer, amount: Int) {
        val damage = amount * (player.stats.defense / player.stats.defense + 10)
        player.player.health -= damage
        meleeEXP += damage
        if (meleeEXP >= getNeededEXP(player.meleeLVL)) {
            levelUp("melee")
        }
    }


    fun dealSpellDamage(player: BPlayer, amount: Int) {
        val damage = amount * (player.stats.mDefense / player.stats.mDefense + 10)
        player.player.health -= damage
        spellcastEXP += damage
        if (spellcastEXP >= getNeededEXP(player.spellcastLVL)) {
            levelUp("spellcast")
        }
    }

    fun levelUp(stat: String) {
        when (stat) {
            "melee" -> {
                if (meleeEXP >= getNeededEXP(meleeLVL)) {
                    meleeLVL++
                    meleeEXP -= getNeededEXP(meleeLVL)
                    player.sendMessage("You have leveled up to your melee level to $meleeLVL!")
                    player.sendMessage("Your current melee EXP is $meleeEXP and you need ${getNeededEXP(meleeLVL)} to level up again!")
                }
            }
            "spellcast" -> {
                if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
                    spellcastLVL++
                    spellcastEXP -= getNeededEXP(spellcastLVL)
                    player.sendMessage("You have leveled up to your spellcast level to $spellcastLVL!")
                    player.sendMessage(
                        "Your current spellcast EXP is $spellcastEXP and you need ${
                            getNeededEXP(
                                spellcastLVL
                            )
                        } to level up again!"
                    )
                }
            }
            "woodcutting" -> {
                if (woodCuttingEXP >= getNeededEXP(woodCuttingLVL)) {
                    woodCuttingLVL++
                    woodCuttingEXP -= getNeededEXP(woodCuttingLVL)
                    player.sendMessage("You have leveled up to your woodcutting level to $woodCuttingLVL!")
                    player.sendMessage(
                        "Your current woodcutting EXP is $woodCuttingEXP and you need ${
                            getNeededEXP(
                                woodCuttingLVL
                            )
                        } to level up again!"
                    )
                }
            }
            "mining" -> {
                if (miningEXP >= getNeededEXP(miningLVL)) {
                    miningLVL++
                    miningEXP -= getNeededEXP(miningLVL)
                    player.sendMessage("You have leveled up to your mining level to $miningLVL!")
                    player.sendMessage("Your current mining EXP is $miningEXP and you need ${getNeededEXP(miningLVL)} to level up again!")
                }
            }
            "combat" -> {
                if (combatEXP >= getNeededEXP(combatLVL)) {
                    combatLVL++
                    combatEXP -= getNeededEXP(combatLVL)
                    player.sendMessage("You have leveled up to your combat level to $combatLVL!")
                    player.sendMessage("Your current combat EXP is $combatEXP and you need ${getNeededEXP(combatLVL)} to level up again!")
                }
            }
            "farming" -> {
                if (farmingEXP >= getNeededEXP(farmingLVL)) {
                    farmingLVL++
                    farmingEXP -= getNeededEXP(farmingLVL)
                    player.sendMessage("You have leveled up to your farming level to $farmingLVL!")
                    player.sendMessage("Your current farming EXP is $farmingEXP and you need ${getNeededEXP(farmingLVL)} to level up again!")
                }
            }
        }
    }
}