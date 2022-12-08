package me.bnogocarft.bnogorpg.recipe

import org.bukkit.Bukkit
import org.bukkit.inventory.ItemStack

class RecipeBook : ArrayList<RecipeItem>() {
    init {

    }

    val items = ArrayList<ItemStack>()

    /**
     * Gets a [RecipeItem] by an [ItemStack], can return null if there is no [RecipeItem] associated with the [ItemStack]
     * @param item The RecipePage of the [ItemStack] you want to view
     * @return The [RecipeItem] you requested from the given [ItemStack]
     */
    fun getRecipePagesFor(item: ItemStack): List<RecipeItem> { // Returns a recipe page for the given item, returns null if no recipe is found
        val recipes = Bukkit.getRecipesFor(item)
        val returnList = ArrayList<RecipeItem>()
        for (recipe in recipes) {
            if (RecipeItem(recipe).pageInventory != null) {
                returnList.add(RecipeItem(recipe))
            }
        }
        return returnList
    }

    private fun createRecipeFrontPage() {

    }

}