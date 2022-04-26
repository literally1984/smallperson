package tech.nully.primplug.crafting.overridenRecipes;

import org.bukkit.Material;
import org.bukkit.inventory.Recipe;

import tech.nully.primplug.Main;

public class overridenRecipes {
    public void overrideRecipes() {
        Recipe recipe;
        Main m = new Main();
        while(m.it.hasNext()) {
            recipe = m.it.next();
            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_HELMET) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_CHESTPLATE) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_LEGGINGS) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_BOOTS) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_HELMET) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_CHESTPLATE) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_LEGGINGS) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_BOOTS) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_SWORD) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.DIAMOND_AXE) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_SWORD) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.IRON_AXE) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.STONE_SWORD) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.STONE_AXE) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.WOOD_SWORD) {
                m.it.remove();
            }

            if (recipe != null && recipe.getResult().getType() == Material.WOOD_AXE) {
                m.it.remove();
            }
        }
    }
}

