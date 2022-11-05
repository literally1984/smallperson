package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment

interface Enchantable {
    val enchantments: ArrayList<BEnchantment>
    var enchantLine: Int
    val enchantImpl: EnchantImpl

    fun addEnchant(enchant: BEnchantment)
}