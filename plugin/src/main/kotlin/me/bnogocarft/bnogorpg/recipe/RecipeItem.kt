package me.bnogocarft.bnogorpg.recipe

import me.bnogocarft.bnogorpg.utils.GUIBackground
import me.bnogocarft.bnogorpg.utils.GUIFactory
import me.bnogocarft.bnogorpg.utils.GUILayer
import me.bnogocarft.bnogorpg.utils.sBK
import org.bukkit.inventory.*

data class RecipeItem(val recipe: Recipe) {
    private val craftingLines = arrayOf(10, 11, 12, 19, 20, 21, 28, 29, 30)
    var pageInventory: Inventory? = null

    init {
        if (recipe is ShapedRecipe) {
            val recipeShape = recipe.shape
            val ingredientMap = recipe.ingredientMap
            var index = 0

            // Creates the Inventory

            val gui = GUIFactory.createInventory(
                "Recipe for ${
                    if (recipe.result.hasItemMeta()) recipe.result.itemMeta.displayName
                    else {
                        recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }
                    }
                }", 54
            )

            val backgroundLayer = GUILayer(gui)

            for (ind in 0..53) {
                backgroundLayer.backgrounds.add(GUIBackground(index, sBK))
            }
            val backgroundLayer2 = GUILayer(gui)
            for (j in recipeShape.indices) {
                for (k in 0 until recipeShape[j].length) {
                    val item = ingredientMap[recipeShape[j].toCharArray()[k]] ?: continue
                    item.amount = 0
                    backgroundLayer2.backgrounds.add(GUIBackground(craftingLines[(j * 3 + k + 1) - 1], item))
                }
            }

        }

        if (recipe is ShapelessRecipe) {
            val finalGUI = GUIFactory.createInventory(
                "Recipe for ${
                    recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }
                }", 54
            )
            val layer1 = GUILayer(finalGUI)
            val layer2 = GUILayer(finalGUI)

            for (index in 0..53) {
                layer1.backgrounds.add(GUIBackground(index, sBK))
            }

            val ingredients: List<ItemStack> = recipe.ingredientList
            for (i in ingredients.indices) {
                layer2.backgrounds.add(GUIBackground(craftingLines[i + 1], ingredients[i]))
            }
            pageInventory = GUIFactory.produceInventory(finalGUI)
        }

        if (recipe is FurnaceRecipe) {
            val finalGUI = GUIFactory.createInventory(
                "Recipe for ${
                    recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }
                }", 45
            )
            val layer1 = GUILayer(finalGUI)
            val layer2 = GUILayer(finalGUI)

            for (index in 0..44) {
                layer1.backgrounds.add(GUIBackground(index, sBK))
            }

            layer2.backgrounds.add(GUIBackground(20, recipe.input))
            layer2.backgrounds.add(GUIBackground(24, recipe.result))
        }
    }
}