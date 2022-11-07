package me.bnogocarft.bnogorpg.recipe

import me.bnogocarft.bnogorpg.utils.*
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.*

data class RecipePage(val recipe: Recipe) {
    private val craftingLines = arrayOf(10, 11, 12, 19, 20, 21, 28, 29, 30)
    var pageInventory: Inventory? = null

    init {
        if (recipe is ShapedRecipe) {
            val shapeRows = recipe.shape //The default String array of a ShapedRecipe
            val shapeIndividual = ArrayList<Char>()
            val itemStackShape = ArrayList<ItemStack?>()
            val shapeItemStacks = recipe.ingredientMap

            // Converts the 3 strings that represent rows into individual chars stored int shapeIndividual
            for (charRow in shapeRows) {
                for (char in charRow.toCharArray()) {
                    shapeIndividual.add(char)
                }
            }

            for (recipeLetter in shapeIndividual) {
                if (recipeLetter == ' ') {
                    itemStackShape.add(ItemStack(Material.AIR))
                } else {
                    itemStackShape.add(shapeItemStacks[recipeLetter])
                }
            }

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

            for (index in 0..53) {
                backgroundLayer.backgrounds.add(GUIBackground(sBK, index))
            }

            for ((indexofItem, line) in craftingLines.withIndex()) {
                try {
                    if (itemStackShape[indexofItem] == null) {
                        backgroundLayer.backgrounds.add(GUIBackground(ItemStack(Material.AIR), line))
                        continue
                    }
                    val newMeta = Bukkit.getItemFactory().getItemMeta(itemStackShape[indexofItem]?.type)
                    val lore = ArrayList<String>()
                    lore.add("${ChatColor.YELLOW}Click this item to see its ${ChatColor.GREEN}crafting recipe")
                    lore.add("${ChatColor.YELLOW}if it has one.")
                    newMeta.lore = lore
                    itemStackShape[indexofItem]?.itemMeta = newMeta
                    backgroundLayer.buttons.add(GUIButton(itemStackShape[indexofItem]!!, line, ::openRecipePageFor))
                } catch (e: IndexOutOfBoundsException) {
                    backgroundLayer.backgrounds.add(GUIBackground(ItemStack(Material.AIR), line))
                }
            }

            backgroundLayer.backgrounds.add(GUIBackground(recipe.result, 24))
            for (index in 45..53) {
                backgroundLayer.backgrounds.add(GUIBackground(ItemStack(Material.WORKBENCH), index))
            }
            val buttonLayer = GUILayer()

            gui.layers.add(backgroundLayer)
            gui.layers.add(buttonLayer)

            pageInventory = GUIFactory.produceInventory(gui)
        }

        if (recipe is ShapelessRecipe) {
            val layer1 = GUILayer()
            val finalGUI = GUIFactory.createInventory(
                "Recipe for ${
                    recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }
                }", 54
            )

            for (index in 0..53) {
                layer1.backgrounds.add(GUIBackground(sBK, index))
            }

            for ((item, line) in craftingLines.withIndex()) {
                try {
                    layer1.buttons.add(GUIButton(recipe.ingredientList[item], line, ::openRecipePageFor))
                } catch (e: IndexOutOfBoundsException) {
                    layer1.backgrounds.add(GUIBackground(ItemStack(Material.AIR), line))
                }
            }

            finalGUI.layers.add(layer1)
            pageInventory = GUIFactory.produceInventory(finalGUI)
        }
    }
}