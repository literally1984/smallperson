package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.items.updater.Change.Change
import me.bnogocarft.bnogorpg.items.updater.Change.StatChange
import me.bnogocarft.bnogorpg.database.BnogoSQL
import me.bnogocarft.bnogorpg.utils.bitem.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.Reforge
import me.bnogocarft.bnogorpg.utils.getBar
import me.bnogocarft.bnogorpg.utils.getNeededExp
import me.bnogocarft.bnogorpg.utils.serializeItem
import me.bnogocarft.bnogorpg.utils.stat.ItemStat
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import kotlin.properties.Delegates

@Suppress("DEPRECATION")
open class BGear(override val item: ItemStack) : Enchantable(item) {

    constructor(stats: List<Int>, item: ItemStack) : this(item) {
        this.stats = ItemStat(stats, item)
    }

    /*
    DISPLAY NAME

    Damage: x
    Defense: x
    Magic Damage: x
    Magic Defense: x
    Mana: X
    Stamina: X

    Right Click Ability:
    blah
    blah

    Passive ability:
    blah
    blah

    Enchant, Enchant, Enchant,
    Enchant, Enchant, Enchant,
    Enchant, Enchant, Enchant,

    Rarity
     */
    lateinit var initItem: ItemStack
    private var durabilityLine by Delegates.notNull<Int>()
    var levelLine = 0

    var durability = 0
        set(value) {
            val durabilityPercent = (value / initItem.type.maxDurability.toDouble()) * 100
            var durabilityColor = ChatColor.GREEN
            if (durabilityPercent < 33) {
                durabilityColor = ChatColor.RED
            }
            if (durabilityPercent > 33) {
                durabilityColor = ChatColor.YELLOW
            }
            if (durabilityPercent > 66) {
                durabilityColor = ChatColor.GREEN
            }
            initItem.itemMeta.lore[durabilityLine] =
                "${ChatColor.GRAY}Durability: " +
                        "$durabilityColor${value}/${initItem.type.maxDurability}${
                            (value.toFloat()
                                    to 
                                    initItem.type.maxDurability.toFloat()).getBar(rarity!!.getColor(), "${durabilityColor}"
                            )
                        }"

            field = value
        }

    var id: Int = -1
        set(value) {
            field = value
            val copy = initItem.itemMeta.clone()
            val copyLore = copy.lore
            copyLore[idLine] = "${ChatColor.AQUA}ID: $value"
            copy.lore = copyLore
            initItem.itemMeta = copy
        }
    var stats = ItemStat(initItem)
    var reforge = Reforge.valueOf(initItem.itemMeta.lore[0].replace(" ", "_").lowercase().capitalize())
        set(value) {
            val newMeta = initItem.itemMeta

            if (field == Reforge.NONE) {
                newMeta.displayName = initItem.itemMeta.displayName
                initItem.itemMeta = newMeta
            } else {
                val displayArray = newMeta.displayName.split(" ").toMutableList()
                displayArray[0] = "$value"
                newMeta.displayName = displayArray.joinToString(" ")
                initItem.itemMeta = newMeta
            }

            newMeta.lore[0] = "${ChatColor.GOLD}Reforge: ${ChatColor.GRAY}${
                value.toString().replace("_", " ").lowercase().capitalize()
            }"
            field = value
        }

    var exp: Long = 0
        set(value) {
            val copy = initItem.itemMeta.clone()
            val copyLore = copy.lore
            val bars = (value/level.getNeededExp())*10
            val bar = "[          ]".toCharArray()
            var indexOfMBlock = 1

            for (i in 1..bars) {
                bar[indexOfMBlock] = Main.bar.first()
                indexOfMBlock++
            }

            copyLore[levelLine + 1] = "${ChatColor.GREEN}EXP: $value/${level.getNeededExp()}${String(bar)}"
            copy.lore = copyLore
            initItem.itemMeta = copy
            field = value
        }
    var level: Long = 0
        set(value) {
            val copy = initItem.itemMeta.clone()
            val copyLore = copy.lore
            copyLore[levelLine] = "${ChatColor.YELLOW}Level: ${ChatColor.GRAY}$value"
            copy.lore = copyLore
            initItem.itemMeta = copy
            field = value
        }

    private var idLine = 0

    init {
        durability = initItem.durability.toInt()
        if (initItem.itemMeta != null) {
            initItem = item
            val lore = initItem.itemMeta.lore
            for (cLore in initItem.itemMeta.lore) {
                if (cLore.contains("${ChatColor.AQUA}ID: ")) {
                    id = cLore.split("ID: ")[1].toInt()
                    idLine = cLore.indexOf(cLore)
                }
                if (cLore.contains("Level: ")) {
                    level = cLore.split(": ${ChatColor.GRAY}")[1].toLong()
                    exp = lore[lore.indexOf(cLore) + 1].split(": ${ChatColor.GRAY}")[1].split("/")[0].toLong()
                    levelLine = lore.indexOf(cLore)
                }
                if (cLore.contains("${ChatColor.YELLOW}${ChatColor.BOLD}SET BONUS: ")) {
                    println(lore[lore.indexOf(cLore)].split(": ${ChatColor.RESET}${ChatColor.RED}")[1])
                    abilities.add(
                        BItemUtils.getAbilityByName(
                            lore[
                                    lore.indexOf(cLore)
                            ].split(
                                ": ${ChatColor.RESET}${ChatColor.RED}"
                            )[1]
                        )
                    )
                }
                if (cLore.contains("${ChatColor.GRAY}Durability: ")) {
                    durabilityLine = lore.indexOf(cLore)
                    durability = cLore.split(": ")[1].drop(2).toInt()
                }
            }

            if (id == -1) {
                throw IllegalArgumentException("Item does not have an ID Line")
            }

            reforge = try {
                Reforge.valueOf(initItem.itemMeta.displayName.split(" ")[0])
            } catch (e: IllegalArgumentException) {
                Reforge.NONE
            }

            val stringAbilityArray = ArrayList<String>()
            for (ability in abilities) {
                stringAbilityArray.add("\"${ability}\"")
            }
            val beforeString = stringAbilityArray.joinToString(", ")

            val affectedLines = BnogoSQL.con.prepareStatement(
                "UPDATE \"combatGear\" SET " +
                        "\"rarity\" = ${rarity}, " +
                        "\"name\" = '${initItem.itemMeta.displayName}', " +
                        "\"itemStack\" = '${serializeItem(item)}', " +
                        "\"abilities\" = ARRAY [$beforeString]::text[] " +
                        "WHERE \"id\" = ${id} AND \"material\" = '$material';"
            ).executeUpdate()

            if (affectedLines == 0) {
                BnogoSQL.con.prepareStatement(
                    "INSERT INTO \"combatGear\" VALUES (" +
                            "$id, " +
                            "'$material', " +
                            "${rarity}, " +
                            "'${initItem.itemMeta.displayName}', " +
                            "'${serializeItem(initItem)}', " +
                            "ARRAY [$beforeString]::text[]);"
                ).execute()
            }
        }
    }

    fun applyChange(change: Change) {
        if (change is StatChange) {
            val unsplitChanges = change.adjustments
            val changes = unsplitChanges.split("||")
            for (adjustment in changes) {
                val currentAdjustment = adjustment.split(" ")

                when (currentAdjustment[0]) {
                    "dmg" -> {
                        if (currentAdjustment[1] == "+") {
                            stats.damage += currentAdjustment[2].toInt()
                        } else {
                            stats.damage -= currentAdjustment[2].toInt()
                        }
                    }

                    "def" -> {
                        if (currentAdjustment[1] == "+") {
                            stats.defense += currentAdjustment[2].toInt()
                        } else {
                            stats.defense -= currentAdjustment[2].toInt()
                        }
                    }

                    "mdmg" -> {
                        if (currentAdjustment[1] == "+") {
                            stats.magicDmg += currentAdjustment[2].toInt()
                        } else {
                            stats.magicDmg -= currentAdjustment[2].toInt()
                        }
                    }

                    "mdef" -> {
                        if (currentAdjustment[1] == "+") {
                            stats.magicDef += currentAdjustment[2].toInt()
                        } else {
                            stats.magicDef -= currentAdjustment[2].toInt()
                        }
                    }

                    "mana" -> {
                        if (currentAdjustment[1] == "+") {
                            stats.mana += currentAdjustment[2].toInt()
                        } else {
                            stats.mana -= currentAdjustment[2].toInt()
                        }
                    }

                    "stam" -> {
                        if (currentAdjustment[1] == "+") {
                            stats.stamina += currentAdjustment[2].toInt()
                        } else {
                            stats.stamina -= currentAdjustment[2].toInt()
                        }
                    }
                }
            }
        }
    }
}