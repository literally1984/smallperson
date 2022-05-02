package tech.nully.primplug.Armor.armorItems;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class lapisArmor {
    public static ItemStack helm;
    public static ItemStack chestplate;
    public static ItemStack leg;
    public static ItemStack boots;

    public void init() {
        createLapisHelm();
        createLapisChes();
        createLapisLeg();
        createLapisBoots();
    }

    private static void createLapisHelm() {
        // DEFINE THE META -------------
        ItemStack LapisHelm = new ItemStack(Material.DIAMOND_HELMET);
        ItemMeta LapisHelmMeta = LapisHelm.getItemMeta();


        // SET THE META ----------------
        LapisHelmMeta.setDisplayName("Lapis Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        Helmlore.add(ChatColor.RED + "Damage: " + ChatColor.GRAY + "3");
        Helmlore.add(ChatColor.GREEN + "Defense: " + ChatColor.GRAY + "18");
        Helmlore.add(ChatColor.BLUE + "Mana: " + ChatColor.GRAY + "8");
        Helmlore.add(ChatColor.GOLD + "Stamina: " + ChatColor.GRAY + "13");
        Helmlore.add("");
        Helmlore.add(ChatColor.LIGHT_PURPLE + "A helmet made out of an extremely durable");
        Helmlore.add(ChatColor.LIGHT_PURPLE + "material which grants a lot of protection");
        Helmlore.add("");
        Helmlore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        LapisHelmMeta.setLore(Helmlore);

        LapisHelm.setItemMeta(LapisHelmMeta);
        helm = LapisHelm;
    }



    private static void createLapisChes() {
        // DEFINE THE META -------------
        ItemStack LapisChes = new ItemStack(Material.DIAMOND_CHESTPLATE);
        ItemMeta LapisChesMeta = LapisChes.getItemMeta();


        // SET THE META ----------------
        LapisChesMeta.setDisplayName("Hardened Diamond Chestplate");
            // ChesLore
        List<String> Cheslore = new ArrayList<>();
        Cheslore.add("");
        Cheslore.add(ChatColor.BLUE + "Damage: " + ChatColor.GRAY + "5");
        Cheslore.add(ChatColor.BLUE + "Defense: " + ChatColor.GRAY + "32");
        Cheslore.add(ChatColor.BLUE + "Mana: " + ChatColor.GRAY + "13");
        Cheslore.add(ChatColor.BLUE + "Stamina: " + ChatColor.GRAY + "20");
        Cheslore.add("");
        Cheslore.add(ChatColor.LIGHT_PURPLE + "A Chesplate made out of an extremely durable");
        Cheslore.add(ChatColor.LIGHT_PURPLE + "material which grants a lot of protection");
        Cheslore.add("");
        Cheslore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        LapisChesMeta.setLore(Cheslore);

        LapisChes.setItemMeta(LapisChesMeta);
        chestplate = LapisChes;
    }


    private static void createLapisLeg() {
        // DEFINE THE META -------------
        ItemStack LapisHelm = new ItemStack(Material.DIAMOND_HELMET);
        ItemMeta LapisHelmMeta = LapisHelm.getItemMeta();


        // SET THE META ----------------
        LapisHelmMeta.setDisplayName("Hardened Diamond Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        Helmlore.add(ChatColor.BLUE + "Damage: " + ChatColor.GRAY + "3");
        Helmlore.add(ChatColor.BLUE + "Defense: " + ChatColor.GRAY + "18");
        Helmlore.add(ChatColor.BLUE + "Mana: " + ChatColor.GRAY + "8");
        Helmlore.add(ChatColor.BLUE + "Stamina: " + ChatColor.GRAY + "13");
        Helmlore.add("");
        Helmlore.add(ChatColor.LIGHT_PURPLE + "A helmet made out of an extremely durable");
        Helmlore.add(ChatColor.LIGHT_PURPLE + "material which grants a lot of protection");
        
        Helmlore.add("");
        Helmlore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        LapisHelmMeta.setLore(Helmlore);

        LapisHelm.setItemMeta(LapisHelmMeta);
        helm = LapisHelm;
    }


    private static void createLapisBoots() {
        // DEFINE THE META -------------
        ItemStack LapisBoots = new ItemStack(Material.DIAMOND_BOOTS);
        ItemMeta LapisBootsMeta = LapisBoots.getItemMeta();


        // SET THE META ----------------
        LapisBootsMeta.setDisplayName("Hardened Diamond Bootset");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add("");
        Bootslore.add(ChatColor.RED + "Damage: " + ChatColor.GRAY + "3");
        Bootslore.add(ChatColor.GREEN + "Defense: " + ChatColor.GRAY + "18");
        Bootslore.add(ChatColor.BLUE + "Mana: " + ChatColor.GRAY + "8");
        Bootslore.add(ChatColor.GOLD + "Stamina: " + ChatColor.GRAY + "13");
        Bootslore.add("");
        Bootslore.add(ChatColor.LIGHT_PURPLE + "A Bootset made out of an extremely durable");
        Bootslore.add(ChatColor.LIGHT_PURPLE + "material which grants a lot of protection");
        Bootslore.add("");
        Bootslore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        LapisBootsMeta.setLore(Bootslore);

        LapisBoots.setItemMeta(LapisBootsMeta);
        boots = LapisBoots;
    }
}
