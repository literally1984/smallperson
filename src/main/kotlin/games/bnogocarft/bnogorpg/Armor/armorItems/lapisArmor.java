package games.bnogocarft.bnogorpg.Armor.armorItems;

import org.bukkit.ChatColor;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.meta.LeatherArmorMeta;
import games.bnogocarft.bnogorpg.Armor.baseAdder;

import java.util.List;

public class lapisArmor {
    public static ItemStack helm;
    public static ItemStack chestplate;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createLapisHelm();
        createLapisChes();
        createLapisLeg();
        createLapisBoots();
    }
    


    private static baseAdder a = new baseAdder();

    private static void createLapisHelm() {
        // DEFINE THE META -------------
        ItemStack LapisHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta LapisHelmMeta = LapisHelm.getItemMeta();


        // SET THE META ----------------
        LapisHelmMeta.setDisplayName("Lapis Helmet");
            // HelmLore
        List<String> Helmlore = a.addAttributes(LapisHelm, 0, 3, 4, 9, 7, 10);
        Helmlore.add("");
        Helmlore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Helmlore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Helmlore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Helmlore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Helmlore.add("");
        Helmlore.add(a.lore() + "Armor made from Lapis Lazui granting the");
        Helmlore.add(a.lore() + "wearer massive amounts of mana but lacking");
        Helmlore.add(a.lore() + "in defense due to the brittle nature of lapis");
        Helmlore.add(a.lore() + "lazui");
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
        List<String> Cheslore = a.addAttributes(LapisChes, 1, 1, 7, 7, 13, 17);
        Cheslore.add("");
        Cheslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Cheslore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Cheslore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Cheslore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Cheslore.add("");
        Cheslore.add(a.lore() + "Armor made from Lapis Lazui granting the");
        Cheslore.add(a.lore() + "wearer massive amounts of mana but lacking");
        Cheslore.add(a.lore() + "in defense due to the brittle nature of lapis");
        Cheslore.add(a.lore() + "lazui");
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
        List<String> Leglore = a.addAttributes(LapisLeg, 1, 1, 14, 14, 7, 12);
        Leglore.add("");
        Leglore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Leglore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Leglore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Leglore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Leglore.add("");
        Leglore.add(a.lore() + "Armor made from Lapis Lazui granting the");
        Leglore.add(a.lore() + "wearer massive amounts of mana but lacking");
        Leglore.add(a.lore() + "in defense due to the brittle nature of lapis");
        Leglore.add(a.lore() + "lazui");
        Leglore.add("");
        Leglore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        LapisLegMeta.setLore(Leglore);

        LeatherArmorMeta l = (LeatherArmorMeta) LapisLegMeta;
        l.setColor(Color.BLUE);

        LapisLeg.setItemMeta(LapisLegMeta);
        helm = LapisLeg;
    }


    private static void createLapisBoots() {
        // DEFINE THE META -------------
        ItemStack LapisBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta LapisBootsMeta = LapisBoots.getItemMeta();


        // SET THE META ----------------
        LapisBootsMeta.setDisplayName("Lapis Boots");
            // BootsLore
        List<String> Bootslore = a.addAttributes(LapisBoots, 0, 0, 6, 6, 15, 5);
        Bootslore.add("");
        Bootslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Bootslore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Bootslore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Bootslore.add(ChatColor.GRAY + "power of the lapis lazui used to craft it");
        Bootslore.add("");
        Bootslore.add(a.lore() + "Armor made from Lapis Lazui granting the");
        Bootslore.add(a.lore() + "wearer massive amounts of mana but lacking");
        Bootslore.add(a.lore() + "in defense due to the brittle nature of lapis");
        Bootslore.add(a.lore() + "lazui");
        Bootslore.add("");
        Bootslore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        LapisBootsMeta.setLore(Bootslore);

        LeatherArmorMeta l = (LeatherArmorMeta) LapisBootsMeta;
        l.setColor(Color.BLUE);

        LapisBoots.setItemMeta(LapisBootsMeta);
        boots = LapisBoots;
    }
}
