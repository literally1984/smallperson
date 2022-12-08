package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.items.armorSets.Leather
import me.bnogocarft.bnogorpg.items.handSets.Stone
import me.bnogocarft.bnogorpg.items.handSets.Wood
import me.bnogocarft.bnogorpg.items.sets.Diamond
import me.bnogocarft.bnogorpg.items.sets.Gold
import me.bnogocarft.bnogorpg.items.sets.Iron
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
            Diamond().init(Diamond::class)
            Gold().init(Gold::class)
            Iron().init(Iron::class)
            Leather()
            Stone()
            Wood()
        }
    }
}