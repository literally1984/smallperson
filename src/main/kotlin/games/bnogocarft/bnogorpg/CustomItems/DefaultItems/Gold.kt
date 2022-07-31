package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.FullSet
import org.bukkit.inventory.ItemStack

class Gold : FullSet {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
        lateinit var sword: ItemStack
        lateinit var pickaxe: ItemStack
        lateinit var axe: ItemStack
        lateinit var hoe: ItemStack
        lateinit var shovel: ItemStack
    }

    init {
        createSword()
        createHoe()
        createPickaxe()
        createAxe()
        createShovel()
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()
    }
    override fun createSword() {
        TODO("Not yet implemented")
    }

    override fun createHoe() {
        TODO("Not yet implemented")
    }

    override fun createPickaxe() {
        TODO("Not yet implemented")
    }

    override fun createAxe() {
        TODO("Not yet implemented")
    }

    override fun createShovel() {
        TODO("Not yet implemented")
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