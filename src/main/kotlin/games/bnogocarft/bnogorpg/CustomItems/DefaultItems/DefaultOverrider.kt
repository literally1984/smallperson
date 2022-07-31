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
                }
            }
            Diamond()
        }
    }
}