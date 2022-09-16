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
                BnogoSQL.con.prepareStatement(
                    "INSERT INTO players VALUES (" +
                            "'0 0', " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "ARRAY[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], " +
                            "'$player', " +
                            "0, 0," +
                            "ARRAY[]::text[]);"
                )
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

    fun saveStats() {
        val spellsTmp = ArrayList<Spell?>()
        for (index in 0..7) {
            try {
                spellsTmp.add(spells[index])
            } catch (e: IndexOutOfBoundsException) {
                spellsTmp.add(null)
            }
        }
        BnogoSQL.con.prepareStatement(
            "UPDATE players SET \"playTime\" = '$playTime', " +
                    "\"meleeLevel\" = $meleeLVL, " +
                    "\"meleeExp\" = $meleeEXP, " +
                    "\"miningLevel\" = $miningEXP, " +
                    "\"miningExp\" = $miningLVL, " +
                    "\"spellcastLevel\" = $spellcastLVL, " +
                    "\"spellcastExp\" = $spellcastEXP, " +
                    "\"woodcutLevel\" = $woodCuttingLVL, " +
                    "\"woodcutExp\" = $woodCuttingEXP, " +
                    "\"combatLevel\" = $combatLVL, " +
                    "\"combatExp\" = $combatEXP, " +
                    "stash = ARRAY [" +
                    "'${if (stash[0] != null) serializeItem(stash[0]!!).joinToString("||") else null}', " +
                    "'${if (stash[1] != null) serializeItem(stash[1]!!).joinToString("||") else null}', " +
                    "'${if (stash[2] != null) serializeItem(stash[2]!!).joinToString("||") else null}', " +
                    "'${if (stash[3] != null) serializeItem(stash[3]!!).joinToString("||") else null}', " +
                    "'${if (stash[4] != null) serializeItem(stash[4]!!).joinToString("||") else null}', " +
                    "'${if (stash[5] != null) serializeItem(stash[5]!!).joinToString("||") else null}', " +
                    "'${if (stash[6] != null) serializeItem(stash[6]!!).joinToString("||") else null}', " +
                    "'${if (stash[7] != null) serializeItem(stash[7]!!).joinToString("||") else null}', " +
                    "'${if (stash[8] != null) serializeItem(stash[8]!!).joinToString("||") else null}', " +
                    "'${if (stash[8] != null) serializeItem(stash[8]!!).joinToString("||") else null}', " +
                    "'${if (stash[10] != null) serializeItem(stash[10]!!).joinToString("||") else null}', " +
                    "'${if (stash[11] != null) serializeItem(stash[11]!!).joinToString("||") else null}', " +
                    "'${if (stash[12] != null) serializeItem(stash[12]!!).joinToString("||") else null}', " +
                    "'${if (stash[13] != null) serializeItem(stash[13]!!).joinToString("||") else null}', " +
                    "'${if (stash[12] != null) serializeItem(stash[12]!!).joinToString("||") else null}', " +
                    "'${if (stash[15] != null) serializeItem(stash[15]!!).joinToString("||") else null}', " +
                    "'${if (stash[16] != null) serializeItem(stash[16]!!).joinToString("||") else null}', " +
                    "'${if (stash[17] != null) serializeItem(stash[17]!!).joinToString("||") else null}', " +
                    "'${if (stash[18] != null) serializeItem(stash[18]!!).joinToString("||") else null}', " +
                    "'${if (stash[19] != null) serializeItem(stash[19]!!).joinToString("||") else null}', " +
                    "'${if (stash[20] != null) serializeItem(stash[20]!!).joinToString("||") else null}', " +
                    "'${if (stash[21] != null) serializeItem(stash[21]!!).joinToString("||") else null}', " +
                    "'${if (stash[22] != null) serializeItem(stash[22]!!).joinToString("||") else null}', " +
                    "'${if (stash[23] != null) serializeItem(stash[23]!!).joinToString("||") else null}', " +
                    "'${if (stash[24] != null) serializeItem(stash[24]!!).joinToString("||") else null}', " +
                    "'${if (stash[25] != null) serializeItem(stash[25]!!).joinToString("||") else null}', " +
                    "'${if (stash[26] != null) serializeItem(stash[26]!!).joinToString("||") else null}', " +
                    "'${if (stash[27] != null) serializeItem(stash[27]!!).joinToString("||") else null}', " +
                    "'${if (stash[28] != null) serializeItem(stash[28]!!).joinToString("||") else null}', " +
                    "'${if (stash[29] != null) serializeItem(stash[29]!!).joinToString("||") else null}', " +
                    "'${if (stash[30] != null) serializeItem(stash[30]!!).joinToString("||") else null}', " +
                    "'${if (stash[31] != null) serializeItem(stash[31]!!).joinToString("||") else null}', " +
                    "'${if (stash[32] != null) serializeItem(stash[32]!!).joinToString("||") else null}', " +
                    "'${if (stash[33] != null) serializeItem(stash[33]!!).joinToString("||") else null}', " +
                    "'${if (stash[34] != null) serializeItem(stash[34]!!).joinToString("||") else null}', " +
                    "'${if (stash[35] != null) serializeItem(stash[35]!!).joinToString("||") else null}', " +
                    "'${if (stash[36] != null) serializeItem(stash[36]!!).joinToString("||") else null}', " +
                    "'${if (stash[37] != null) serializeItem(stash[37]!!).joinToString("||") else null}', " +
                    "'${if (stash[38] != null) serializeItem(stash[38]!!).joinToString("||") else null}', " +
                    "'${if (stash[39] != null) serializeItem(stash[39]!!).joinToString("||") else null}', " +
                    "'${if (stash[40] != null) serializeItem(stash[40]!!).joinToString("||") else null}', " +
                    "'${if (stash[41] != null) serializeItem(stash[41]!!).joinToString("||") else null}', " +
                    "'${if (stash[42] != null) serializeItem(stash[42]!!).joinToString("||") else null}', " +
                    "'${if (stash[43] != null) serializeItem(stash[43]!!).joinToString("||") else null}', " +
                    "'${if (stash[44] != null) serializeItem(stash[44]!!).joinToString("||") else null}', " +
                    "'${if (stash[45] != null) serializeItem(stash[45]!!).joinToString("||") else null}', " +
                    "'${if (stash[46] != null) serializeItem(stash[46]!!).joinToString("||") else null}', " +
                    "'${if (stash[47] != null) serializeItem(stash[47]!!).joinToString("||") else null}', " +
                    "'${if (stash[48] != null) serializeItem(stash[48]!!).joinToString("||") else null}', " +
                    "'${if (stash[49] != null) serializeItem(stash[49]!!).joinToString("||") else null}', " +
                    "'${if (stash[50] != null) serializeItem(stash[50]!!).joinToString("||") else null}', " +
                    "'${if (stash[51] != null) serializeItem(stash[51]!!).joinToString("||") else null}', " +
                    "'${if (stash[52] != null) serializeItem(stash[52]!!).joinToString("||") else null}', " +
                    "'${if (stash[53] != null) serializeItem(stash[53]!!).joinToString("||") else null}'], " +
                    "\"farmingLevel\" = $farmingLVL, " +
                    "\"farmingExp\" = $farmingEXP," +
                    "abilities = ARRAY[" +
                    "'${spellsTmp[0]?.codeName}||${spellsTmp[0]?.rank}', " +
                    "'${spellsTmp[1]?.codeName}||${spellsTmp[1]?.rank}', " +
                    "'${spellsTmp[2]?.codeName}||${spellsTmp[2]?.rank}', " +
                    "'${spellsTmp[3]?.codeName}||${spellsTmp[3]?.rank}', " +
                    "'${spellsTmp[4]?.codeName}||${spellsTmp[4]?.rank}', " +
                    "'${spellsTmp[5]?.codeName}||${spellsTmp[5]?.rank}', " +
                    "'${spellsTmp[6]?.codeName}||${spellsTmp[6]?.rank}', " +
                    "'${spellsTmp[7]?.codeName}||${spellsTmp[7]?.rank}'] WHERE name = '$player';"
        ).execute()
    }
}