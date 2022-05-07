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

public class reaperArmor {
    public static ItemStack helm;
    public static ItemStack chestplate;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createReaperHelm();
        createReaperChes();
        createReaperLeg();
        createReaperBoots();
    }
    


    private static baseAttributesAdder a = new baseAttributesAdder();

    private static void createReaperHelm() {
        // DEFINE THE META -------------
        ItemStack ReaperHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta ReaperHelmMeta = ReaperHelm.getItemMeta();


        // SET THE META ----------------
        ReaperHelmMeta.setDisplayName("Reaper Helmet");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        a.addAttributes(ReaperHelm, 5, 8, 13, 13);
        Helmlore.add("");
        Helmlore.add(a.ability() + "PASSIVE SET BONUS: Translucence");
        Helmlore.add(ChatColor.GRAY + "Wearing this set of armor grants the");
        Helmlore.add(ChatColor.GRAY + "user's body some transparency causing");
        Helmlore.add(ChatColor.GRAY + "the opponent to have a 10% chance of");
        Helmlore.add(ChatColor.GRAY + "missing on atttempting to damage the user");
        Helmlore.add("");
        Helmlore.add(a.ability() + "INTERACT SET BONUS: Descendant of the Reaper");
        Helmlore.add(ChatColor.GRAY + "Shift and right click while facing the air");
        Helmlore.add(ChatColor.GRAY + "to get the ability to fly and turns you");
        Helmlore.add(ChatColor.GRAY + "invisible");
        Helmlore.add("");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Reaper armor passed down after a");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "legendary warrior slew death himself..");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "It is said that the weapon of death");
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "was also passed down");
        Helmlore.add("");
        Helmlore.add(a.legendary() + "LEGENDARY");
        ReaperHelmMeta.setLore(Helmlore);

        LeatherArmorMeta l = (LeatherArmorMeta) ReaperHelmMeta;
        l.setColor(Color.GRAY);

        ReaperHelm.setDurability((short)-20);

        ReaperHelm.setItemMeta(ReaperHelmMeta);
        helm = ReaperHelm;
    }



    private static void createReaperChes() {
        // DEFINE THE META -------------
        ItemStack ReaperChes = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta ReaperChesMeta = ReaperChes.getItemMeta();


        // SET THE META ----------------
        ReaperChesMeta.setDisplayName("Reaper Chestplate");
            // ChesLore
        List<String> Cheslore = new ArrayList<>();
        Cheslore.add("");
        a.addAttributes(ReaperChes, 5, 8, 13, 13);
        Cheslore.add("");
        Cheslore.add(a.ability() + "PASSIVE SET BONUS: Translucence");
        Cheslore.add(ChatColor.GRAY + "Wearing this set of armor grants the");
        Cheslore.add(ChatColor.GRAY + "user's body some transparency causing");
        Cheslore.add(ChatColor.GRAY + "the opponent to have a 10% chance of");
        Cheslore.add(ChatColor.GRAY + "missing on atttempting to damage the user");
        Cheslore.add("");
        Cheslore.add(a.ability() + "INTERACT SET BONUS: Descendant of the Reaper");
        Cheslore.add(ChatColor.GRAY + "Shift and right click while facing the air");
        Cheslore.add(ChatColor.GRAY + "to get the ability to fly and turns you");
        Cheslore.add(ChatColor.GRAY + "invisible");
        Cheslore.add("");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Reaper armor passed down after a");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "legendary warrior slew death himself..");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "It is said that the weapon of death");
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "was also passed down");
        Cheslore.add("");
        Cheslore.add(a.legendary() + "LEGENDARY");
        ReaperChesMeta.setLore(Cheslore);

        LeatherArmorMeta l = (LeatherArmorMeta) ReaperChesMeta;
        l.setColor(Color.GRAY);


        ReaperChes.setItemMeta(ReaperChesMeta);
        chestplate = ReaperChes;
    }


    private static void createReaperLeg() {
        // DEFINE THE META -------------
        ItemStack ReaperLeg = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta ReaperLegMeta = ReaperLeg.getItemMeta();


        // SET THE META ----------------
        ReaperLegMeta.setDisplayName("Reaper Leggings");
            // HelmLore
        List<String> Leglore = new ArrayList<>();
        Leglore.add("");
        a.addAttributes(ReaperLeg, 1, 14, 20, 7);
        Leglore.add("");
        Leglore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Leglore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Leglore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Leglore.add(ChatColor.GRAY + "power of the Reaper lazui used to craft it");
        Leglore.add("");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Reaper Lazui granting");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the brittle");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of Reaper lazui...");
        Leglore.add("");
        Leglore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        ReaperLegMeta.setLore(Leglore);

        LeatherArmorMeta l = (LeatherArmorMeta) ReaperLegMeta;
        l.setColor(Color.GRAY);

        ReaperLeg.setItemMeta(ReaperLegMeta);
        helm = ReaperLeg;
    }


    private static void createReaperBoots() {
        // DEFINE THE META -------------
        ItemStack ReaperBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta ReaperBootsMeta = ReaperBoots.getItemMeta();


        // SET THE META ----------------
        ReaperBootsMeta.setDisplayName("Reaper Boots");
            // BootsLore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add("");
        a.addAttributes(ReaperBoots, 0, 6, 15, 5);
        Bootslore.add("");
        Bootslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "PASSIVE SET BONUS: INFINITE INTELLIGENCE");
        Bootslore.add(ChatColor.GRAY + "Once completing the set bonus of this armor,");
        Bootslore.add(ChatColor.GRAY + "+30 extra mana is granted due to the ancient");
        Bootslore.add(ChatColor.GRAY + "power of the Reaper lazui used to craft it");
        Bootslore.add("");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Armor made from Reaper Lazui granting");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "the wearer massive amounts of mana");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "but minimal defense due to the brittle");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "nature of Reaper lazui...");
        Bootslore.add("");
        Bootslore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        ReaperBootsMeta.setLore(Bootslore);

        LeatherArmorMeta l = (LeatherArmorMeta) ReaperBootsMeta;
        l.setColor(Color.GRAY);

        ReaperBoots.setItemMeta(ReaperBootsMeta);
        boots = ReaperBoots;
    }
}
