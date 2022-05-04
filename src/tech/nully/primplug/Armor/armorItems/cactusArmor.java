package tech.nully.primplug.Armor.armorItems;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.meta.LeatherArmorMeta;

public class cactusArmor {
    
    public static ItemStack Shard;
    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createCacShard();
        createCacHelm();
        createCacChestplate();
        createCacLeggings();
        createCacBoots();
    }
    // !  Obsidian
    private static void createCacShard() {
        // DEFINE THE META -------------
        ItemStack CacShard = new ItemStack(Material.CACTUS);
        ItemMeta CacShardMeta = CacShard.getItemMeta();


        // SET THE META ----------------
        CacShardMeta.setDisplayName("Cactus Shard");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.YELLOW + "Used to craft Cactus armor");
        Helmlore.add(ChatColor.YELLOW + "Very spikey!");
        CacShardMeta.setLore(Helmlore);

        CacShardMeta.addEnchant(Enchantment.THORNS, 1, false);

        CacShard.setItemMeta(CacShardMeta);
        Shard = CacShard;
    }


    //! Cac Helmet
    private static void createCacHelm() {
        // DEFINE THE META -------------
        ItemStack CacHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta CacHelmMeta = CacHelm.hasItemMeta() ? CacHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacHelm.getType());


        // SET THE META ----------------
        CacHelmMeta.setDisplayName("Cactus Helmet")
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("A very spikey armor piece, reflects");
        Helmlore.add("some damage back to the opponent when");
        Helmlore.add("they hit you if you have the set bonus");
        Helmlore.add("");
        Helmlore.add(ChatColor.GOLD + "Set Bonus:");
        Helmlore.add(ChatColor.GOLD + "Reflects 33% of the damage you take");
        Helmlore.add(ChatColor.GOLD + "back to your opponent");
        Helmlore.add("");
        Helmlore.add(ChatColor.BLUE + "Attributes------");
        Helmlore.add(ChatColor.BLUE + "Damage: 1");
        Helmlore.add(ChatColor.BLUE + "Defense: 8");
        Helmlore.add(ChatColor.BLUE + "Mana: 10");
        Helmlore.add(ChatColor.BLUE + "Stamina: 15");
        CacHelmMeta.setLore(Helmlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacHelmMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacHelm.setItemMeta(CacHelmMeta);
        helm = CacHelm;
    }

    // ! Cac Chesplate
    private static void createCacChestplate() {
        // DEFINE THE META -------------
        ItemStack CacChest = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta CacChestMeta = CacChest.hasItemMeta() ? CacChest.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacChest.getType());


        // SET THE META ----------------
        CacChestMeta.setDisplayName("Cactus Chestplate");
            // ChestLore
        List<String> Chestlore = new ArrayList<>();
        Chestlore.add("A very spikey armor piece, reflects");
        Chestlore.add("some damage back to the opponent when");
        Chestlore.add("they hit you if you have the set bonus");
        Chestlore.add("");
        Chestlore.add(ChatColor.GOLD + "Set Bonus:");
        Chestlore.add(ChatColor.GOLD + "Reflects 33% of the damage you take");
        Chestlore.add(ChatColor.GOLD + "back to your opponent");
        Chestlore.add("");
        Chestlore.add(ChatColor.BLUE + "Attributes------");
        Chestlore.add(ChatColor.BLUE + "Damage: 3");
        Chestlore.add(ChatColor.BLUE + "Defense: 26");
        Chestlore.add(ChatColor.BLUE + "Mana: 20");
        Chestlore.add(ChatColor.BLUE + "Stamina: 30");
        CacChestMeta.setLore(Chestlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacChestMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacChest.setItemMeta(CacChestMeta);
        ches = CacChest;
    }


    // ! Cac Leggings
    private static void createCacLeggings() {
        // DEFINE THE META -------------
        ItemStack PLeg = new ItemStack(Material.LEATHER_LEGGINGS);
        ItemMeta PLegMeta = PLeg.hasItemMeta() ? PLeg.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PLeg.getType());


        // SET THE META ----------------
        PLegMeta.setDisplayName("Cac Leggings");
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

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) PLegMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        PLeg.setItemMeta(PLegMeta);
        leg = PLeg;
    }
    // ! Cac Boots
    private static void createCacBoots() {
        // DEFINE THE META -------------
        ItemStack CacBoots = new ItemStack(Material.LEATHER_BOOTS);
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

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacBootsMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacBoots.setItemMeta(CacBootsMeta);
        boots = CacBoots;
    }
}