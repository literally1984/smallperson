package games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack

import games.bnogocarft.bnogorpg.recode.Utils.EnchantUtils.PEnchantment
import games.bnogocarft.bnogorpg.recode.Utils.PItems.Rarity.RarityUtils
import games.bnogocarft.bnogorpg.recode.Utils.PItems.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

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
    val enchantments = ArrayList<PEnchantment>()
}