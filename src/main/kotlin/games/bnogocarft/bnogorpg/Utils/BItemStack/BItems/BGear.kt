package games.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Reforge
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
        }
    }
}