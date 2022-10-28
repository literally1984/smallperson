package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.CombatSetMaker
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class HDiamondSet : CombatSetMaker {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
        lateinit var sword: ItemStack
    }

    init {
        createHelmet()
        createBoots()
        createChestplate()
        createLeggings()
        createSword()
    }

    override fun createSword() {
        TODO("Not yet implemented")
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createBItem("Hardened Diamond Helmet", Material.DIAMOND_HELMET, BItemType.CRAFT_ITEM)
        helm = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_HELMET,
            "4-6")
        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND_BLOCK)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem =
            BItemFactory.createBItem("Hardened Diamond Chestplate", Material.DIAMOND_CHESTPLATE, BItemType.CRAFT_ITEM)
        chestplate = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_CHESTPLATE,
            "4-6")
        val recipe = ShapedRecipe(chestplate)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND_BLOCK)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("Hardened Diamond Leggings", Material.DIAMOND_LEGGINGS, BItemType.CRAFT_ITEM)
        leggings = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_LEGGINGS,
            "4-6")
        val recipe = ShapedRecipe(leggings)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND_BLOCK)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Hardened Diamond Boots", Material.DIAMOND_BOOTS, BItemType.CRAFT_ITEM)
        boots = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_BOOTS,
            "4-6")
        val recipe = ShapedRecipe(boots)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND_BLOCK)
        Bukkit.addRecipe(recipe)
    }
}