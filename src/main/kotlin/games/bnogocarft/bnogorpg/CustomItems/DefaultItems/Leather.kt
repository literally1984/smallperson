package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.ArmorSet
import org.bukkit.inventory.ItemStack

class Leather : ArmorSet {

    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
    }

    init {
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()
    }

    override fun createHelmet() {
        TODO("Not yet implemented")
    }

    override fun createChestplate() {
        TODO("Not yet implemented")
    }

    override fun createLeggings() {
        TODO("Not yet implemented")
    }

    override fun createBoots() {
        TODO("Not yet implemented")
    }
}