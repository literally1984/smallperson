package tech.nully.primplug.recode.Utils.RecipeBook

import org.bukkit.inventory.ShapedRecipe

class RecipeBook {
    companion object {
        val pages = ArrayList<RecipePage>()
        val pageMap = HashMap<ShapedRecipe, RecipePage>()
        fun getRecipePage(page: Int): RecipePage {
            return pages[page + 1]
        }
    }
}