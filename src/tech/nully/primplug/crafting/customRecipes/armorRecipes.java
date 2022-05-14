package tech.nully.primplug.crafting.customRecipes;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.inventory.ShapedRecipe;

import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.crafting.overridenRecipes.overridenRecipeItems;

public class armorRecipes {

    // TODO: ADD THE NEW ARMOR ITEMS CRAFTING RECIPES

    public static void init() {
        cactusChesRecipe();
        PetheriteChesRecipe();
        diaChesRecipe();
        ironChesRecipe();
        demichesrecipe();
        drakonchesrecipe();
        hdiachesrecipe();
        lapischesrecipe();
        platedchesrecipe();
        reaperchesrecipe();
        undeadchesrecipe();
        wizchesrecipe();


        cactusHelmRecipe();
        PetheriteHelmRecipe();
        diaHelmRecipe();
        ironHelmRecipe();
        demihelmrecipe();
        drakonhelmrecipe();
        hdiahelmrecipe();
        lapishelmrecipe();
        platedhelmrecipe();
        reaperhelmrecipe();
        undeadhelmrecipe();
        wizhatrecipe();


        cactusLegRecipe();
        PetheriteLegRecipe();
        diaLegRecipe();
        ironLegRecipe();
        demiLegrecipe();
        drakonlegrecipe();
        hdialegrecipe();
        lapislegrecipe();
        platedlegrecipe();
        reaperlegrecipe();
        undeadlegrecipe();
        wizlegrecipe();


        cactusBootsRecipe();
        PetheriteBootsRecipe();
        diaBootsRecipe();
        ironBootsRecipe();
        demibootsrecipe();
        drakonbootsrecipe();
        hdiabootsrecipe();
        lapisbootsrecipe();
        platedbootsrecipe();
        reaperbootsrecipe();
        undeadbootsrecipe();
        wizbootsrecipe();
    }

// TODO: add recipe for new armors

   private static void wizbootsrecipe() {
    }

private static void undeadbootsrecipe() {
    }

private static void reaperbootsrecipe() {
    }

private static void platedbootsrecipe() {
    }

private static void lapisbootsrecipe() {
    }

private static void hdiabootsrecipe() {
    }

private static void drakonbootsrecipe() {
    }

private static void demibootsrecipe() {
    }

private static void wizlegrecipe() {
    }

private static void undeadlegrecipe() {
    }

private static void reaperlegrecipe() {
    }

private static void platedlegrecipe() {
    }

private static void lapislegrecipe() {
    }

private static void hdialegrecipe() {
    }

private static void drakonlegrecipe() {
    }

private static void demiLegrecipe() {
    }

private static void wizhatrecipe() {
    }

private static void undeadhelmrecipe() {
    }

private static void reaperhelmrecipe() {
    }

private static void platedhelmrecipe() {
    }

 private static void lapishelmrecipe() {
    }

    private static void hdiahelmrecipe() {
    }

    private static void drakonhelmrecipe() {
    }

    private static void demihelmrecipe() {
    }

    private static void wizchesrecipe() {
    }

    private static void undeadchesrecipe() {
    }

    private static void reaperchesrecipe() {
    }

    private static void platedchesrecipe() {
    }

    private static void lapischesrecipe() {
    }

    private static void hdiachesrecipe() {
    }

    private static void drakonchesrecipe() {
    }

    private static void demichesrecipe() {
    }

    private static void cactusHelmRecipe() {
        ShapedRecipe cacHelm = new ShapedRecipe(cactusArmor.helm);

        cacHelm.setIngredient('^', cactusArmor.Shard.getData());
        cacHelm.shape("^^^", "^ ^", "   ");
        Bukkit.getServer().addRecipe(cacHelm);
    }

    private static void PetheriteHelmRecipe() {
        ShapedRecipe PHelm = new ShapedRecipe(PetheriteSet.helm);

        PHelm.setIngredient('^', PetheriteSet.obby.getData());
        PHelm.shape("^^^", "^ ^", "   ");
    }

    private static void diaHelmRecipe() {
        ShapedRecipe diaHelm = new ShapedRecipe(overridenRecipeItems.diaHelm);

        diaHelm.setIngredient('^', Material.DIAMOND);
        diaHelm.shape("^^^", "^ ^", "   ");
        Bukkit.getServer().addRecipe(diaHelm);
    }

    private static void ironHelmRecipe() {
        ShapedRecipe ironHelm = new ShapedRecipe(overridenRecipeItems.ironBoots);

        ironHelm.setIngredient('^', Material.IRON_INGOT);
        ironHelm.shape("^^^", "^ ^", "   ");
        Bukkit.getServer().addRecipe(ironHelm);
    }



    private static void cactusChesRecipe() {
        ShapedRecipe cacChes = new ShapedRecipe(cactusArmor.ches);

        cacChes.setIngredient('^', cactusArmor.Shard.getData());
        cacChes.shape("^ ^", "^^^", "^^^");
        Bukkit.getServer().addRecipe(cacChes);
    }

    private static void PetheriteChesRecipe() {
        ShapedRecipe PChes = new ShapedRecipe(PetheriteSet.ches);

        PChes.setIngredient('^', PetheriteSet.obby.getData());
        PChes.shape("^ ^", "^^^", "^^^");
        Bukkit.getServer().addRecipe(PChes);
    }

    private static void diaChesRecipe() {
        ShapedRecipe diaChes = new ShapedRecipe(overridenRecipeItems.diaChes);

        diaChes.setIngredient('^', Material.DIAMOND);
        diaChes.shape("^ ^", "^^^", "^^^");
        Bukkit.getServer().addRecipe(diaChes);
    }

    private static void ironChesRecipe() {
        ShapedRecipe ironChes = new ShapedRecipe(overridenRecipeItems.ironChes);

        ironChes.setIngredient('^', Material.IRON_INGOT);
        ironChes.shape("^ ^", "^^^", "^^^");
        Bukkit.getServer().addRecipe(ironChes);
    }



    private static void cactusLegRecipe() {
        ShapedRecipe cacLeg = new ShapedRecipe(cactusArmor.leg);

        cacLeg.setIngredient('^', cactusArmor.Shard.getData());
        cacLeg.shape("^^^", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(cacLeg);
    }

    private static void PetheriteLegRecipe() {
        ShapedRecipe PLeg = new ShapedRecipe(PetheriteSet.leg);

        PLeg.setIngredient('^', PetheriteSet.obby.getData());
        PLeg.shape("^^^", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(PLeg);
    }

    private static void diaLegRecipe() {
        ShapedRecipe diaLeg = new ShapedRecipe(overridenRecipeItems.diaLeg);

        diaLeg.setIngredient('^', Material.DIAMOND);
        diaLeg.shape("^^^", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(diaLeg);
    }

    private static void ironLegRecipe() {
        ShapedRecipe ironLeg = new ShapedRecipe(overridenRecipeItems.ironLeg);

        ironLeg.setIngredient('^', Material.IRON_INGOT);
        ironLeg.shape("^^^", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(ironLeg);
    }



    private static void cactusBootsRecipe() {
        ShapedRecipe cacBoots = new ShapedRecipe(cactusArmor.boots);

        cacBoots.setIngredient('^', cactusArmor.Shard.getData());
        cacBoots.shape("   ", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(cacBoots);
    }

    private static void PetheriteBootsRecipe() {
        ShapedRecipe PBoots = new ShapedRecipe(PetheriteSet.boots);

        PBoots.setIngredient('^', PetheriteSet.obby.getData());
        PBoots.shape("   ", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(PBoots);
    }

    private static void diaBootsRecipe() {
        ShapedRecipe diaBoots = new ShapedRecipe(overridenRecipeItems.diaBoots);

        diaBoots.setIngredient('^', Material.DIAMOND);
        diaBoots.shape("   ", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(diaBoots);
    }

    private static void ironBootsRecipe() {
        ShapedRecipe ironBoots = new ShapedRecipe(overridenRecipeItems.ironBoots);

        ironBoots.setIngredient('^', Material.IRON_INGOT);
        ironBoots.shape("   ", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(ironBoots);
    }



    
    
    private static void zeusBoltRecipe() {
        ShapedRecipe ironBoots = new ShapedRecipe(overridenRecipeItems.ironBoots);

        ironBoots.setIngredient('^', Material.IRON_INGOT);
        ironBoots.shape("   ", "^ ^", "^ ^");
        Bukkit.getServer().addRecipe(ironBoots);
    }
}
