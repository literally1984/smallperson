package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.RecipeBook.RecipeManager.Companion.pageMap
import org.bukkit.Bukkit
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class RecipeBook {
    companion object {
        val pages = ArrayList<RecipePage>()

        /**
         * Gets a [RecipePage] by the page it is in the book
         * @param page The page you want to view
         * @return The [RecipePage] you requested
         */
        fun getRecipePage(page: Int): RecipePage {
            return pages[page + 1]
        }

        /**
         * Gets a [RecipePage] by an [ItemStack], can return null if there is no [RecipePage] associated with the [ItemStack]
         * @param item The RecipePage of the [ItemStack] you want to view
         * @return The [RecipePage] you requested from the given [ItemStack]
         */
        fun getRecipeFor(item: ItemStack): RecipePage? { // Returns a recipe page for the given item, returns null if no recipe is found
            val recipe: ShapedRecipe
            try {
                recipe = Bukkit.getRecipesFor(item) as ShapedRecipe
            } catch (e: NullPointerException) {
                return null
            }
            return pageMap[recipe]
        }
    }
}