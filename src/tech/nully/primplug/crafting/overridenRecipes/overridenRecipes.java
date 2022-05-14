package tech.nully.primplug.crafting.overridenRecipes;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.inventory.Recipe;
import tech.nully.primplug.Main;

import java.util.Iterator;

public class overridenRecipes {

    private Iterator<Recipe> it = Bukkit.getServer().recipeIterator();
    public void overrideRecipes() {
        Recipe recipe;
        Main m = new Main();
        while(it.hasNext()) {
            recipe = it.next();
            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_HELMET) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_CHESTPLATE) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_LEGGINGS) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_BOOTS) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_HELMET) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_CHESTPLATE) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_LEGGINGS) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_BOOTS) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_SWORD) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_AXE) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_SWORD) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_AXE) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.STONE_SWORD) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.STONE_AXE) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.WOOD_SWORD) {
                it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.WOOD_AXE) {
                it.remove();
            }
        }
    }
}

