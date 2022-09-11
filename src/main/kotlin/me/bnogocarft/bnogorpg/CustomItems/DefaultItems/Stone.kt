package me.bnogocarft.bnogorpg.CustomItems.DefaultItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ToolSet
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Stone : ToolSet {

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
        createCursedPickaxe()
    }

    override fun createSword() {
        val factoryItem = BItemFactory.createBItem("Stone Sword", Material.STONE_SWORD, BItemType.WEAPON)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        sword = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("stone_sword", sword)

        val recipe = ShapedRecipe(sword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.COBBLESTONE)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        val hoe = ItemStack(Material.STONE_HOE)
        val recipe = ShapedRecipe(hoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.COBBLESTONE)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createPickaxe() {
        val pick = ItemStack(Material.STONE_PICKAXE)
        val recipe = ShapedRecipe(pick)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.COBBLESTONE)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        val axe = ItemStack(Material.STONE_AXE)
        val recipe = ShapedRecipe(axe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.COBBLESTONE)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        val shovel = ItemStack(Material.STONE_SPADE)
        val recipe = ShapedRecipe(shovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.COBBLESTONE)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    fun createCursedPickaxe() {
        val cursed = ItemStack(Material.STONE_PICKAXE)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.STONE_PICKAXE)
        meta.displayName = "Cursed Pickaxe"
        cursed.durability = 62
        val recipe = ShapedRecipe(cursed)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.STEP)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }
}