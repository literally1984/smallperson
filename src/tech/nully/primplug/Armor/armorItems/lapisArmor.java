package tech.nully.primplug.Armor.armorItems;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.meta.LeatherArmorMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;

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
    


    private static baseAttributesAdder a = new baseAttributesAdder();

    private static void createLapisHelm() {
        // DEFINE THE META -------------
        ItemStack LapisHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta LapisHelmMeta = LapisHelm.getItemMeta();


        // SET THE META ----------------
        LapisHelmMeta.setDisplayName("Lapis Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        a.addAttributes(LapisHelm, 0, 6, 15, 5);
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Helmlore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Helmlore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Helmlore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Helmlore.add("");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Lapis Lazui granting");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the brittle");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of lapis lazui...");
        Helmlore.add("");
        Helmlore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        LapisHelmMeta.setLore(Helmlore);

        LeatherArmorMeta l = (LeatherArmorMeta) LapisHelmMeta;
        l.setColor(Color.BLUE);

        LapisHelm.setDurability((short)-20);

        LapisHelm.setItemMeta(LapisHelmMeta);
        helm = LapisHelm;
    }



    private static void createLapisChes() {
        // DEFINE THE META -------------
        ItemStack LapisChes = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta LapisChesMeta = LapisChes.getItemMeta();


        // SET THE META ----------------
        LapisChesMeta.setDisplayName("Lapis Chestplate");
            // ChesLore
        List<String> Cheslore = new ArrayList<>();
        Cheslore.add("");
        a.addAttributes(LapisChes, 1, 18, 25, 10);
        Cheslore.add("");
        Cheslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Cheslore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Cheslore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Cheslore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Cheslore.add("");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Lapis Lazui granting");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the brittle");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of lapis lazui...");
        Cheslore.add("");
        Cheslore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        LapisChesMeta.setLore(Cheslore);

        LeatherArmorMeta l = (LeatherArmorMeta) LapisChesMeta;
        l.setColor(Color.BLUE);


        LapisChes.setItemMeta(LapisChesMeta);
        chestplate = LapisChes;
    }


    private static void createLapisLeg() {
        // DEFINE THE META -------------
        ItemStack LapisLeg = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta LapisLegMeta = LapisLeg.getItemMeta();


        // SET THE META ----------------
        LapisLegMeta.setDisplayName("Lapis Leggings");
            // HelmLore
        List<String> Leglore = new ArrayList<>();
        Leglore.add("");
        a.addAttributes(LapisLeg, 1, 18, 25, 10);
        Leglore.add("");
        Leglore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Leglore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Leglore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Leglore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Leglore.add("");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Lapis Lazui granting");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the brittle");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of lapis lazui...");
        Leglore.add("");
        Leglore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        LapisLegMeta.setLore(Leglore);

        LapisLeg.setItemMeta(LapisLegMeta);
        helm = LapisLeg;
    }


    private static void createLapisBoots() {
        // DEFINE THE META -------------
        ItemStack LapisBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta LapisBootsMeta = LapisBoots.getItemMeta();


        // SET THE META ----------------
        LapisBootsMeta.setDisplayName("Hardened LEATHER Bootset");
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
