package tech.nully.primplug.recode.Utils.RecipeBook

import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

data class RecipePage(val recipe: ShapedRecipe) {
    init {
        val shapeRows = recipe.shape //The default String array of a ShapedRecipe
        val shapeIndividual = ArrayList<Char>()
        val itemStackShape = ArrayList<ItemStack?>()
        val shapeItemStacks = recipe.ingredientMap

        // Converts the 3 strings that represent rows into individual chars stored int shapeIndividual
        for (charRow in shapeRows) {
            for (char in charRow.split("")) {
                shapeIndividual.add(char.first())
            }
        }

        for (recipeLetter in shapeIndividual) {
            itemStackShape.add(shapeItemStacks[recipeLetter])
        }
    }
}