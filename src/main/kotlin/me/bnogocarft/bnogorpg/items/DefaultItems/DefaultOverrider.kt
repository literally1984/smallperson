package me.bnogocarft.bnogorpg.items.DefaultItems

import org.bukkit.Bukkit

class DefaultOverrider {
    companion object {


        fun overrideRecipes() {
            val iterator = Bukkit.recipeIterator()
            while (iterator.hasNext()) {
                val recipe = iterator.next()
                if (recipe.result.type.toString().lowercase().contains("sword")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("axe")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("pickaxe")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("hoe")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("shovel")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("helmet")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("chestplate")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("leggings")) {
                    iterator.remove()
                    continue
                }
                if (recipe.result.type.toString().lowercase().contains("boots")) {
                    iterator.remove()
                    continue
                }
            }
            Diamond()
            Gold()
            Iron()
            Leather()
            Stone()
            Wood()
        }
    }
}