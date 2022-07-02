package tech.nully.primplug.recode.Utils.PItems.PItemStack

import org.bukkit.inventory.ItemStack
import tech.nully.primplug.recode.Utils.EnchantUtils.PEnchantment
import tech.nully.primplug.recode.Utils.PItems.Rarity.RarityUtils
import tech.nully.primplug.recode.Utils.PItems.StatUtils.ItemStat

data class BItemStack(val item: ItemStack) {
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

    init {
        var stats = ItemStat(item)
        var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size-1])
        val enchantments = ArrayList<PEnchantment>();
    }
}