package me.bnogocarft.bnogorpg.items.armorSets

import me.bnogocarft.bnogorpg.utils.bitem.factory.ArmorSetMaker
import me.bnogocarft.bnogorpg.utils.bitem.factory.CustomItem
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryArmor
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Leather : ArmorSetMaker, CustomItem() {

    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack

        val rarity = Rarity.COMMON
    }

    override fun createHelmet() {

        val stats = arrayListOf(0, 4, 0, 2, 3, 5)

        helm = FactoryArmor(
            "Leather Helmet",
            rarity,
            arrayListOf(),
            Material.LEATHER_HELMET,
            stats,
            null
        ).register("leather_helmet")

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val stats = arrayListOf(2, 48, 1, 40, 12, 20)
        chestplate = FactoryArmor(
            "Leather Chestplate",
            rarity,
            arrayListOf(),
            Material.LEATHER_CHESTPLATE,
            stats,
            null
        ).register("leather_chestplate")

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val stats = arrayListOf(3, 32, 2, 22, 10, 25)
        leggings = FactoryArmor(
            "Leather Leggings",
            rarity,
            arrayListOf(),
            Material.LEATHER_LEGGINGS,
            stats,
            null
        ).register("leather_leggings")

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val stats = arrayListOf(1, 14, 0, 8, 7, 15)
        boots = FactoryArmor(
            "Leather Boots",
            rarity,
            arrayListOf(),
            Material.LEATHER_BOOTS,
            stats,
            null
        ).register("leather_boots")

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }
}