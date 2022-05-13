//Bongo why dont we have a class in the entire script? bruh
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

public class wizardRobes {
    public static ItemStack helm;
    public static ItemStack chestplate;
    public static ItemStack leg;
    public static ItemStack boots;
  
    public static void init() {
        createWizHat();
        createWizChes();
        createWizLeg();
        createWizBoots();
    }


    
    private static void createWizHat() {
    // DEFINE THE META -------------
    ItemStack WizHat = new ItemStack(Material.LEATHER_HELMET);
    ItemMeta WizHatMeta = WizHat.getItemMeta();

    WizHatMeta.setDisplayName("Wizard Hat");
        //Bootlore
    List<String> Hatlore = new ArrayList<>();
    Hatlore.add("");
    a.addAttributes(WizHat, 3, 8, 6, 17, 13, 15);
    Hatlore.add("");
    Hatlore.add("The pointy hat of a legendary");
    Hatlore.add("sorcerer from the mideval times");
    Hatlore.add("");
    Hatlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Mystic Potion");
    Hatlore.add(ChatColor.ITALIC + "Nauseate your opponent ");
    Hatlore.add(ChatColor.ITALIC + "with every hit!");
    Hatlore.add("");
    Hatlore.add(ChatColor.BLUE + "EPIC");
    ((ItemMeta) WizHat).setLore(Hatlore);

    LeatherArmorMeta l = (LeatherArmorMeta) WizHatMeta;
    l.setColor(Color.GRAY);

    WizHat.setDurability((short)-20);

    WizHat.setItemMeta(WizHatMeta);
    helm = WizHat;
    }



    private static void createWizChes() {
    // DEFINE THE META -------------
    ItemStack WizChes = new ItemStack(Material.LEATHER_CHESTPLATE);
    ItemMeta WizChesMeta = WizChes.getItemMeta();

    WizChesMeta.setDisplayName("Wizard Leggings");
        //Bootlore
    List<String> Cheslore = new ArrayList<>();
    Cheslore.add("");
    a.addAttributes(WizChes, 3, 8, 6, 17, 13, 15);
    Cheslore.add("");
    Cheslore.add("The robes of a legendary");
    Cheslore.add("sorcerer from the mideval times");
    Cheslore.add("");
    Cheslore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Mystic Potion");
    Cheslore.add(ChatColor.ITALIC + "Nauseate your opponent ");
    Cheslore.add(ChatColor.ITALIC + "with every hit!");
    Cheslore.add("");
    Cheslore.add(ChatColor.BLUE + "EPIC");
    ((ItemMeta) WizChes).setLore(Cheslore);

    LeatherArmorMeta l = (LeatherArmorMeta) WizChesMeta;
    l.setColor(Color.GRAY);

    WizChes.setDurability((short)-20);

    WizChes.setItemMeta(WizChesMeta);
    chestplate = WizChes;
    }



    private static void createWizLeg() {
    // DEFINE THE META -------------
    ItemStack WizLeg = new ItemStack(Material.LEATHER_LEGGINGS);
    ItemMeta WizLegMeta = WizLeg.getItemMeta();

    WizLegMeta.setDisplayName("Wizard Leggings");
        //Bootlore
    List<String> Leglore = new ArrayList<>();
    Leglore.add("");
    a.addAttributes(WizLeg, 3, 8, 6, 17, 13, 15);
    Leglore.add("");
    Leglore.add("The robes of a legendary");
    Leglore.add("sorcerer from the mideval times");
    Leglore.add("");
    Leglore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Mystic Potion");
    Leglore.add(ChatColor.ITALIC + "Nauseate your opponent ");
    Leglore.add(ChatColor.ITALIC + "with every hit!");
    Leglore.add("");
    Leglore.add(ChatColor.BLUE + "EPIC");
    ((ItemMeta) WizLeg).setLore(Leglore);

    LeatherArmorMeta l = (LeatherArmorMeta) WizLegMeta;
    l.setColor(Color.GRAY);

    WizLeg.setDurability((short)-20);

    WizLeg.setItemMeta(WizLegMeta);
    leg = WizLeg;
    }

    private static baseAttributesAdder a = new baseAttributesAdder();

    private static void createWizBoots() {
    // DEFINE THE META -------------
        ItemStack WizBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta WizBootsMeta = WizBoots.getItemMeta();

        WizBootsMeta.setDisplayName("Wizard Boots");
            //Bootlore
        List<String> Bootlore = new ArrayList<>();
        Bootlore.add("");
        a.addAttributes(WizBoots, 3, 8, 6, 17, 13, 15);
        Bootlore.add("");
        Bootlore.add("The robes of a legendary");
        Bootlore.add("sorcerer from the mideval times");
        Bootlore.add("");
        Bootlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Mystic Potion");
        Bootlore.add(ChatColor.ITALIC + "Nauseate your opponent ");
        Bootlore.add(ChatColor.ITALIC + "with every hit!");
        Bootlore.add("");
        Bootlore.add(ChatColor.BLUE + "EPIC");
        ((ItemMeta) WizBoots).setLore(Bootlore);

        LeatherArmorMeta l = (LeatherArmorMeta) WizBootsMeta;
        l.setColor(Color.GRAY);

        WizBoots.setDurability((short)-20);

        WizBoots.setItemMeta(WizBootsMeta);
        boots = WizBoots;
    }














}
