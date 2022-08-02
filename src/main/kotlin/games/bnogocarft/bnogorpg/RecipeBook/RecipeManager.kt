package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.Utils.OpenGUI
import games.bnogocarft.bnogorpg.Utils.changeInventoryTo
import org.bukkit.ChatColor
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
class RecipeManager {
    companion object {
        val pageMap = HashMap<Recipe, RecipePage>()

        fun registerRecipes(recipes: Iterator<Recipe>) { // Registers all recipes in the iterator
            while (recipes.hasNext()) {
                val currentRecipe = recipes.next()
                val recipePage = RecipePage(currentRecipe)

                RecipeBook.pages.add(recipePage) // Adds the recipe page
                pageMap[currentRecipe] = recipePage // Adds to the recipe map


                textRecipeMap[currentRecipe.result.type.toString().lowercase()] =
                    currentRecipe
            }
        }
        val textRecipeMap = HashMap<String, Recipe>()

    }
}