package games.bnogocarft.bnogorpg.Utils.BItemStack

import games.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.RarityUtils
import games.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

data class BWeapon(var item: ItemStack) {

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
    var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size - 1])
    val enchantments = ArrayList<BEnchantment>()
    val reforge = Reforge.NONE //TODO
}