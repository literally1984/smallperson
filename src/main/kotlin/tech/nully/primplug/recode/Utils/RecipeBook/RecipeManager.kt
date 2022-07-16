package tech.nully.primplug.recode.Utils.RecipeBook

import org.bukkit.Bukkit
import org.bukkit.inventory.Recipe
import org.bukkit.inventory.ShapedRecipe

class RecipeManager {
    fun registerRecipes(recipes: Iterator<Recipe>) {
        while (recipes.hasNext()) {
            val recipePage = RecipePage(recipes.next() as ShapedRecipe)
            RecipeBook.pages.add(recipePage)
        }
    }
}