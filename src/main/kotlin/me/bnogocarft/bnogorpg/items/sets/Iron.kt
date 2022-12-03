package me.bnogocarft.bnogorpg.items.sets

import me.bnogocarft.bnogorpg.utils.bitem.factory.CustomItem
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryWeapon
import me.bnogocarft.bnogorpg.utils.bitem.factory.FullSetMaker
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Iron : FullSetMaker, CustomItem() {
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

        val rarity = Rarity.RARE
    }

    override fun createSword() {
        val stats = arrayListOf(6, 1, 3, 0, 20, 35)

        sword = FactoryWeapon(
            "Iron Sword",
            Diamond.rarity,
            arrayListOf(),
            BMaterial.IRON_SWORD,
            stats
        ).register("iron_sword")

        val recipe = ShapedRecipe(sword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.IRON_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        hoe = ItemStack(Material.IRON_HOE)
        val recipe = ShapedRecipe(hoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.IRON_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createPickaxe() {
        pickaxe = ItemStack(Material.IRON_PICKAXE)
        val recipe = ShapedRecipe(pickaxe)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.IRON_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        axe = ItemStack(Material.IRON_AXE)
        val recipe = ShapedRecipe(axe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.IRON_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        shovel = ItemStack(Material.IRON_SPADE)
        val recipe = ShapedRecipe(shovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.IRON_INGOT)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHelmet() {
        val stats = arrayListOf(1, 8, 0, 5, 5, 10)

        helm = FactoryWeapon(
            "Iron Helmet",
            rarity,
            arrayListOf(),
            BMaterial.IRON_HELMET,
            stats
        ).register("iron_helmet")

        val recipe = ShapedRecipe(helm)
        recipe.shape("iii", "i i", "   ")
        recipe.setIngredient('i', Material.IRON_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val stats = arrayListOf(3, 24, 1, 15, 15, 25)

        helm = FactoryWeapon(
            "Iron Chestplate",
            rarity,
            arrayListOf(),
            BMaterial.IRON_CHESTPLATE,
            stats
        ).register("iron_chestplate")

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.IRON_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val stats = arrayListOf(3, 20, 0, 12, 12, 22)

        leggings = FactoryWeapon(
            "Iron Leggings",
            rarity,
            arrayListOf(),
            BMaterial.IRON_LEGGINGS,
            stats
        ).register("iron_leggings")

        val recipe = ShapedRecipe(leggings)
        recipe.shape("iii", "i i", "i i")
        recipe.setIngredient('i', Material.IRON_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val stats = arrayListOf(0, 8, 0, 5, 5, 10)

        helm = FactoryWeapon(
            "Iron Boots",
            rarity,
            arrayListOf(),
            BMaterial.IRON_BOOTS,
            stats
        ).register("iron_boots")

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.IRON_INGOT)
        Bukkit.addRecipe(recipe)
    }
}