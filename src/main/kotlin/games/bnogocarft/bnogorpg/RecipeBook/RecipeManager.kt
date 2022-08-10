package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.OpenGUI
import games.bnogocarft.bnogorpg.Utils.changeInventoryTo
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe


fun openRecipePageFor(gui: OpenGUI) {
    val clickedItem = gui.currentItem
    gui.player.closeInventory()
    val recipes = RecipeBook.getRecipePagesFor(clickedItem)
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
            while (recipes.hasNext()) {
                val currentRecipe = recipes.next()
                if (currentRecipe.result.type.toString().lowercase().contains("helmet") ||
                    currentRecipe.result.type.toString().lowercase().contains("chestplate") ||
                    currentRecipe.result.type.toString().lowercase().contains("leggings") ||
                    currentRecipe.result.type.toString().lowercase().contains("boots")
                ) {
                    armorItems.add(currentRecipe.result)
                } else if (currentRecipe.result.hasItemMeta()) {
                    if (BItemUtils.getBType(currentRecipe.result) != null) {
                        when (BItemUtils.getBType(currentRecipe.result)) {
                            "weapon" -> weaponItems.add(currentRecipe.result)
                            "armor" -> armorItems.add(currentRecipe.result)
                        }
                    }
                }
                val recipePage = RecipePage(currentRecipe)

                RecipeBook.pages.add(recipePage) // Adds the recipe page
                pageMap[currentRecipe] = recipePage // Adds to the recipe map


                textRecipeMap[Bukkit.getItemFactory().getItemMeta(currentRecipe.result.type).displayName.replace(
                    " ",
                    "_"
                ).lowercase()] =
                    currentRecipe
            }
        }
    }
}