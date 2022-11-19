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

            val backgroundLayer = GUILayer()

            for (ind in 0..53) {
                backgroundLayer.backgrounds.add(GUIBackground(sBK, index))
            }
            val backgroundLayer2 = GUILayer()
            for (j in recipeShape.indices) {
                for (k in 0 until recipeShape[j].length) {
                    val item = ingredientMap[recipeShape[j].toCharArray()[k]] ?: continue
                    item.amount = 0
                    backgroundLayer2.backgrounds.add(GUIBackground(item, craftingLines[(j * 3 + k + 1) - 1]))
                }
            }

            gui.layers.add(backgroundLayer)
            gui.layers.add(backgroundLayer2)
        }

        if (recipe is ShapelessRecipe) {
            val layer1 = GUILayer()
            val layer2 = GUILayer()
            val finalGUI = GUIFactory.createInventory(
                "Recipe for ${
                    recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }
                }", 54
            )

            for (index in 0..53) {
                layer1.backgrounds.add(GUIBackground(sBK, index))
            }

            val ingredients: List<ItemStack> = recipe.ingredientList
            for (i in ingredients.indices) {
                layer2.backgrounds.add(GUIBackground(ingredients[i], craftingLines[i + 1]))
            }
            finalGUI.layers.add(layer1)
            finalGUI.layers.add(layer2)
            pageInventory = GUIFactory.produceInventory(finalGUI)
        }

        if (recipe is FurnaceRecipe) {
            val layer1 = GUILayer()
            val layer2 = GUILayer()
            val finalGUI = GUIFactory.createInventory(
                "Recipe for ${
                    recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }
                }", 45
            )

            for (index in 0..44) {
                layer1.backgrounds.add(GUIBackground(sBK, index))
            }

            layer2.backgrounds.add(GUIBackground(recipe.input, 20))
            layer2.backgrounds.add(GUIBackground(recipe.result, 24))
        }
    }
}