package games.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import games.bnogocarft.bnogorpg.Updater.Change.Change
import games.bnogocarft.bnogorpg.Updater.Change.StatChange
import games.bnogocarft.bnogorpg.Utils.BItemStack.Reforge
import games.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import games.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

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
    var stats = ItemStat(item)
    var reforge = Reforge.NONE
    val abilities = ArrayList<ItemAbility>()
    var exp: Long = 0
    var level: Long = 0

    init {
        reforge = try {
            Reforge.valueOf(item.itemMeta.displayName.split(" ")[0])
        } catch (e: IllegalArgumentException) {
            Reforge.NONE
        }
        val clore = item.itemMeta.lore
        for (lore in item.itemMeta.lore) {
            if (lore.contains("Level:")) {
                level = lore.split(" ")[1].toLong()
                exp = clore[clore.indexOf(lore) + 1].split(" ")[1].split("/")[0].toLong()
            }
            TODO("Item Abilities")
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