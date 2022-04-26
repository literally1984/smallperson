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

public class Drakon {

    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createDrakonHelm();
        createDrakonChestplate();
        createDrakonLeggings();
        createDrakonBoots();
    }

    private static void createDrakonHelm() {
        // DEFINE THE META -------------
        ItemStack DRHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta DRHelmMeta = DRHelm.hasItemMeta() ? DRHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DRHelm.getType());


        // SET THE META ----------------
        DRHelmMeta.setDisplayName(ChatColor.DARK_PURPLE + "[EPIC]" + ChatColor.WHITE + " Drakon Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "A helmet forged from the");
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "bones of the invincible dragon");
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "who guards the golden fleece..");

        Helmlore.add("");
        Helmlore.add(ChatColor.BLUE + "Attributes------");
        Helmlore.add(ChatColor.BLUE + "Damage: 3");
        Helmlore.add(ChatColor.BLUE + "Defense: 14");
        Helmlore.add(ChatColor.BLUE + "Mana: 7");
        Helmlore.add(ChatColor.BLUE + "Stamina: 20");
        DRHelmMeta.setLore(Helmlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) DRHelmMeta;
        leatherArmorMeta.setColor(Color.WHITE);


        DRHelm.setItemMeta(DRHelmMeta);
        helm = DRHelm;
    }


    private static void createDrakonChestplate() {
        // DEFINE THE META -------------
        ItemStack DRches = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta DRchesMeta = DRches.hasItemMeta() ? DRches.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DRches.getType());


        // SET THE META ----------------
        DRchesMeta.setDisplayName(ChatColor.DARK_PURPLE + "[EPIC]" + ChatColor.WHITE + " Drakon Chesplate");
            // chesLore
        List<String> cheslore = new ArrayList<>();
        cheslore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "A chesplate forged from the");
        cheslore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "bones of the invincible dragon");
        cheslore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "who guards the golden fleece..");

        cheslore.add("");        
        cheslore.add(ChatColor.BLUE + "Attributes------");
        cheslore.add(ChatColor.BLUE + "Damage: 5");
        cheslore.add(ChatColor.BLUE + "Defense: 8");
        cheslore.add(ChatColor.BLUE + "Mana: 10");
        cheslore.add(ChatColor.BLUE + "Stamina: 15");
        DRchesMeta.setLore(cheslore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) DRchesMeta;
        leatherArmorMeta.setColor(Color.WHITE);


        DRches.setItemMeta(DRchesMeta);
        ches = DRches;
    }

    private static void createDrakonLeggings() {
        // DEFINE THE META -------------
        ItemStack DRleg = new ItemStack(Material.LEATHER_LEGGINGS);
        ItemMeta DRlegMeta = DRleg.hasItemMeta() ? DRleg.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DRleg.getType());


        // SET THE META ----------------
        DRlegMeta.setDisplayName(ChatColor.DARK_PURPLE + "[EPIC]" + ChatColor.WHITE + " Drakon Leggings");
            // legLore
        List<String> leglore = new ArrayList<>();
        leglore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "A pair of leggings forged from");
        leglore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "the bones of the invincible dragon");
        leglore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "who guards the golden fleece..");

        leglore.add("");
        leglore.add(ChatColor.BLUE + "Attributes------");
        leglore.add(ChatColor.BLUE + "Damage: 1");
        leglore.add(ChatColor.BLUE + "Defense: 8");
        leglore.add(ChatColor.BLUE + "Mana: 10");
        leglore.add(ChatColor.BLUE + "Stamina: 15");
        DRlegMeta.setLore(leglore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) DRlegMeta;
        leatherArmorMeta.setColor(Color.WHITE);


        DRleg.setItemMeta(DRlegMeta);
        leg = DRleg;
    }


    private static void createDrakonBoots() {
        // DEFINE THE META -------------
        ItemStack DRboots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta DRbootsMeta = DRboots.hasItemMeta() ? DRboots.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DRboots.getType());


        // SET THE META ----------------
        DRbootsMeta.setDisplayName(ChatColor.DARK_PURPLE + "[EPIC]" + ChatColor.WHITE + " Drakon Boots");
            // bootsLore
        List<String> bootslore = new ArrayList<>();
        bootslore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "A pair boots forged from the");
        bootslore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "bones of the invincible dragon");
        bootslore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "who guards the golden fleece..");

        bootslore.add("");
        bootslore.add(ChatColor.BLUE + "+2 HP");
        bootslore.add(ChatColor.BLUE + "+16% defense");
        DRbootsMeta.setLore(bootslore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) DRbootsMeta;
        leatherArmorMeta.setColor(Color.WHITE);


        DRboots.setItemMeta(DRbootsMeta);
        boots = DRboots;
    }
}