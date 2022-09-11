package me.bnogocarft.bnogorpg.CustomItems.DefaultItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ArmorSet
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

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
        val factoryItem = BItemFactory.createBItem("Leather Helmet", Material.LEATHER_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.COMMON

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherhelmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem("Leather Chestplate", Material.LEATHER_CHESTPLATE, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.COMMON

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherchestplate", chestplate)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("Leather Leggings", Material.LEATHER_LEGGINGS, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(2, 19, 1, 17, 20, 30)
        factoryItem.rarity = Rarity.COMMON

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherpants", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Leather Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.COMMON

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherboots", leggings)

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }
}