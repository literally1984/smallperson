package games.bnogocarft.bnogorpg.RecipeBook

import games.bnogocarft.bnogorpg.Utils.*
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
                print("${recipe.result.type}: $recipeLetter ${shapeItemStacks[recipeLetter]?.type}")
                if (recipeLetter == ' ') {
                    itemStackShape.add(ItemStack(Material.AIR))
                } else {
                    itemStackShape.add(shapeItemStacks[recipeLetter])
                }
            }

            // Creates the Inventory

            val gui = GUIFactory.createInventory("Recipe for ${recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }}", 54)
            val backgroundz = ArrayList<BackgroundItem>()
            for (index in 0..53) {
                backgroundz.add(BackgroundItem(StandardBackground, index))
            }
            val backgroundLayer = GUILayer(ArrayList(), backgroundz)
            var isShaped = true

            val buttons = ArrayList<GUIButton>()
            val backs = ArrayList<BackgroundItem>()
            for ((indexofItem, line) in craftingLines.withIndex()) {
                try {
                    if (itemStackShape[indexofItem] == null) {
                        backs.add(BackgroundItem(ItemStack(Material.AIR), line))
                        continue
                    }
                    val newMeta = Bukkit.getItemFactory().getItemMeta(itemStackShape[indexofItem]?.type)
                    val lore = ArrayList<String>()
                    lore.add("${ChatColor.YELLOW}Click this item to see its ${ChatColor.GREEN}crafting recipe")
                    lore.add("${ChatColor.YELLOW}if it has one.")
                    newMeta.lore = lore
                    itemStackShape[indexofItem]?.itemMeta = newMeta
                    buttons.add(GUIButton(itemStackShape[indexofItem]!!, line, ::openRecipePageFor))
                } catch (e: IndexOutOfBoundsException) {
                    backs.add(BackgroundItem(ItemStack(Material.AIR), line))
                }
            }

            backs.add(BackgroundItem(recipe.result, 24))
            for (index in 45..53) {
                backs.add(BackgroundItem(ItemStack(Material.WORKBENCH), index))
            }
            val buttonLayer = GUILayer(buttons, backs)

            gui.layers.add(backgroundLayer)
            gui.layers.add(buttonLayer)

            pageInventory = GUIFactory.produceInventory(gui)
        }

        if (recipe is ShapelessRecipe) {
            val finalGUI = GUIFactory.createInventory("Recipe for ${recipe.result.type.toString().replace("_", " ").lowercase().replaceFirstChar { it.uppercase() }}", 54)


            val l1backgroundz = ArrayList<BackgroundItem>()
            for (index in 0..53) {
                l1backgroundz.add(BackgroundItem(StandardBackground, index))
            }
            val layer1 = GUILayer(ArrayList(), l1backgroundz)

            val l2buttons = ArrayList<GUIButton>()
            val l2backgrounds = ArrayList<BackgroundItem>()

            var item = 0
            for (line in craftingLines) {
                try {
                    l2buttons.add(GUIButton(recipe.ingredientList[item], line, ::openRecipePageFor))
                } catch (e: IndexOutOfBoundsException) {
                    l2backgrounds.add(BackgroundItem(ItemStack(Material.AIR), line))
                }
                item++
            }

            val layer2 = GUILayer(l2buttons, l2backgrounds)

            finalGUI.layers.add(layer1)
            finalGUI.layers.add(layer2)
            pageInventory = GUIFactory.produceInventory(finalGUI)
        }
    }
}