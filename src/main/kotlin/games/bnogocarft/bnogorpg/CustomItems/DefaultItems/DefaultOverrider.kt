package games.bnogocarft.bnogorpg.CustomItems.DefaultItems

import org.bukkit.Bukkit

class DefaultOverrider {
    companion object {


        fun overrideRecipes() {
            val iterator = Bukkit.recipeIterator()
            while (iterator.hasNext()) {
                val recipe = iterator.next()
                if (recipe.result.type.toString().lowercase().contains("sword")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("axe")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("pickaxe")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("hoe")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("shovel")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("helmet")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("chestplate")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("leggings")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("boots")) {
                    iterator.remove()
                    print("Removed recipe for ${recipe.result.type}")
                    continue
                }
            }
            Diamond()
            Gold()
            Iron()
            Leather()
            Wood()
        }
    }
}