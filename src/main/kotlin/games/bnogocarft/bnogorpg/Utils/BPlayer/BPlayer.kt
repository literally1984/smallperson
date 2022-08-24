package games.bnogocarft.bnogorpg.Utils.BPlayer

import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.Ability
import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.AbilityUtils
import games.bnogocarft.bnogorpg.Utils.BItemStack.Talisman.Talisman
import games.bnogocarft.bnogorpg.Utils.BItemStack.Talisman.TalismanUtils
import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import games.bnogocarft.bnogorpg.Utils.StashArrayList
import games.bnogocarft.bnogorpg.Utils.deserializeItem
import games.bnogocarft.bnogorpg.Utils.serializeItem
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

open class BPlayer(open val player: String) {
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
     * The player's current talismans
     */
    val talismans = ArrayList<Talisman>()

    /**
     * The player's [Ability]s
     */
    val abilities = ArrayList<Ability>()

    /**
     * Used to get the player of the player's
     * YML data [File]
     */
    val file = File("${YMLUtils.getUsersFolder()}/$player.yml")

    /**
     * The player's [YamlConfiguration] used to access the player's YML
     * data file.
     */
    var config: YamlConfiguration = YamlConfiguration.loadConfiguration(file)
    var playTime: String

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

    val stash = StashArrayList()

    init {
        // Makes sure the PPlayer's data file is saved when PPlayer is created
        if (!(file.exists())) {
            config.set("i.ta", "")
            config.set("i.ab", "")
            config.set("s.bs.p", 1)
            config.set("s.bs.a", 1)
            config.set("s.bs.s", 1)

            config.set("o.pl", "0 0")
            for (index in 0..53) {
                config.set("o.st.$index", "")
            }

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
            config.set("o.cl", false)
        }
        YMLUtils.saveCustomYml(config, file)

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
        for (index in 0..53) {
            if (config.getString("o.st.$index") != "") {
                stash.adde(deserializeItem(config.getString("o.st.$index").split(",").dropLast(1)))
            }
        }

        // Gets player Talismans from file
        for (s: String in config.getString("i.ta").split(",".toRegex())) {
            talismans.add(TalismanUtils.getTalisman(s))
        }
        // Gets Player abilities from file
        for (s: String in config.getString("i.ab").split(",".toRegex())) {
            abilities.add(AbilityUtils.getAbility(s))
        }
    }

    fun saveStats() {
        for (tal in talismans) {
            config.set("i.ta", "${tal.name},")
        }
        for (ab in abilities) {
            config.set("i.ab", "${ab.name},")
        }
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

        for (index in 0..53) {
            config.set("o.st.$index", "")
            if (stash[index] == null) {
                continue
            }

            var singleStringSerialized = ""
            for (s in serializeItem(stash[index]!!)) {
                singleStringSerialized += "$s,"
            }
            config.set("o.st.$index", singleStringSerialized)
        }
        YMLUtils.saveCustomYml(config, file)
    }
}