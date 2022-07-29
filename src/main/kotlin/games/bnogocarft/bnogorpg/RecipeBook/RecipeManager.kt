package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.Utils.OpenGUI
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe

class RecipeManager {
    companion object {
        val pageMap = HashMap<Recipe, RecipePage>()

        fun registerRecipes(recipes: Iterator<Recipe>) { // Registers all recipes in the iterator
            while (recipes.hasNext()) {
                if (recipes.next() is ShapedRecipe) {
                    val currentRecipe = recipes.next() as ShapedRecipe
                    val recipePage = RecipePage(currentRecipe)

                    RecipeBook.pages.add(recipePage) // Adds the recipe page
                    pageMap[currentRecipe] = recipePage // Adds to the recipe map


                    textRecipeMap[currentRecipe.result.itemMeta.displayName.replace(" ", "-").lowercase()] =
                        currentRecipe
                }
            }
        }

        fun openRecipePageFor(gui: OpenGUI, event: InventoryClickEvent) {
            val clickedItem = event.currentItem
            gui.player.openInventory(RecipeBook.getRecipeFor(clickedItem)!!.pageInventory)
        }

        val textRecipeMap = HashMap<String, ShapedRecipe>()

    }
}