package me.bnogocarft.bnogorpg.CustomItems.DefaultItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.FullSetMaker
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Diamond : FullSetMaker {
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
        val factoryItem = BItemFactory.createBItem("Diamond Helmet", Material.DIAMOND_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        sword = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_sword", sword)

        val recipe = ShapedRecipe(sword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        val hoe = ItemStack(Material.DIAMOND_HOE)
        val recipe = ShapedRecipe(hoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createPickaxe() {
        val pick = ItemStack(Material.DIAMOND_PICKAXE)
        val recipe = ShapedRecipe(pick)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        val axe = ItemStack(Material.DIAMOND_AXE)
        val recipe = ShapedRecipe(axe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        val shovel = ItemStack(Material.DIAMOND_SPADE)
        val recipe = ShapedRecipe(shovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createBItem("Diamond Helmet", Material.DIAMOND_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_helmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem("Diamond Chestplate", Material.DIAMOND_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_chestplate", chestplate)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("Diamond Leggings", Material.DIAMOND_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_helmet", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Diamond Helmet", Material.DIAMOND_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_boots", boots)

        val recipe = ShapedRecipe(boots)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }
}