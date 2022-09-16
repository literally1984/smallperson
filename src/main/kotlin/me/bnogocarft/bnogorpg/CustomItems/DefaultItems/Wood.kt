package me.bnogocarft.bnogorpg.CustomItems.DefaultItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ToolSet
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Wood : ToolSet {

    companion object {
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
    }

    override fun createSword() {
        val factoryItem = BItemFactory.createBItem("Wood Sword", Material.WOOD_SWORD, BItemType.WEAPON)

        factoryItem.stats = arrayListOf(3, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        sword = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("woodsword", sword)

        val recipe = ShapedRecipe(sword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.WOOD)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        val hoe = ItemStack(Material.WOOD_HOE)
        val recipe = ShapedRecipe(hoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.WOOD)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createPickaxe() {
        val pick = ItemStack(Material.WOOD_PICKAXE)
        val recipe = ShapedRecipe(pick)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.WOOD)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        val axe = ItemStack(Material.WOOD_AXE)
        val recipe = ShapedRecipe(axe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.WOOD)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        val shovel = ItemStack(Material.WOOD_SPADE)
        val recipe = ShapedRecipe(shovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.WOOD)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }
}