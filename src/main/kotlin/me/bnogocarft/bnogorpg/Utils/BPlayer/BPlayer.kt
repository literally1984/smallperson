@file:Suppress("UNCHECKED_CAST")

package me.bnogocarft.bnogorpg.Utils.BPlayer

import me.bnogocarft.bnogorpg.Spells.spells.FireballSpell
import me.bnogocarft.bnogorpg.Spells.spells.MeteorSpell
import me.bnogocarft.bnogorpg.Utils.Abilities.Spell
import me.bnogocarft.bnogorpg.Utils.BItemStack.Talisman.Talisman
import me.bnogocarft.bnogorpg.Utils.Database.BnogoSQL
import me.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import me.bnogocarft.bnogorpg.Utils.JVMUtils.StashArrayList
import me.bnogocarft.bnogorpg.Utils.deserializeItem
import me.bnogocarft.bnogorpg.Utils.serializeItem
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

@Suppress("SENSELESS_COMPARISON", "LeakingThis")
open class BPlayer(open val player: String) {
    /**
     * The player's current talismans
     */
    val talismans = ArrayList<Talisman>()

    /**
     * The player's [Spell]s
     */
    val spells = ArrayList<Spell>()

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

    var meleeEXP: Float
    var meleeLVL: Int
    var spellcastEXP: Float
    var spellcastLVL: Int
    var woodCuttingEXP: Float
    var woodCuttingLVL: Int
    var miningEXP: Float
    var miningLVL: Int
    var combatEXP: Float
    var combatLVL: Int
    var farmingEXP: Float
    var farmingLVL: Int

    val stash = StashArrayList()

    init {
        // Creates a SQL entry for the player if it is not already created
        val exitResult = BnogoSQL.con.prepareStatement("SELECT name FROM players WHERE name = '$player'").executeQuery()
        if (!exitResult.next()) {
            val query =
                BnogoSQL.con.prepareStatement("INSERT INTO players VALUES ('0 0', 0, 0.0, 0, 0.0, 0, 0.0, 0, 0.0, 0, 0.0, ARRAY[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], '$player', 0, 0)")
            query.execute()
            print("Created new SQL entry for $player")
        }

        // Instances player to variables
        val playerData = BnogoSQL.con.prepareStatement("SELECT * FROM players WHERE name = '$player'").executeQuery()
        playerData.next()

        playTime = playerData.getString("playTime") //Gets Playtime
        // Gets stash
        for (item in playerData.getArray("stash").array as Array<String>) {
            if (item != null && item != "null") {
                stash.adde(deserializeItem(item.split("||")))
            }
        }

        for (item in playerData.getArray("abilities").array as Array<String>) {
            when (item.split("||")[0]) {
                "fireball" -> spells.add(FireballSpell(item.split("||")[1].toInt()))
                "meteor" -> spells.add(MeteorSpell(item.split("||")[1].toInt()))
            }
        }
        // instances EXP and Levels
        meleeEXP = playerData.getFloat("meleeExp")
        meleeLVL = playerData.getInt("meleeLevel")

        spellcastEXP = playerData.getFloat("spellcastExp")
        spellcastLVL = playerData.getInt("spellcastLevel")

        woodCuttingEXP = playerData.getFloat("woodcutExp")
        woodCuttingLVL = playerData.getInt("woodcutLevel")

        miningEXP = playerData.getFloat("miningExp")
        miningLVL = playerData.getInt("miningLevel")

        combatEXP = playerData.getFloat("combatExp")
        combatLVL = playerData.getInt("combatLevel")

        farmingEXP = playerData.getFloat("farmingExp")
        farmingLVL = playerData.getInt("farmingLevel")
    }
}