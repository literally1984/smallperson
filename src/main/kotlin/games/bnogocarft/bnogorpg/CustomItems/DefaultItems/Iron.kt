package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.FullSet
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Iron : FullSet {
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
        TODO("Not yet implemented")
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
        val factoryItem = BItemFactory.createRPGItem("Iron Helmet", Material.IRON_HELMET)

        factoryItem.stats = arrayListOf(0, 18, 0, 15, 7, 15)
        factoryItem.rarity = Rarity.UNCOMMON

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("ironhelmet", helm)

        val recipe = ShapedRecipe(helm)
        recipe.shape("iii", "i i", "   ")
        recipe.setIngredient('i', Material.IRON_INGOT)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        TODO("Not yet implemented")
    }

    override fun createLeggings() {
        TODO("Not yet implemented")
    }

    override fun createBoots() {
        TODO("Not yet implemented")
    }
}