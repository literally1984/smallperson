package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.RecipeBook.RecipeManager.Companion.pageMap
import org.bukkit.Bukkit
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe

class RecipeBook {
    companion object {
        val pages = ArrayList<RecipePage>()

        /**
         * Gets a [RecipePage] by an [ItemStack], can return null if there is no [RecipePage] associated with the [ItemStack]
         * @param item The RecipePage of the [ItemStack] you want to view
         * @return The [RecipePage] you requested from the given [ItemStack]
         */
        fun getRecipePagesFor(item: ItemStack): List<RecipePage> { // Returns a recipe page for the given item, returns null if no recipe is found
            val recipes = Bukkit.getRecipesFor(item)
            val returnList = ArrayList<RecipePage>()
            for (recipe in recipes) {
                if (RecipePage(recipe).pageInventory != null) {
                    returnList.add(RecipePage(recipe))
                }
            }
            return returnList
        }
    }
}