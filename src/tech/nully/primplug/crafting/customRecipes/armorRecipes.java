package tech.nully.primplug.crafting.customRecipes;

import com.avaje.ebean.enhance.ant.MainTransform;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.inventory.ShapedRecipe;
import org.bukkit.material.MaterialData;

import javafx.scene.shape.Shape;
import javafx.scene.shape.Sphere;
import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.Armor.armorItems.demigodArmor;
import tech.nully.primplug.Armor.armorItems.hardenedDiamond;
import tech.nully.primplug.Armor.armorItems.lapisArmor;
import tech.nully.primplug.Armor.armorItems.platedArmor;
import tech.nully.primplug.Armor.armorItems.reaperArmor;
import tech.nully.primplug.Armor.armorItems.undeadArmor;
import tech.nully.primplug.Armor.armorItems.wizardRobes;
import tech.nully.primplug.Tools.zeusBolt;
import tech.nully.primplug.crafting.overridenRecipes.overridenRecipeItems;
import tech.nully.primplug.playerStatManagers.magicDamageManager.magicDamageManager;

public class armorRecipes {

    // TODO: ADD THE NEW ARMOR ITEMS CRAFTING RECIPES -BigZ

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

// TODO: add recipe for new armors -BigZ

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
        ShapedRecipe drakonhelm = new ShapedRecipe(Drakon.helm);

        drakonhelm.shape("^^^", "^ ^", "   ");
        drakonhelm.setIngredient('^', new MaterialData(Material.BONE, (byte) 1));
    }

    private static void demihelmrecipe() {
        ShapedRecipe demihelm = new ShapedRecipe(demigodArmor.helm);

        demihelm.shape("^^^", "^ ^", "   ");
        demihelm.setIngredient('^', new MaterialData(Material.GOLD_ORE, (byte) 1));
    }

    private static void wizchesrecipe() {
        ShapedRecipe wizches = new ShapedRecipe(wizardRobes.chestplate);

        wizches.shape("^ ^", "^^^","^^^");
        wizches.setIngredient('^', new MaterialData(Material.SULPHUR, (byte) 1));
    }

    private static void undeadchesrecipe() {
        ShapedRecipe undeadches = new ShapedRecipe(undeadArmor.chestplate);

        undeadches.shape("^ ^", "^^^","^^^");
        undeadches.setIngredient('^', new MaterialData(Material.ROTTEN_FLESH, (byte) 1));

    }

    private static void reaperchesrecipe() {
        ShapedRecipe reaperches = new ShapedRecipe(reaperArmor.chestplate);

        reaperches.shape("^ ^", "^^^","^^^");
        reaperches.setIngredient('^', new MaterialData(Material.IRON_SWORD, (byte) 1));
    }

    private static void platedchesrecipe() {
        ShapedRecipe platedches = new ShapedRecipe(platedArmor.chestplate);

        platedches.shape("^ ^", "^^^","^^^");
        platedches.setIngredient('^', new MaterialData(Material.LAPIS_ORE, (byte) 1));
    }

    private static void lapischesrecipe() {
        ShapedRecipe lapisches = new ShapedRecipe(lapisArmor.chestplate);

        lapisches.shape("^ ^", "^^^","^^^");
        lapisches.setIngredient('^', new MaterialData(Material.LAPIS_BLOCK, (byte) 1));
        Bukkit.getServer().addRecipe(lapisches);
    }

    private static void hdiachesrecipe() {
        ShapedRecipe hdiaches = new ShapedRecipe(hardenedDiamond.ches);

        hdiaches.shape("^ ^", "^^^","^^^");
        hdiaches.setIngredient('^', new MaterialData(Material.DIAMOND_BLOCK, (byte) 1));
        Bukkit.getServer().addRecipe(hdiaches);
    }

    private static void drakonchesrecipe() {
        ShapedRecipe drakonches = new ShapedRecipe(Drakon.ches);

        drakonches.shape("^ ^", "^^^","^^^");
        drakonches.setIngredient('^', new MaterialData(Material.BONE, (byte) 1));
        Bukkit.getServer().addRecipe(drakonches);
    }

    private static void demichesrecipe() {
        ShapedRecipe demiches = new ShapedRecipe(demigodArmor.ches);

        demiches.shape("^ ^", "^^^","^^^");
        demiches.setIngredient('^', new MaterialData(Material.GOLD_ORE, (byte) 1)); 
        Bukkit.getServer().addRecipe(demiches);
    }

    private static void cactusHelmRecipe() {
        ShapedRecipe cacHelm = new ShapedRecipe(cactusArmor.helm);

        cacHelm.shape("^^^", "^ ^", "   ");
        cacHelm.setIngredient('^', new MaterialData(Material.CACTUS, (byte) 1));
        Bukkit.getServer().addRecipe(cacHelm);
    }

    private static void PetheriteHelmRecipe() {
        ShapedRecipe PHelm = new ShapedRecipe(PetheriteSet.helm);

        PHelm.shape("^^^", "^ ^", "   ");
        PHelm.setIngredient('^', new MaterialData(Material.OBSIDIAN, (byte) 1));
        Bukkit.getServer().addRecipe(PHelm);
    }

    private static void diaHelmRecipe() {
        ShapedRecipe diaHelm = new ShapedRecipe(overridenRecipeItems.diaHelm);

        diaHelm.shape("^^^", "^ ^", "   ");
        diaHelm.setIngredient('^', Material.DIAMOND);
        Bukkit.getServer().addRecipe(diaHelm);
    }

    private static void ironHelmRecipe() {
        ShapedRecipe ironHelm = new ShapedRecipe(overridenRecipeItems.ironBoots);

        ironHelm.shape("^^^", "^ ^", "   ");
        ironHelm.setIngredient('^', Material.IRON_INGOT);
        Bukkit.getServer().addRecipe(ironHelm);
        // TODO: fix the rest of these recipes
    }



    private static void cactusChesRecipe() {
        ShapedRecipe cacChes = new ShapedRecipe(cactusArmor.ches);

        cacChes.shape("^ ^", "^^^", "^^^");
        cacChes.setIngredient('^', new MaterialData(Material.CACTUS, (byte) 1));
        Bukkit.getServer().addRecipe(cacChes);
    }

    private static void PetheriteChesRecipe() {
        ShapedRecipe PChes = new ShapedRecipe(PetheriteSet.ches);

        PChes.shape("^ ^", "^^^", "^^^");
        PChes.setIngredient('^', new MaterialData(Material.OBSIDIAN, (byte) 1));
        Bukkit.getServer().addRecipe(PChes);
    }

    private static void diaChesRecipe() {
        ShapedRecipe diaChes = new ShapedRecipe(overridenRecipeItems.diaChes);

        diaChes.shape("^ ^", "^^^", "^^^");
        diaChes.setIngredient('^', Material.DIAMOND);
        Bukkit.getServer().addRecipe(diaChes);
    }

    private static void ironChesRecipe() {
        ShapedRecipe ironChes = new ShapedRecipe(overridenRecipeItems.ironChes);

        ironChes.shape("^ ^", "^^^", "^^^");
        ironChes.setIngredient('^', Material.IRON_INGOT);
        Bukkit.getServer().addRecipe(ironChes);
    }



    private static void cactusLegRecipe() {
        ShapedRecipe cacLeg = new ShapedRecipe(cactusArmor.leg);

        cacLeg.shape("^^^", "^ ^", "^ ^");
        cacLeg.setIngredient('^', new MaterialData(Material.CACTUS, (byte) 1));
        Bukkit.getServer().addRecipe(cacLeg);
    }

    private static void PetheriteLegRecipe() {
        ShapedRecipe PLeg = new ShapedRecipe(PetheriteSet.leg);

        PLeg.shape("^^^", "^ ^", "^ ^");
        PLeg.setIngredient('^', new MaterialData(Material.OBSIDIAN, (byte) 1));
        Bukkit.getServer().addRecipe(PLeg);
    }

    private static void diaLegRecipe() {
        ShapedRecipe diaLeg = new ShapedRecipe(overridenRecipeItems.diaLeg);

        diaLeg.shape("^^^", "^ ^", "^ ^");
        diaLeg.setIngredient('^', Material.DIAMOND);
        Bukkit.getServer().addRecipe(diaLeg);
    }

    private static void ironLegRecipe() {
        ShapedRecipe ironLeg = new ShapedRecipe(overridenRecipeItems.ironLeg);

        ironLeg.shape("^^^", "^ ^", "^ ^");
        ironLeg.setIngredient('^', Material.IRON_INGOT);
        Bukkit.getServer().addRecipe(ironLeg);
    }



    private static void cactusBootsRecipe() {
        ShapedRecipe cacBoots = new ShapedRecipe(cactusArmor.boots);

        cacBoots.shape("   ", "^ ^", "^ ^");
        cacBoots.setIngredient('^', new MaterialData(Material.CACTUS, (byte) 1));
        Bukkit.getServer().addRecipe(cacBoots);
    }

    private static void PetheriteBootsRecipe() {
        ShapedRecipe PBoots = new ShapedRecipe(PetheriteSet.boots);

        PBoots.shape("   ", "^ ^", "^ ^");
        PBoots.setIngredient('^', new MaterialData(Material.OBSIDIAN, (byte) 1));
        Bukkit.getServer().addRecipe(PBoots);
    }

    private static void diaBootsRecipe() {
        ShapedRecipe diaBoots = new ShapedRecipe(overridenRecipeItems.diaBoots);

        diaBoots.shape("   ", "^ ^", "^ ^");
        diaBoots.setIngredient('^', Material.DIAMOND);
        Bukkit.getServer().addRecipe(diaBoots);
    }

    private static void ironBootsRecipe() {
        ShapedRecipe ironBoots = new ShapedRecipe(overridenRecipeItems.ironBoots);

        ironBoots.shape("   ", "^ ^", "^ ^");
        ironBoots.setIngredient('^', Material.IRON_INGOT);
        Bukkit.getServer().addRecipe(ironBoots);
    }



    
    
    private static void zeusBoltRecipe() {
        ShapedRecipe ironBoots = new ShapedRecipe(zeusBolt.zeusThunderBolt);

        ironBoots.shape("   ", "^ ^", "^ ^");
        ironBoots.setIngredient('^', Material.FIREBALL);
        Bukkit.getServer().addRecipe(ironBoots);
    }
}
