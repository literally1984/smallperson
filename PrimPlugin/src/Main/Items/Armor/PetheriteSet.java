package Main.Items.Armor;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.meta.LeatherArmorMeta;

public class PetheriteSet {

    public static ItemStack PetheriteHelmet;
    public static ItemStack PetheriteChestplate;
    public static ItemStack PetheriteLeggings;
    public static ItemStack PetheriteBoots;

    public static void init() {
        createPetheriteHelm();
        createPetheriteChestplate();
        createPetheriteLeggings();
        createPetheriteBoots();
    }

    private static void createPetheriteHelm() {
        // DEFINE THE META -------------
        ItemStack PHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta PHelmMeta = PHelm.hasItemMeta() ? PHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PHelm.getType());


        // SET THE META ----------------
        PHelmMeta.setDisplayName("Petherite Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("Its like a bootleg Netherite Helmet");
        PHelmMeta.setLore(Helmlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) PHelmMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        PHelm.setItemMeta(PHelmMeta);
        PetheriteHelmet = PHelm;
    }
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
        PetheriteChestplate = PChest;
    }
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
        PetheriteLeggings = PLeg;
    }
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
        PetheriteBoots = PBoots;
    }
}