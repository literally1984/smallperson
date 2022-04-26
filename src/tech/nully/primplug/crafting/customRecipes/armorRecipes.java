package tech.nully.primplug.crafting.customRecipes;

import org.bukkit.inventory.ShapedRecipe;

import tech.nully.primplug.Main;
import tech.nully.primplug.Armor.armorItems.cactusArmor;

public class armorRecipes {
    public static ShapedRecipe cacHelm;
    
    public void init() {
        Main m = new Main();
        m.getServer().addRecipe(cacHelm);
    }

    public void cactusHelmRecipe() {
        cacHelm = new ShapedRecipe(cactusArmor.helm);

        cacHelm.setIngredient('^', cactusArmor.Shard.getData());
        cacHelm.shape("^*^", "^^^", "^^^");
    }
}
