package tech.nully.primplug.Armor.armorItems;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;

public class hardenedDiamond {
    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createHDiaHelm();
        createHDiaChes();
        createHDiaLeg();
        createHDiaBoots();
    }

    private static baseAttributesAdder base = new baseAttributesAdder();

    private static void createHDiaHelm() {
        // DEFINE THE META -------------
        ItemStack HDiaHelm = new ItemStack(Material.DIAMOND_HELMET);
        ItemMeta HDiaHelmMeta = HDiaHelm.getItemMeta();

        // SET THE META ----------------
        HDiaHelmMeta.setDisplayName("Hardened Diamond Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        base.addAttributes(HDiaHelm, 3, 18, 13, 13, 7, 12);
        Helmlore.add("");
        Helmlore.add(base.lore() + "Made from the hardest diamonds from the depths");
        Helmlore.add(base.lore() + "of the earth, this armor is the toughest around!");
        Helmlore.add("");
        Helmlore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        HDiaHelmMeta.setLore(Helmlore);

        HDiaHelm.setItemMeta(HDiaHelmMeta);
        helm = HDiaHelm;
    }


    private static void createHDiaChes() {
        // DEFINE THE META -------------
        ItemStack HDiaChes = new ItemStack(Material.DIAMOND_CHESTPLATE);
        ItemMeta HDiaChesMeta = HDiaChes.getItemMeta();


        // SET THE META ----------------
        HDiaChesMeta.setDisplayName("Hardened Diamond Chestplate");
            // ChesLore
        List<String> Cheslore = new ArrayList<>();
        Cheslore.add("");
        base.addAttributes(HDiaChes, 5, 32, 13, 20, 10, 13);
        Cheslore.add("");
        Cheslore.add(ChatColor.LIGHT_PURPLE + "Made from the hardest diamonds from the depths");
        Cheslore.add(ChatColor.LIGHT_PURPLE + "of the earth, this armor is the toughest around!");
        Cheslore.add("");
        Cheslore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        HDiaChesMeta.setLore(Cheslore);

        HDiaChes.setItemMeta(HDiaChesMeta);
        ches = HDiaChes;
    }


    private static void createHDiaLeg() {
        // DEFINE THE META -------------
        ItemStack HDiaHelm = new ItemStack(Material.DIAMOND_HELMET);
        ItemMeta HDiaHelmMeta = HDiaHelm.getItemMeta();


        // SET THE META ----------------
        HDiaHelmMeta.setDisplayName("Hardened Diamond Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        base.addAttributes(HDiaHelm, 3, 3, 18, 12, 8, 13);
        Helmlore.add("");
        Helmlore.add(ChatColor.GRAY + "Made from the hardest diamonds from the depths");
        Helmlore.add(ChatColor.GRAY + "of the earth, this armor is the toughest around!");
        Helmlore.add("");
        Helmlore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        HDiaHelmMeta.setLore(Helmlore);

        HDiaHelm.setItemMeta(HDiaHelmMeta);
        helm = HDiaHelm;
    }


    private static void createHDiaBoots() {
        // DEFINE THE META -------------
        ItemStack HDiaBoots = new ItemStack(Material.DIAMOND_BOOTS);
        ItemMeta HDiaBootsMeta = HDiaBoots.getItemMeta();


        // SET THE META ----------------
        HDiaBootsMeta.setDisplayName("Hardened Diamond Bootset");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add("");base.addAttributes(HDiaBoots, 3, 3, 18, 18, 8, 13);
        Bootslore.add(ChatColor.RED + "Damage: " + ChatColor.GRAY + "3");
        Bootslore.add(ChatColor.GREEN + "Defense: " + ChatColor.GRAY + "18");
        Bootslore.add(ChatColor.BLUE + "Mana: " + ChatColor.GRAY + "8");
        Bootslore.add(ChatColor.GOLD + "Stamina: " + ChatColor.GRAY + "13");
        Bootslore.add("");
        Bootslore.add(ChatColor.LIGHT_PURPLE + "Made from the hardest diamonds from the depths");
        Bootslore.add(ChatColor.LIGHT_PURPLE + "of the earth, this armor is the toughest around!");
        Bootslore.add("");
        Bootslore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
        HDiaBootsMeta.setLore(Bootslore);

        HDiaBoots.setItemMeta(HDiaBootsMeta);
        boots = HDiaBoots;
    }
}
