package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
import org.bukkit.inventory.ItemStack

data class Talisman(override val item: ItemStack) : MagicItem(item) {
    var trigger: AbilityTrigger = AbilityTrigger.NONE

    init {
        val lore = item.itemMeta.lore
        for (cLore in lore) {
            TODO("Initialize ability triggers and variables")
        }
    }
}