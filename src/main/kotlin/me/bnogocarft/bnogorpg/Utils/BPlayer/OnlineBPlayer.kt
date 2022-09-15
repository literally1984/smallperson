package me.bnogocarft.bnogorpg.Utils.BPlayer

import me.bnogocarft.bnogorpg.Player.PlayerBar.Bar
import me.bnogocarft.bnogorpg.Player.PlayerBar.MainBar
import me.bnogocarft.bnogorpg.Utils.Abilities.SetBonus
import me.bnogocarft.bnogorpg.Utils.Abilities.Spell
import me.bnogocarft.bnogorpg.Utils.Database.BnogoSQL
import me.bnogocarft.bnogorpg.Utils.JVMUtils.BarArrayList
import me.bnogocarft.bnogorpg.Utils.Mode.Mode
import me.bnogocarft.bnogorpg.Utils.StatUtils.StatManager
import me.bnogocarft.bnogorpg.Utils.serializeItem
import me.bnogocarft.bnogorpg.combat.ComboCounter.Combo
import org.bukkit.ChatColor
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import tech.nully.BossBarAPI.BossBar
import java.text.SimpleDateFormat
import java.util.*
import kotlin.collections.HashMap
import kotlin.math.roundToInt


/**
 * Stores the RPG attributes of a player.
 * @constructor Fully constructs the RPG attributes of a given Online Player
 */
data class OnlineBPlayer(val p: Player) : BPlayer(p.name) {
    private val playerStats = StatManager.calculateStats(p)

    /**
     * The server time in which the player joined
     */
    var joinTime: String

    val bar = BossBar(p)
    var bars = BarArrayList()
    var currentBar: Bar = MainBar()

    var combo: Combo? = null
    var currentSetBonus = SetBonus.NONE

    /**
     * The player's current [Mode]
     */
    var mode: Mode = Mode.NONE

    val regHotbar = arrayListOf<ItemStack?>(null, null, null, null, null, null, null, null, null)
    val spellItemMap = HashMap<ItemStack, Spell>()
    var isInCastMode = false
        set(value) {
            // If the Player was not previously in spellcast form
            if (field != value) {
                if (value) {
                    p.sendMessage("${ChatColor.GREEN}Combat mode ${ChatColor.BOLD}ON")
                    val castItem = p.itemInHand
                    for (i in 0..8) {
                        if (i == 0) {
                            p.inventory.setItem(0, castItem)
                            regHotbar[i] = p.inventory.getItem(i)
                            continue
                        }
                        regHotbar[i] = p.inventory.getItem(i)
                        try {
                            val disItem = spells[i].displayItem
                            p.inventory.setItem(i, disItem)
                            spellItemMap[disItem] = spells[i]
                        } catch (e: IndexOutOfBoundsException) {
                            p.inventory.setItem(i, null)
                            continue
                        }
                    }
                    p.inventory.heldItemSlot = 0
                } else {
                    p.sendMessage("${ChatColor.GREEN}Combat mode ${ChatColor.BOLD}OFF")
                    for (i in 0..8) {
                        p.inventory.setItem(i, regHotbar[i])
                        regHotbar[i] = null
                    }
                }
            }
            field = value
        }

    val hitbox = Hitbox(p)

    /**
     * The latest update of the player's [PlayerStat]
     */
    var stats = PlayerStat(playerStats)
        get() {
            stats = PlayerStat(StatManager.calculateStats(p))
            return field
        }

    val metadata = HashMap<String, Any>()

    init {
        bars.add(MainBar())
        metadata["combatLogged"] = config.getBoolean("o.cl")

        val now = Date()
        val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")
        joinTime = format.format(now)

        try {
            config.set("o.cl", metadata["combatLogged"])
        } catch (e: NullPointerException) {
            config.set("o.cl", false)
        }
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
                    "abilities = ARRAY [" +
                    "'${spellsTmp[0]!!.codeName}||${spellsTmp[0]!!.rank}', " +
                    "'${spellsTmp[1]!!.codeName}||${spellsTmp[1]!!.rank}', " +
                    "'${spellsTmp[2]!!.codeName}||${spellsTmp[2]!!.rank}', " +
                    "'${spellsTmp[3]!!.codeName}||${spellsTmp[3]!!.rank}', " +
                    "'${spellsTmp[4]!!.codeName}||${spellsTmp[4]!!.rank}', " +
                    "'${spellsTmp[5]!!.codeName}||${spellsTmp[5]!!.rank}', " +
                    "'${spellsTmp[6]!!.codeName}||${spellsTmp[6]!!.rank}', " +
                    "'${spellsTmp[7]!!.codeName}||${spellsTmp[7]!!.rank}'] WHERE name = '$player';"
        ).execute()
    }

    fun updatePlayTime() {
        val query = BnogoSQL.con.prepareStatement(
            "SELECT \"playTime\" FROM players WHERE name = '${player}';"
        ).executeQuery()

        query.next()
        playTime = query.getString("playTime")
    }

    /**
     * Simiulates the current [OnlineBPlayer] dealing damage to another [OnlineBPlayer], Handles EXP gain and more
     */
    fun dealDamage(other: LivingEntity, amount: Int) {
        val damage = if (other is Player) {
            val player = OnlineBPlayers[other]
            try {
                amount * (player.stats.defense / player.stats.defense + 10)
            } catch (e: ArithmeticException) {
                amount
            }
        } else {
            amount
        }
        other.health -= damage
        addToMelee((damage * 0.7).roundToInt())
    }


    fun dealSpellDamage(player: OnlineBPlayer, amount: Int) {
        val damage = amount * (player.stats.mDefense / player.stats.mDefense + 10)
        player.p.health -= damage
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
                    p.sendMessage("You have leveled up to your melee level to $meleeLVL!")
                    p.sendMessage("Your current melee EXP is $meleeEXP and you need ${getNeededEXP(meleeLVL)} to level up again!")
                }
            }

            "spellcast" -> {
                if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
                    spellcastLVL++
                    spellcastEXP -= getNeededEXP(spellcastLVL)
                    p.sendMessage("You have leveled up to your spellcast level to $spellcastLVL!")
                    p.sendMessage(
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
                    p.sendMessage("You have leveled up to your woodcutting level to $woodCuttingLVL!")
                    p.sendMessage(
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
                    p.sendMessage("You have leveled up to your mining level to $miningLVL!")
                    p.sendMessage("Your current mining EXP is $miningEXP and you need ${getNeededEXP(miningLVL)} to level up again!")
                }
            }

            "combat" -> {
                if (combatEXP >= getNeededEXP(combatLVL)) {
                    combatLVL++
                    combatEXP -= getNeededEXP(combatLVL)
                    p.sendMessage("You have leveled up to your combat level to $combatLVL!")
                    p.sendMessage("Your current combat EXP is $combatEXP and you need ${getNeededEXP(combatLVL)} to level up again!")
                }
            }

            "farming" -> {
                if (farmingEXP >= getNeededEXP(farmingLVL)) {
                    farmingLVL++
                    farmingEXP -= getNeededEXP(farmingLVL)
                    p.sendMessage("You have leveled up to your farming level to $farmingLVL!")
                    p.sendMessage("Your current farming EXP is $farmingEXP and you need ${getNeededEXP(farmingLVL)} to level up again!")
                }
            }
        }
    }
}