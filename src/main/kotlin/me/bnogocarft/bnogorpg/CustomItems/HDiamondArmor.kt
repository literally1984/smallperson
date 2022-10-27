package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.CombatSetMaker
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class HDiamondArmor : CombatSetMaker {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack

        lateinit var craftHelmet: ItemStack
        lateinit var craftChestplate: ItemStack
        lateinit var craftLeggings: ItemStack
        lateinit var craftBoots: ItemStack

    }

    override fun createSword() {
        TODO("Not yet implemented")
    }

    override fun createHelmet() {
        TODO("Not yet implemented")
    }

    private fun createCraftHelmet() {
        val factoryItem = BItemFactory.createBItem("Diamond Helmet", Material.DIAMOND_HELMET, BItemType.CRAFT_ITEM)
        craftHelmet = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_HELMET,
            "4-6")
        val recipe = ShapedRecipe(craftHelmet)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        TODO("Not yet implemented")
    }

    private fun createCraftChestplate() {
        val factoryItem =
            BItemFactory.createBItem("Diamond Chestplate", Material.DIAMOND_CHESTPLATE, BItemType.CRAFT_ITEM)
        craftHelmet = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_CHESTPLATE,
            "4-6")
        val recipe = ShapedRecipe(craftHelmet)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        TODO("Not yet implemented")
    }

    private fun createCraftLeggings() {
        val factoryItem = BItemFactory.createBItem("Diamond Leggings", Material.DIAMOND_LEGGINGS, BItemType.CRAFT_ITEM)
        craftChestplate = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_LEGGINGS,
            "4-6")
        val recipe = ShapedRecipe(craftChestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        TODO("Not yet implemented")
    }

    private fun createCraftBoots() {
        val factoryItem = BItemFactory.createBItem("Diamond Boots", Material.DIAMOND_BOOTS, BItemType.CRAFT_ITEM)
        craftHelmet = BItemFactory.createCraftItem(factoryItem,
            BMaterial.HARDENED_DIAMOND_BOOTS,
            "4-6")
        val recipe = ShapedRecipe(craftHelmet)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }
}