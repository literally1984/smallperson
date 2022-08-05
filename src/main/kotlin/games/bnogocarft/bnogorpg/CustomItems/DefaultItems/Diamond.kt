package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.FullSet
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Diamond : FullSet {
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
        val factoryItem = BItemFactory.createRPGItem("Diamond Sword", Material.DIAMOND_SWORD)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondhelmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        TODO("Not yet implemented")
    }

    override fun createPickaxe() {
        TODO("Not yet implemented")
    }

    override fun createAxe() {
        TODO("Not yet implemented")
    }

    override fun createShovel() {
        TODO("Not yet implemented")
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createRPGItem("Diamond Helmet", Material.DIAMOND_HELMET)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondhelmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createRPGItem("Diamond Chestplate", Material.DIAMOND_CHESTPLATE)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamondchestplate", chestplate)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createRPGItem("Diamond Leggings", Material.DIAMOND_LEGGINGS)

        factoryItem.stats = arrayListOf(2, 19, 1, 17, 20, 30)
        factoryItem.rarity = Rarity.RARE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamonnndpants", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createRPGItem("Diamond Boots", Material.DIAMOND_BOOTS)

        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.RARE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamonnndboots", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }
}