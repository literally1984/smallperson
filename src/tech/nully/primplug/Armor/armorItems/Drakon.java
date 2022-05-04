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

import net.milkbowl.vault.chat.Chat;
import tech.nully.primplug.Armor.baseAttributesAdder;

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
        baseAttributesAdder a = new baseAttributesAdder();
        // DEFINE THE META -------------
        ItemStack DRHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta DRHelmMeta = DRHelm.hasItemMeta() ? DRHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(DRHelm.getType());


        // SET THE META ----------------
        DRHelmMeta.setDisplayName(ChatColor.DARK_PURPLE + "Drakon Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        a.addAttributes(DRHelm, 2, 16, 7, 15);
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "A helmet forged from the bones of");
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "the invincible dragon who guards the");
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.ITALIC + "golden fleece...");
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" +ChatColor.BOLD + "SET BONUS: DRAGON AWAKENING");
        Helmlore.add(ChatColor.GRAY + "Grants the wearer");
        Helmlore.add("");
        Helmlore.add(ChatColor.DARK_PURPLE + "" + ChatColor.BOLD + "EPIC");
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
        cheslore.add(ChatColor.BLUE + "Defense: 35");
        cheslore.add(ChatColor.BLUE + "Mana: 13");
        cheslore.add(ChatColor.BLUE + "Stamina: 25");
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
        bootslore.add(ChatColor.BLUE + "Attributes------");
        bootslore.add(ChatColor.BLUE + "Damage: 3");
        bootslore.add(ChatColor.BLUE + "Defense: 14");
        bootslore.add(ChatColor.BLUE + "Mana: 7");
        bootslore.add(ChatColor.BLUE + "Stamina: 17");
        DRbootsMeta.setLore(bootslore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) DRbootsMeta;
        leatherArmorMeta.setColor(Color.WHITE);


        DRboots.setItemMeta(DRbootsMeta);
        boots = DRboots;
    }
}