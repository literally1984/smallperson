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
    
    public static ItemStack cactusShard;
    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createCactusShard();
        createPetheriteHelm();
        createPetheriteChestplate();
        createPetheriteLeggings();
        createPetheriteBoots();
    }
    // !  Obsidian
    private static void createCactusShard() {
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
        cactusShard = CacShard;
    }


    //! Petherite Helmet
    private static void createPetheriteHelm() {
        // DEFINE THE META -------------
        ItemStack CacHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta CacHelmMeta = CacHelm.hasItemMeta() ? CacHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacHelm.getType());


        // SET THE META ----------------
        CacHelmMeta.setDisplayName("Cactus Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("A very spikey armor piece, reflects");
        Helmlore.add("some damage back to the opponent when");
        Helmlore.add("they hit you.");
        Helmlore.add(ChatColor.AQUA + "Attributes when on body:");
        Helmlore.add(ChatColor.AQUA + "Damage: +1");
        Helmlore.add(ChatColor.AQUA + "Defense: +10");
        Helmlore.add(ChatColor.AQUA + "Mana:");
        Helmlore.add(ChatColor.AQUA + "Stamina");
        CacHelmMeta.setLore(Helmlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacHelmMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacHelm.setItemMeta(CacHelmMeta);
        helm = CacHelm;
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
        Chestlore.add("Its like a bootleg Netherite Chestplate");
        PChestMeta.setLore(Chestlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) PChestMeta;
        leatherArmorMeta.setColor(Color.BLACK);


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
        Leglore.add("Its like bootleg Netherite Leggings");
        PLegMeta.setLore(Leglore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) PLegMeta;
        leatherArmorMeta.setColor(Color.BLACK);


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
        Bootslore.add("Its like bootleg Netherite Boots");
        PBootsMeta.setLore(Bootslore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) PBootsMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        PBoots.setItemMeta(PBootsMeta);
        boots = PBoots;
    }
}