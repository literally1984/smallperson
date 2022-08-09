package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.ArmorSet
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Leather : ArmorSet {

    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
    }

    init {
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createBGearItem("Leather Helmet", Material.LEATHER_HELMET)

        factoryItem.stats = arrayListOf(1, 12, 1, 10, 10, 20)
        factoryItem.rarity = Rarity.RARE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherhelmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBGearItem("Leather Chestplate", Material.LEATHER_CHESTPLATE)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherchestplate", chestplate)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBGearItem("Leather Leggings", Material.LEATHER_LEGGINGS)

        factoryItem.stats = arrayListOf(2, 19, 1, 17, 20, 30)
        factoryItem.rarity = Rarity.RARE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherpants", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBGearItem("Leather Boots", Material.LEATHER_BOOTS)

        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.RARE

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("leatherboots", leggings)

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.LEATHER)
        Bukkit.addRecipe(recipe)
    }
}