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

public class platedArmor {
    public static ItemStack helm;
    public static ItemStack chestplate;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createPlatedHelm();
        createPlatedChes();
        createPlatedLeg();
        createPlatedBoots();
    }
    


    private static baseAttributesAdder a = new baseAttributesAdder();

    private static void createPlatedHelm() {
        // DEFINE THE META -------------
        ItemStack PlatedHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta PlatedHelmMeta = PlatedHelm.getItemMeta();


        // SET THE META ----------------
        PlatedHelmMeta.setDisplayName("Iron Plated Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        a.addAttributes(PlatedHelm, 0, 2, 6, 6, 15, 5);
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: Flexible but hard");
        Helmlore.add(ChatColor.GRAY + "Being made out of Lapis plates,");
        Helmlore.add(ChatColor.GRAY + "wearing this armor in a set will");
        Helmlore.add(ChatColor.GRAY + "grant the user +10 speed");
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE DETRIMENT: Flexible but hard");
        Helmlore.add(ChatColor.GRAY + "Being made out of Lapis plates,");
        Helmlore.add(ChatColor.GRAY + "wearing this armor in a set will");
        Helmlore.add(ChatColor.GRAY + "make the user have a chance to take true");
        Helmlore.add(ChatColor.GRAY + "damage at times...");
        Helmlore.add("");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Plated armor from the medival ages");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "very flexible and grants the user ");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the thin");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of Lapis Plates...");
        Helmlore.add("");
        Helmlore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        PlatedHelmMeta.setLore(Helmlore);

        LeatherArmorMeta l = (LeatherArmorMeta) PlatedHelmMeta;
        l.setColor(Color.BLUE);

        PlatedHelm.setDurability((short)-20);

        PlatedHelm.setItemMeta(PlatedHelmMeta);
        helm = PlatedHelm;
    }



    private static void createPlatedChes() {
        // DEFINE THE META -------------
        ItemStack PlatedChes = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta PlatedChesMeta = PlatedChes.getItemMeta();


        // SET THE META ----------------
        PlatedChesMeta.setDisplayName("Iron Plated Chestplate");
            // ChesLore
        List<String> Cheslore = new ArrayList<>();
        Cheslore.add("");
        a.addAttributes(PlatedChes, 1, 1, 18, 18, 25, 10);
        Cheslore.add("");
        Cheslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Cheslore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Cheslore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Cheslore.add(ChatColor.GRAY + "power of the Lapis used to craft it");
        Cheslore.add("");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Plated Lapis granting");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the thin");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of Lapis Plates...");
        Cheslore.add("");
        Cheslore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        PlatedChesMeta.setLore(Cheslore);

        LeatherArmorMeta l = (LeatherArmorMeta) PlatedChesMeta;
        l.setColor(Color.BLUE);


        PlatedChes.setItemMeta(PlatedChesMeta);
        chestplate = PlatedChes;
    }


    private static void createPlatedLeg() {
        // DEFINE THE META -------------
        ItemStack PlatedLeg = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta PlatedLegMeta = PlatedLeg.getItemMeta();


        // SET THE META ----------------
        PlatedLegMeta.setDisplayName("Iron Plated Leggings");
            // HelmLore
        List<String> Leglore = new ArrayList<>();
        Leglore.add("");
        a.addAttributes(PlatedLeg, 1, 1, 14, 14, 20, 7);
        Leglore.add("");
        Leglore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Leglore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Leglore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Leglore.add(ChatColor.GRAY + "power of the Lapis used to craft it");
        Leglore.add("");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Plated Laips granting");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the thin");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of Plated Lapis...");
        Leglore.add("");
        Leglore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        PlatedLegMeta.setLore(Leglore);

        LeatherArmorMeta l = (LeatherArmorMeta) PlatedLegMeta;
        l.setColor(Color.BLUE);

        PlatedLeg.setItemMeta(PlatedLegMeta);
        helm = PlatedLeg;
    }


    private static void createPlatedBoots() {
        // DEFINE THE META -------------
        ItemStack PlatedBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta PlatedBootsMeta = PlatedBoots.getItemMeta();


        // SET THE META ----------------
        PlatedBootsMeta.setDisplayName("Iron Plated Boots");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add("");
        a.addAttributes(PlatedBoots, 0, 1, 6, 6, 15, 5);
        Bootslore.add("");
        Bootslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Bootslore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Bootslore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Bootslore.add(ChatColor.GRAY + "power of the Lapis used to craft it");
        Bootslore.add("");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Plated Lapis granting");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the brittle");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of Plated Lapis...");
        Bootslore.add("");
        Bootslore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        PlatedBootsMeta.setLore(Bootslore);

        LeatherArmorMeta l = (LeatherArmorMeta) PlatedBootsMeta;
        l.setColor(Color.BLUE);

        PlatedBoots.setItemMeta(PlatedBootsMeta);
        boots = PlatedBoots;
    }
}
