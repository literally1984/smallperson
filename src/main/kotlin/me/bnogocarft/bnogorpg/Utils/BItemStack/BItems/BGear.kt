package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Updater.Change.Change
import me.bnogocarft.bnogorpg.Updater.Change.StatChange
import me.bnogocarft.bnogorpg.Utils.BItemStack.Reforge
import me.bnogocarft.bnogorpg.Utils.Database.BnogoSQL
import me.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment
import me.bnogocarft.bnogorpg.Utils.Exceptions.IllegalParameterException
import me.bnogocarft.bnogorpg.Utils.ItemAbility.IAbility
import me.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import me.bnogocarft.bnogorpg.Utils.glow
import me.bnogocarft.bnogorpg.Utils.serializeItem
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import java.util.*
import kotlin.collections.ArrayList

open class BGear(item: ItemStack) : BItem(item) {

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
    override val item = item
    lateinit var initItem: ItemStack
    private val enchantments = ArrayList<BEnchantment>()
    private var enchantLine: Int = 0
    var id: Int = -1
        set(value) {
            field = value
            val copy = this.initItem.itemMeta.clone()
            val copyLore = copy.lore
            copyLore[idLine] = "${ChatColor.AQUA}ID: $value"
            copy.lore = copyLore
            this.initItem.itemMeta = copy
        }
    var stats = ItemStat(item)
    var reforge = Reforge.NONE
        set(value) {
            val newMeta = this.initItem.itemMeta

            if (field == Reforge.NONE) {
                newMeta.displayName = this.initItem.itemMeta.displayName
                this.initItem.itemMeta = newMeta
            } else {
                val displayArray = newMeta.displayName.split(" ").toMutableList()
                displayArray[0] = "$value"
                newMeta.displayName = displayArray.joinToString(" ")
                this.initItem.itemMeta = newMeta
            }
            field = value
        }
    val abilities = ArrayList<IAbility>()
    var exp: Long = 0
        set(value) {
            val copy = this.initItem.itemMeta.clone()
            val copyLore = copy.lore
            copyLore[copyLore.size - 4] = "${ChatColor.GREEN}EXP: ${ChatColor.GRAY}$value"
            copy.lore = copyLore
            this.initItem.itemMeta = copy
            field = value
        }
    var level: Long = 0
        set(value) {
            val copy = this.initItem.itemMeta.clone()
            val copyLore = copy.lore
            copyLore[copyLore.size - 5] = "${ChatColor.YELLOW}Level: ${ChatColor.GRAY}$value"
            copy.lore = copyLore
            this.initItem.itemMeta = copy
            field = value
        }

    private var idLine = 0

    init {
        if (item.itemMeta != null) {
            this.initItem = item
            val lore = item.itemMeta.lore
            for (cLore in item.itemMeta.lore) {
                if (cLore.contains("${ChatColor.BLUE}Enchantments:")) { // Gets the line that marks the start of enchantments
                    enchantLine = cLore.indexOf(cLore) + 1
                    var index =
                        item.itemMeta.lore.indexOf(cLore) + 1 // Gets the index of the line after the marker above
                    while (!(cLore[index].equals(""))) { // Loops through the enchants until it finds "" which is the seperator
                        index++
                        val enchantsInLine = cLore.split(", ")
                        for (enchant in enchantsInLine) {
                            //Enchants.add(EnchantUtils.parseEnchant(enchant))
                            TODO("Add enchant parsing")
                        }
                    }
                    continue
                }
                if (cLore.contains("${ChatColor.AQUA}ID: ")) {
                    id = cLore.split("ID: ")[1].toInt()
                    idLine = cLore.indexOf(cLore)
                }
                if (cLore.contains("Level:")) {
                    level = cLore.split(": ${ChatColor.GRAY}")[1].toLong()
                    exp = lore[lore.indexOf(cLore) + 1].split(": ${ChatColor.GRAY}")[1].split("/")[0].toLong()
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
            }

            if (id == -1) {
                throw IllegalParameterException("Item does not have an ID Line")
            }

            reforge = try {
                Reforge.valueOf(item.itemMeta.displayName.split(" ")[0])
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
                        "\"stars\" = ${rarity!!.getStars()}, " +
                        "\"name\" = '${item.itemMeta.displayName}', " +
                        "\"itemStack\" = '${serializeItem(item)}', " +
                        "\"abilities\" = ARRAY [$beforeString]::text[] " +
                        "WHERE \"id\" = ${id} AND \"material\" = '$material';"
            ).executeUpdate()

            if (affectedLines == 0) {
                BnogoSQL.con.prepareStatement(
                    "INSERT INTO \"combatGear\" VALUES (" +
                            "$id, " +
                            "'$material', " +
                            "${rarity!!.getStars()}, " +
                            "'${item.itemMeta.displayName}', " +
                            "'${serializeItem(item)}', " +
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

    fun addEnchant(enchant: BEnchantment) {
        enchantments.add(enchant)
        // checks if the item has no enchantments
        if (item.itemMeta.lore[enchantLine] == "") {
            item.itemMeta.lore.add(
                enchantLine,
                "${ChatColor.BLUE}${
                    enchant.enchant.toString()
                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }"
            )
        } else {
            while ("${item.itemMeta.lore[enchantLine].length}, ${ChatColor.BLUE}${
                    enchant.enchant.toString()
                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }".length >= 32) { // If the old enchantments and the new enchantments in one string is longer than 32 chars
                enchantLine++
            }
            item.itemMeta.lore[enchantLine] += ", ${ChatColor.BLUE}${
                enchant.enchant.toString()
                    .replace("_", " ").lowercase()
                    .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
            }"
        }


        if (item.containsEnchantment(Enchantment.ARROW_DAMAGE) ||
            item.containsEnchantment(Enchantment.WATER_WORKER)
        ) {
            return
        }
        item.glow()
    }
}