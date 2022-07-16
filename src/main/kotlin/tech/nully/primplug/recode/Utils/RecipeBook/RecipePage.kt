package tech.nully.primplug.recode.Utils.RecipeBook

import org.bukkit.Bukkit
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

data class RecipePage(val recipe: ShapedRecipe) {
    private val craftingLines = arrayOf(10, 11, 12, 19,20,21, 28,29,30)
    val pageInventory: Inventory
    val resultItem: ItemStack = recipe.result

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

        // Creates the Inventory

        pageInventory = Bukkit.createInventory(null, 54, "Recipe for ${recipe.result.itemMeta.displayName}")

        val iteration = 0
        for (slot in craftingLines) {
            pageInventory.setItem(slot, itemStackShape[iteration])
            iteration + 1
        }
    }
}