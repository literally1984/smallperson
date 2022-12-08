package me.bnogocarft.bnogorpg.items.sets

import me.bnogocarft.bnogorpg.utils.bitem.factory.*
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Diamond : FullSetMaker, CustomItem() {
    companion object {
        lateinit var itemHelm: ItemStack
        lateinit var itemChestplate: ItemStack
        lateinit var itemLeggings: ItemStack
        lateinit var itemBoots: ItemStack
        lateinit var itemSword: ItemStack
        lateinit var itemPick: ItemStack
        lateinit var itemAxe: ItemStack
        lateinit var itemHoe: ItemStack
        lateinit var itemShovel: ItemStack
        val rarity = Rarity.RARE
    }

    override fun createSword() {
        val stats = arrayListOf(7, 4, 5, 2, 30, 40)

        itemSword = FactoryWeapon(
            "Diamond Sword",
            rarity,
            arrayListOf(),
            Material.DIAMOND_SWORD,
            stats
        ).register("diamond_sword")


        val recipe = ShapedRecipe(itemSword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        itemHoe = ItemStack(Material.DIAMOND_HOE)
        val recipe = ShapedRecipe(itemHoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)

        val itemL = FactoryWeapon::class
    }

    override fun createPickaxe() {
        itemPick = ItemStack(Material.DIAMOND_PICKAXE)
        val recipe = ShapedRecipe(itemPick)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        itemAxe = ItemStack(Material.DIAMOND_AXE)
        val recipe = ShapedRecipe(itemAxe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        itemShovel = ItemStack(Material.DIAMOND_SPADE)
        val recipe = ShapedRecipe(itemShovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHelmet() {

        val stats = arrayListOf(1, 14, 0, 8, 7, 15)

        itemHelm = FactoryWeapon(
            "Diamond Helmet",
            rarity,
            arrayListOf(),
            Material.DIAMOND_HELMET,
            stats
        ).register("diamond_helmet")

        val recipe = ShapedRecipe(itemHelm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val stats = arrayListOf(2, 48, 1, 40, 12, 20)
        itemChestplate = FactoryWeapon(
            "Diamond Chestplate",
            rarity,
            arrayListOf(),
            Material.DIAMOND_CHESTPLATE,
            stats
        ).register("diamond_chestplate")

        val recipe = ShapedRecipe(itemChestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val stats = arrayListOf(3, 32, 2, 22, 10, 25)
        itemLeggings = FactoryWeapon(
            "Diamond Leggings",
            rarity,
            arrayListOf(),
            Material.DIAMOND_LEGGINGS,
            stats
        ).register("diamond_leggings")

        val recipe = ShapedRecipe(itemLeggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val stats = arrayListOf(1, 14, 0, 8, 7, 15)
        itemBoots = FactoryWeapon(
            "Diamond Boots",
            rarity,
            arrayListOf(),
            Material.DIAMOND_BOOTS,
            stats
        ).register("diamond_boots")

        val recipe = ShapedRecipe(itemBoots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }
}