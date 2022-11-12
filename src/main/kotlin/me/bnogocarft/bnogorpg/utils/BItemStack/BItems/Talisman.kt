package me.bnogocarft.bnogorpg.utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
import org.bukkit.inventory.ItemStack

data class Talisman(override val item: ItemStack) : MagicItem(item), Enchantable {
    var trigger: AbilityTrigger = AbilityTrigger.NONE
    override val enchantments: ArrayList<BEnchantment> = ArrayList()
    override var enchantLine = 0
    override val enchantImpl = EnchantImpl(this, item)

    init {
        val lore = item.itemMeta.lore
        for (cLore in lore) {
            TODO("Initialize ability triggers and variables")
            enchantImpl.init(cLore)
        }
    }

    override fun addEnchant(enchant: BEnchantment) {
        enchantImpl.enchant(enchant)
    }
}