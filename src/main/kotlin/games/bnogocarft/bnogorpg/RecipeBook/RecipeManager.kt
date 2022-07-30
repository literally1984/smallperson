package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.Utils.OpenGUI
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe


fun openRecipePageFor(gui: OpenGUI, event: InventoryClickEvent) {
    val clickedItem = event.currentItem
    gui.player.closeInventory()
    for (page in RecipeBook.getRecipePagesFor(clickedItem)) {
        if (page.recipe is ShapedRecipe) {
            if (page.pageInventory != null) {
                gui.player.openInventory(page.pageInventory)
            }
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