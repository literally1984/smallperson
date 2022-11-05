package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment
import me.bnogocarft.bnogorpg.Utils.glow
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import java.util.*
import kotlin.collections.ArrayList

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