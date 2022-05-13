package tech.nully.primplug.Armor.armorItems;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.meta.LeatherArmorMeta;
import tech.nully.primplug.Armor.baseAttributesAdder;

public class PetheriteSet {
    
    public static ItemStack obby;
    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createCondensedObby();
        createPetheriteHelm();
        createPetheriteChestplate();
        createPetheriteLeggings();
        createPetheriteBoots();
    }

    private static baseAttributesAdder b = new baseAttributesAdder();


    // ! condensed Obsidian
    private static void createCondensedObby() {
        // DEFINE THE META -------------
        ItemStack CObby = new ItemStack(Material.OBSIDIAN);
        ItemMeta CObbyMeta = CObby.getItemMeta();


        // SET THE META ----------------
        CObbyMeta.setDisplayName("Condensed Obsidian");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.YELLOW + "Used to craft Petherite Shards");
        CObbyMeta.setLore(Helmlore);

        CObby.setItemMeta(CObbyMeta);
        obby = CObby;
    }


    //! Petherite Helmet
    private static void createPetheriteHelm() {
        // DEFINE THE META -------------
        ItemStack PHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta PHelmMeta = PHelm.hasItemMeta() ? PHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PHelm.getType());


        // SET THE META ----------------
        PHelmMeta.setDisplayName("Petherite Helmet");
            // HelmLore\
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        Helmlore.add("NETHERITE! Well, almost.");
        Helmlore.add("");
        Helmlore.add(b.epic() + "EPIC");
        PHelmMeta.setLore(Helmlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) PHelmMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        PHelm.setItemMeta(PHelmMeta);
        helm = PHelm;
    }

    // ! Petherite Chesplate
    private static void createPetheriteChestplate() {
        // DEFINE THE META -------------
        ItemStack PChest = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta PChestMeta = PChest.hasItemMeta() ? PChest.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PChest.getType());


        // SET THE META ----------------
        PChestMeta.setDisplayName("Petherite Chestplate");
            // ChestLore
        List<String> Chestlore = new ArrayList<>();
        Chestlore.add("");
        Chestlore.add(ChatColor.BLUE + "------ " + ChatColor.GREEN + "0" + ChatColor.BLUE + "/45 ------");
        Chestlore.add(ChatColor.BLUE + "Damage: 1");
        Chestlore.add(ChatColor.BLUE + "Defense: 8");
        Chestlore.add(ChatColor.BLUE + "Mana: 7");
        Chestlore.add(ChatColor.BLUE + "Stamina: 13");
        Chestlore.add("");
        Chestlore.add("NETHERITE! Well, almost.");
        Chestlore.add("");
        Chestlore.add("");
        Chestlore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        PChestMeta.setLore(Chestlore);

        PChest.setItemMeta(PChestMeta);
        ches = PChest;
    }


    // ! Petherite Leggings
    private static void createPetheriteLeggings() {
        // DEFINE THE META -------------
        ItemStack PLeg = new ItemStack(Material.LEATHER_LEGGINGS);
        ItemMeta PLegMeta = PLeg.hasItemMeta() ? PLeg.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PLeg.getType());


        // SET THE META ----------------
        PLegMeta.setDisplayName("Petherite Leggings");
            // LegLore
        List<String> Leglore = new ArrayList<>();
        Leglore.add("NETHERITE! Well, almost.");
        Leglore.add("");
        Leglore.add("");
        Leglore.add(ChatColor.BLUE + "Attributes------");
        Leglore.add(ChatColor.BLUE + "Damage: 1");
        Leglore.add(ChatColor.BLUE + "Defense: 8");
        Leglore.add(ChatColor.BLUE + "Mana: 7");
        Leglore.add(ChatColor.BLUE + "Stamina: 13");
        Leglore.add("");
        Leglore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");

        PLegMeta.setLore(Leglore);

        PLeg.setItemMeta(PLegMeta);
        leg = PLeg;
    }
    // ! Petherite Boots
    private static void createPetheriteBoots() {
        // DEFINE THE META -------------
        ItemStack PBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta PBootsMeta = PBoots.hasItemMeta() ? PBoots.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PBoots.getType());


        // SET THE META ----------------
        PBootsMeta.setDisplayName("Petherite Boots");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add(ChatColor.BLUE + "Attributes------");
        Bootslore.add(ChatColor.BLUE + "Damage: 1");
        Bootslore.add(ChatColor.BLUE + "Defense: 8");
        Bootslore.add(ChatColor.BLUE + "Mana: 7");
        Bootslore.add(ChatColor.BLUE + "Stamina: 13");
        Bootslore.add("");
        Bootslore.add("NETHERITE! Well, almost.");
        Bootslore.add("");
        Bootslore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        PBootsMeta.setLore(Bootslore);


        PBoots.setItemMeta(PBootsMeta);
        boots = PBoots;
    }
    public PetheriteSet() {
    }
}