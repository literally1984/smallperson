package tech.nully.primplug.Armor.armorItems;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;


public class demigodArmor {
    
    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;
    public static ItemStack shard;

    public static void init() {
        createDemiShard();
        createDemiHelm();
        createDemiChestplate();
        createDemiLeggings();
        createDemiBoots();
    }
    // !  Obsidian
    private static baseAttributesAdder a = new baseAttributesAdder();

    private static void createDemiShard() {
        // DEFINE THE META -------------
        ItemStack DemiShard = new ItemStack(Material.MAGMA_CREAM);
        ItemMeta DemiShardMeta = DemiShard.getItemMeta();
        DemiShardMeta.setDisplayName("Demigod Shard");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.YELLOW + "Used to craft Demigod Armor");
        Helmlore.add(ChatColor.YELLOW + "It seems to glow when you touch it...");
        DemiShardMeta.setLore(Helmlore);

        DemiShardMeta.addEnchant(Enchantment.DAMAGE_ALL, 3, true);

        DemiShard.setItemMeta(DemiShardMeta);
        ItemStack Shard = DemiShard;
        shard = Shard;
    }

    //! Demigod Helmet
    private static void createDemiHelm() {
        // DEFINE THE META -------------
        ItemStack DemiHelm = new ItemStack(Material.GOLD_HELMET);
        ItemMeta DemiHelmMeta = DemiHelm.hasItemMeta() ? DemiHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DemiHelm.getType());
        // SET THE META ----------------
        DemiHelmMeta.setDisplayName("Demigod Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.RED + "---Attributes---");
        Helmlore.add(ChatColor.BLUE + "Damage: 8");
        Helmlore.add(ChatColor.BLUE + "Defense: 7");
        Helmlore.add(ChatColor.BLUE + "Mana: 19");
        Helmlore.add(ChatColor.BLUE + "Stamina: 20");
        a.addAttributes(DemiHelm, 3, 13, 10, 15);
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "Set Bonus I: Zeus' Wrath");
        Helmlore.add(ChatColor.GRAY + "" +ChatColor.ITALIC + "Shift and then jump to summon");
        Helmlore.add("summon the fury of the thunder god");
        Helmlore.add("and create a powerful explosion at");
        Helmlore.add("your location!");
        Helmlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Set Bonus II: Godly");
        Helmlore.add("Passively grants the wearer +50%");
        Helmlore.add("walk speed and Jump boost I");
        Helmlore.add("Walk with the gods!");
        Helmlore.add("-Z");
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "LEGENDARY");
        Helmlore.add("");
        DemiHelmMeta.setLore(Helmlore);


        DemiHelm.setItemMeta(DemiHelmMeta);
        helm = DemiHelm;
    }
    // ! Demigod Chesplate
    private static void createDemiChestplate() {
        // DEFINE THE META -------------
        ItemStack DemiChest = new ItemStack(Material.DIAMOND_CHESTPLATE);
        ItemMeta DemiChestMeta = DemiChest.hasItemMeta() ? DemiChest.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DemiChest.getType());


        // SET THE META ----------------
        DemiChestMeta.setDisplayName("Demigod Chestplate");
            // ChestLore
        List<String> Chestlore = new ArrayList<>();
        Chestlore.add(ChatColor.RED + "Attributes------");
        Chestlore.add(ChatColor.BLUE + "Damage: 8");
        Chestlore.add(ChatColor.BLUE + "Defense: 26");
        Chestlore.add(ChatColor.BLUE + "Damage: 3");
        Chestlore.add(ChatColor.BLUE + "Defense: 31");
        Chestlore.add(ChatColor.BLUE + "Mana: 20");
        Chestlore.add(ChatColor.BLUE + "Stamina: 30");
        Chestlore.add("");
        Chestlore.add("Armor gifted to a mortal from above.");
        Chestlore.add("It is said that whoever wears this has the powerof a god!");
        Chestlore.add("-Z");
        Chestlore.add("");
        Chestlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Set Bonus: Zeus' Wrath");
        Chestlore.add("Shift and jump at the same time to summon the fury of the gods!");
        Chestlore.add("");
        Chestlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Godly");
        Chestlore.add("When equipped, gain 50% movement speed and 50% jump boost!");
        Chestlore.add("Walk with the gods!");
        Chestlore.add("");
        Chestlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "LEGENDARY");
        Chestlore.add("");
        DemiChestMeta.setLore(Chestlore);


        DemiChest.setItemMeta(DemiChestMeta);
        ches = DemiChest;
    }


        // ! Demi Leggings
    private static void createDemiLeggings() {
        // DEFINE THE META -------------
        ItemStack DemiLeg = new ItemStack(Material.DIAMOND_LEGGINGS);
        ItemMeta DemiLegMeta = DemiLeg.hasItemMeta() ? DemiLeg.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DemiLeg.getType());


        // SET THE META ----------------
        DemiLegMeta.setDisplayName("Demigod Leggings");
            // LegLore
        List<String> Leglore = new ArrayList<>();
        Leglore.add(ChatColor.RED + "Attributes------");
        Leglore.add(ChatColor.BLUE + "Damage: 5");
        Leglore.add(ChatColor.BLUE + "Defense: 21");
        Leglore.add(ChatColor.BLUE + "Mana: 15");
        Leglore.add(ChatColor.BLUE + "Stamina: 25");
        Leglore.add("");
        Leglore.add(a.lore() + "Armor gifted to a mortal from above.");
        Leglore.add(a.lore() + "It is said that whoever wears this has the powerof a god!");
        Leglore.add("");
        Leglore.add(ChatColor.GOLD + "Full Set Bonus: Zeus' Wrath");
        Leglore.add("Shift and jump at the same time to summon the fury of the gods!");
        Leglore.add("");
        Leglore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Godly");
        Leglore.add("When equipped, gain 50% movement speed and 50% jump boost!");
        Leglore.add("Walk with the gods!");
        Leglore.add("");
        Leglore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "LEGENDARY");
        Leglore.add("");
        DemiLegMeta.setLore(Leglore);
        DemiLeg.setItemMeta(DemiLegMeta);
        leg = DemiLeg;
    }

// ! Cac Boots
    private static void createDemiBoots() {
        // DEFINE THE META -------------
        ItemStack DemiBoots = new ItemStack(Material.DIAMOND_BOOTS);
        ItemMeta DemiBootsMeta = DemiBoots.hasItemMeta() ? DemiBoots.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DemiBoots.getType());


        // SET THE META ----------------
        DemiBootsMeta.setDisplayName("Demigod Boots");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add(ChatColor.RED + "Attributes------");
        Bootslore.add(ChatColor.BLUE + "Damage: 3");
        Bootslore.add(ChatColor.BLUE + "Defense: 8");
        Bootslore.add(ChatColor.BLUE + "Mana: 7");
        Bootslore.add(ChatColor.BLUE + "Stamina: 13");
        Bootslore.add("Armor gifted to a mortal from above.");
        Bootslore.add("It is said that whoever wears this has the powerof a god!");
        Bootslore.add("-Z");
        Bootslore.add("");
        Bootslore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Zeus' Wrath");
        Bootslore.add("Shift and jump at the same time to summon the fury of the gods!");
        Bootslore.add("");
        Bootslore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Godly");
        Bootslore.add("When equipped, gain 50% movement speed and 50% jump boost!");
        Bootslore.add("Walk with the gods!");
        Bootslore.add("");
        Bootslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "LEGENDARY");
        DemiBootsMeta.setLore(Bootslore);
        DemiBoots.setItemMeta(DemiBootsMeta);
        boots = DemiBoots;
    }


}
