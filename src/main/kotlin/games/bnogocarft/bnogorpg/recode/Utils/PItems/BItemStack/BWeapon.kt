package games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack

import org.bukkit.inventory.ItemStack
import tech.nully.primplug.recode.Utils.EnchantUtils.PEnchantment
import tech.nully.primplug.recode.Utils.PItems.Rarity.RarityUtils
import tech.nully.primplug.recode.Utils.PItems.StatUtils.ItemStat

data class BWeapon(val item: ItemStack) {
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
    var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size-1])
    val enchantments = ArrayList<PEnchantment>();
}