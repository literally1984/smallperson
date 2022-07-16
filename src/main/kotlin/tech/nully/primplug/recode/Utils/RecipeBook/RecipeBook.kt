package tech.nully.primplug.recode.Utils.RecipeBook

import org.bukkit.Bukkit
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class RecipeBook {
    companion object {
        val pages = ArrayList<RecipePage>()
        val pageMap = HashMap<ShapedRecipe, RecipePage>()
        fun getRecipePage(page: Int): RecipePage {
            return pages[page + 1]
        }
        fun getRecipeFor(item: ItemStack): RecipePage? {
            val recipe: ShapedRecipe;
            try {
                recipe = Bukkit.getRecipesFor(item) as ShapedRecipe
            } catch (e: NullPointerException) {
                return null
            }
            return pageMap[recipe]
        }
    }
}