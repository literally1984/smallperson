package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.FullSet
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Gold : FullSet {
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
        val factoryItem = BItemFactory.createBGearItem("Gold Sword", Material.GOLD_SWORD)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        sword = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondsword", sword)

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
        val factoryItem = BItemFactory.createBGearItem("Gold Helmet", Material.GOLD_HELMET)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondhelmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBGearItem("Gold Chestplate", Material.GOLD_CHESTPLATE)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondchestplate", chestplate)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBGearItem("Gold Leggings", Material.GOLD_LEGGINGS)

        factoryItem.stats = arrayListOf(2, 19, 1, 17, 20, 30)
        factoryItem.rarity = Rarity.RARE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamonnndpants", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBGearItem("Gold Boots", Material.GOLD_BOOTS)

        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.RARE

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondboots", leggings)

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.GOLD_INGOT)
        Bukkit.addRecipe(recipe)
    }
}