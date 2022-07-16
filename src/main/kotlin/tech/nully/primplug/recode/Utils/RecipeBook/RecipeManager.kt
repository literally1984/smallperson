package tech.nully.primplug.recode.Utils.RecipeBook

import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe

class RecipeManager {
    companion object {
        fun registerRecipes(recipes: Iterator<Recipe>) {
            while (recipes.hasNext()) {
                val currentRecipe = recipes.next() as ShapedRecipe
                val recipePage = RecipePage(currentRecipe)
                RecipeBook.pages.add(recipePage)
                RecipeBook.pageMap[currentRecipe] = recipePage
            }
        }
    }
}