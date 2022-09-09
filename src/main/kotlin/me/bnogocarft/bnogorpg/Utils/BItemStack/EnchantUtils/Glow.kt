package me.bnogocarft.bnogorpg.Utils.BItemStack.EnchantUtils

import org.bukkit.enchantments.Enchantment
import org.bukkit.enchantments.EnchantmentTarget
import org.bukkit.inventory.ItemStack

class Glow : Enchantment(WATER_WORKER.id) {
    override fun canEnchantItem(arg0: ItemStack): Boolean {
        return false
    }

    override fun conflictsWith(arg0: Enchantment): Boolean {
        return false
    }

    override fun getItemTarget(): EnchantmentTarget? {
        return null
    }

    override fun getMaxLevel(): Int {
        return 0
    }

    override fun getName(): String? {
        return null
    }

    override fun getStartLevel(): Int {
        return 0
    }
}