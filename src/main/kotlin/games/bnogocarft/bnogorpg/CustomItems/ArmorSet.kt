package games.bnogocarft.bnogorpg.CustomItems

import org.bukkit.inventory.ItemStack

interface ArmorSet {
    companion object {
        lateinit var helmet: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
    }

    fun init()

    fun createHelmet()
    fun createChestplate()
    fun createLeggings()
    fun createBoots()
}