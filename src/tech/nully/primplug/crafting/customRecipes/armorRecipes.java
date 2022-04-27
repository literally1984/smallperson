package tech.nully.primplug.crafting.customRecipes;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.inventory.ShapedRecipe;

import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.crafting.overridenRecipes.overridenRecipeItems;

public class armorRecipes {
    public static ShapedRecipe cacches;
    
    public static void init() {
        cactusChesRecipe();
        PetheriteChesRecipe();
        diaChesRecipe();
        ironChesRecipe();
    }

    private static void cactusChesRecipe() {
        cacches = new ShapedRecipe(cactusArmor.ches);

        cacches.setIngredient('^', cactusArmor.Shard.getData());
        cacches.shape("^ ^", "^^^", "^^^");
        Bukkit.getServer().addRecipe(cacches);
    }

    private static void PetheriteChesRecipe() {
        cacches = new ShapedRecipe(PetheriteSet.ches);

        cacches.setIngredient('^', cactusArmor.Shard.getData());
        cacches.shape("^ ^", "^^^", "^^^");
    }

    private static void diaChesRecipe() {
        cacches = new ShapedRecipe(overridenRecipeItems.diaChes);

        cacches.setIngredient('^', Material.DIAMOND);
        cacches.shape("^ ^", "^^^", "^^^");
    }

    private static void ironChesRecipe() {
        cacches = new ShapedRecipe(cactusArmor.ches);

        cacches.setIngredient('^', cactusArmor.Shard.getData());
        cacches.shape("^ ^", "^^^", "^^^");
    }
}
