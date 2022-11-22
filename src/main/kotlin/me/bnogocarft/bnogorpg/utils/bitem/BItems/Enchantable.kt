package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment

interface Enchantable {
    val enchantments: ArrayList<BEnchantment>
    var enchantLine: Int
    val enchantImpl: EnchantImpl

    fun addEnchant(enchant: BEnchantment)
}