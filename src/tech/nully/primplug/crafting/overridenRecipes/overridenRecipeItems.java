package tech.nully.primplug.crafting.overridenRecipes;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class overridenRecipeItems {
    
    public static ItemStack diaChes;
    public static ItemStack diaHelm;
    public static ItemStack diaLeg;
    public static ItemStack diaBoots;
    public static ItemStack diaSword;
    public static ItemStack diaAxe;
    public static ItemStack ironHelm;
    public static ItemStack ironChes;
    public static ItemStack ironLeg;
    public static ItemStack ironBoots;
    public static ItemStack ironSword;
    public static ItemStack stoneAxe;
    public static ItemStack stoneSword;
    public static ItemStack woodAxe;
    public static ItemStack woodSword;

    public static void init() {
        createDiaHelm();
        createDiaChestplate();
    }


    private static void createDiaHelm() {
        // DEFINE THE META -------------
        ItemStack DiaHelm = new ItemStack(Material.DIAMOND_HELMET);
        ItemMeta DiaHelmMeta = DiaHelm.getItemMeta();


        // SET THE META ----------------
        DiaHelmMeta.setDisplayName("Diamond Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("The good ol' vanilla diamond armor!");
        Helmlore.add("");
        Helmlore.add(ChatColor.BLUE + "Attributes------");
        Helmlore.add(ChatColor.BLUE + "Damage: 1");
        Helmlore.add(ChatColor.BLUE + "Defense: 13");
        Helmlore.add(ChatColor.BLUE + "Mana: 15");
        Helmlore.add(ChatColor.BLUE + "Stamina: 15");
        Helmlore.add("");
        Helmlore.add(ChatColor.BLUE + "" + ChatColor.BOLD + "RARE");
        DiaHelmMeta.setLore(Helmlore);

        DiaHelm.setItemMeta(DiaHelmMeta);
        diaHelm = DiaHelm;
    }

    // ! Cac Chesplate
    private static void createDiaChestplate() {
        // DEFINE THE META -------------
        ItemStack DiaChest = new ItemStack(Material.DIAMOND_CHESTPLATE);
        ItemMeta DiaChestMeta = DiaChest.hasItemMeta() ? DiaChest.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DiaChest.getType());


        // SET THE META ----------------
        DiaChestMeta.setDisplayName("Diamond Chestplate");
            // ChestLore
        List<String> Chestlore = new ArrayList<>();
        Chestlore.add(ChatColor.LIGHT_PURPLE + "The good ol' vanilla diamond armor!");
        Chestlore.add("");
        Chestlore.add(ChatColor.BLUE + "Attributes------");
        Chestlore.add(ChatColor.BLUE + "Damage: 1");
        Chestlore.add(ChatColor.BLUE + "Defense: 13");
        Chestlore.add(ChatColor.BLUE + "Mana: 15");
        Chestlore.add(ChatColor.BLUE + "Stamina: 15");
        Chestlore.add("");
        Chestlore.add(ChatColor.BLUE + "" + ChatColor.BOLD + "RARE");
        DiaChestMeta.setLore(Chestlore);

        // DIAMOND ARMOR META
        DiaChest.setItemMeta(DiaChestMeta);
        diaChes = DiaChest;
    }


    // ! Cac Leggings
    private static void createCacLeggings() {
        // DEFINE THE META -------------
        ItemStack PLeg = new ItemStack(Material.DIAMOND_LEGGINGS);
        ItemMeta PLegMeta = PLeg.hasItemMeta() ? PLeg.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PLeg.getType());


        // SET THE META ----------------
        PLegMeta.setDisplayName("Cactus Leggings");
            // LegLore
        List<String> Leglore = new ArrayList<>();
        Leglore.add("A very spikey armor piece, reflects");
        Leglore.add("some damage back to the opponent when");
        Leglore.add("they hit you if you have the set bonus");
        Leglore.add("");
        Leglore.add(ChatColor.GOLD + "Set Bonus:");
        Leglore.add(ChatColor.GOLD + "Reflects 33% of the damage you take");
        Leglore.add(ChatColor.GOLD + "back to your opponent");
        Leglore.add("");
        Leglore.add(ChatColor.BLUE + "Attributes------");
        Leglore.add(ChatColor.BLUE + "Damage: 2");
        Leglore.add(ChatColor.BLUE + "Defense: 21");
        Leglore.add(ChatColor.BLUE + "Mana: 15");
        Leglore.add(ChatColor.BLUE + "Stamina: 25");
        PLegMeta.setLore(Leglore);



        PLeg.setItemMeta(PLegMeta);
        diaLeg = PLeg;
    }
    // ! Cac Boots
    private static void createCacBoots() {
        // DEFINE THE META -------------
        ItemStack CacBoots = new ItemStack(Material.DIAMOND_BOOTS);
        ItemMeta CacBootsMeta = CacBoots.hasItemMeta() ? CacBoots.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacBoots.getType());


        // SET THE META ----------------
        CacBootsMeta.setDisplayName("Cac Boots");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add("A very spikey armor piece, reflects");
        Bootslore.add("some damage back to the opponent when");
        Bootslore.add("they hit you if you have the set bonus");
        Bootslore.add("");
        Bootslore.add(ChatColor.GOLD + "Set Bonus:");
        Bootslore.add(ChatColor.GOLD + "Reflects 33% of the damage you take");
        Bootslore.add(ChatColor.GOLD + "back to your opponent");
        Bootslore.add("");
        Bootslore.add(ChatColor.BLUE + "Attributes------");
        Bootslore.add(ChatColor.BLUE + "Damage: 1");
        Bootslore.add(ChatColor.BLUE + "Defense: 8");
        Bootslore.add(ChatColor.BLUE + "Mana: 7");
        Bootslore.add(ChatColor.BLUE + "Stamina: 13");
        CacBootsMeta.setLore(Bootslore);


        CacBoots.setItemMeta(CacBootsMeta);
        diaBoots = CacBoots;
    }
}