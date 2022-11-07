package me.bnogocarft.bnogorpg.recipe

import me.bnogocarft.bnogorpg.utils.OpenGUI
import me.bnogocarft.bnogorpg.utils.changeInventoryTo
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe


fun openRecipePageFor(gui: OpenGUI) {
    val clickedItem = gui.currentItem
    gui.player.closeInventory()
    val recipes = RecipeBook.getRecipePagesFor(clickedItem!!)
    if (recipes.isEmpty()) {
        gui.player.sendMessage(ChatColor.RED.toString() + "No recipes found for this item.")
        return
    }
    for (page in recipes) {
        if (page.recipe is ShapedRecipe) {
            if (page.pageInventory != null) {
                changeInventoryTo(gui.inv, page.pageInventory!!)
                println("Opened page")
                return
            }
            gui.player.sendMessage(ChatColor.RED.toString() + "No recipes found for this item.")
        }
    }
}

fun switchToPage(gui: OpenGUI) {
    if (gui.inv.getItem(gui.slot) != null && gui.inv.getItem(gui.slot).containsEnchantment(Enchantment.DURABILITY)) {
        gui.inv.getItem(gui.slot).addUnsafeEnchantment(Enchantment.DURABILITY, 10)
    }
    for ((index0, index) in (8..44).withIndex()) {
        gui.inv.setItem(index, RecipeManager.armorItems[index0])
    }
}

class RecipeManager {
    companion object {
        val pageMap = HashMap<Recipe, RecipePage>()
        val armorItems = ArrayList<ItemStack>()
        val utilItems = ArrayList<ItemStack>()
        val weaponItems = ArrayList<ItemStack>()
        val textRecipeMap = HashMap<String, Recipe>()

        fun registerRecipes(recipes: Iterator<Recipe>) { // Registers all recipes in the iterator
            while (recipes.hasNext()) { // Loops through all the registered recipes
                val currentRecipe = recipes.next()

                val recipePage = RecipePage(currentRecipe)

                RecipeBook.pages.add(recipePage) // Adds the recipe page
                pageMap[currentRecipe] = recipePage // Adds to the recipe map


                textRecipeMap[if (currentRecipe.result.hasItemMeta())
                    currentRecipe.result.itemMeta.displayName.replace(
                        " ",
                        "_"
                    ).lowercase() else
                    currentRecipe.result.type.name.replace(
                        " ",
                        "_"
                    ).lowercase()
                ] = currentRecipe
            }
        }
    }
}