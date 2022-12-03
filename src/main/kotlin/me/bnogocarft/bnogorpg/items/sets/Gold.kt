package me.bnogocarft.bnogorpg.items.sets

import me.bnogocarft.bnogorpg.utils.bitem.factory.CustomItem
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryWeapon
import me.bnogocarft.bnogorpg.utils.bitem.factory.FullSetMaker
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Gold : FullSetMaker, CustomItem() {
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
        val rarity = Rarity.UNCOMMON
    }

    override fun createSword() {
        val stats = arrayListOf(4, 0, 1, 0, 10, 20)

        sword = FactoryWeapon(
            "Gold Sword",
            rarity,
            arrayListOf(),
            BMaterial.GOLD_SWORD,
            stats
        ).register("gold_sword")


        val recipe = ShapedRecipe(sword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        val hoe = ItemStack(Material.GOLD_HOE)
        val recipe = ShapedRecipe(hoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createPickaxe() {
        val pick = ItemStack(Material.GOLD_PICKAXE)
        val recipe = ShapedRecipe(pick)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        val axe = ItemStack(Material.GOLD_AXE)
        val recipe = ShapedRecipe(axe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        val shovel = ItemStack(Material.GOLD_SPADE)
        val recipe = ShapedRecipe(shovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHelmet() {
        val stats = arrayListOf(1, 9, 0, 6, 5, 10)

        helm = FactoryWeapon(
            "Gold Helmet",
            rarity,
            arrayListOf(),
            BMaterial.GOLD_HELMET,
            stats
        ).register("gold_helmet")

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val stats = arrayListOf(1, 25, 0, 15, 15, 25)

        chestplate = FactoryWeapon(
            "Gold Chestplate",
            rarity,
            arrayListOf(),
            BMaterial.GOLD_CHESTPLATE,
            stats
        ).register("gold_chestplate")

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val stats = arrayListOf(1, 14, 0, 8, 7, 15)

        leggings = FactoryWeapon(
            "Gold Chestplate",
            rarity,
            arrayListOf(),
            BMaterial.GOLD_CHESTPLATE,
            stats
        ).register("gold_chestplate")

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val stats = arrayListOf(0, 4, 0, 2, 3, 10)

        boots = FactoryWeapon(
            "Gold Boots",
            rarity,
            arrayListOf(),
            BMaterial.GOLD_BOOTS,
            stats
        ).register("gold_boots")

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }
}