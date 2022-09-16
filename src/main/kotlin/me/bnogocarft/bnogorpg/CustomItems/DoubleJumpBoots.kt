package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.CustomItems.DefaultItems.Diamond
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class DoubleJumpBoots {
    companion object {
        lateinit var boots: ItemStack
    }

    init {
        createBoots()
    }

    fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Double Jump Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        val ability = ItemAbility.DoubleJump
        factoryItem.abilities.add(ability)
        factoryItem.armorColor = Color.BLUE
        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.EPIC

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("dj_boots", boots)

        val recipe = ShapedRecipe(Diamond.boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.SLIME_BALL)
        Bukkit.addRecipe(recipe)
    }
}