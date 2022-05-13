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
        a.addAttributes(ReaperHelm, 4, 12, 8, 12, 13, 13);
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
        Helmlore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "was also passed down after the slaying");
        Helmlore.add("");
        Helmlore.add(a.legendary() + "LEGENDARY");
        ReaperHelmMeta.setLore(Helmlore);

        LeatherArmorMeta l = (LeatherArmorMeta) ReaperHelmMeta;
        l.setColor(Color.WHITE);

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
        a.addAttributes(ReaperChes, 8, 12, 24, 24, 24, 24);
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
        Cheslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "was also passed down after the slaying");
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
        a.addAttributes(ReaperLeg, 6, 9, 19, 19, 18, 18);
        Leglore.add("");
        Leglore.add(a.ability() + "PASSIVE SET BONUS: Translucence");
        Leglore.add(ChatColor.GRAY + "Wearing this set of armor grants the");
        Leglore.add(ChatColor.GRAY + "user's body some transparency causing");
        Leglore.add(ChatColor.GRAY + "the opponent to have a 10% chance of");
        Leglore.add(ChatColor.GRAY + "missing on atttempting to damage the user");
        Leglore.add("");
        Leglore.add(a.ability() + "INTERACT SET BONUS: Descendant of the Reaper");
        Leglore.add(ChatColor.GRAY + "Shift and right click while facing the air");
        Leglore.add(ChatColor.GRAY + "to get the ability to fly and turns you");
        Leglore.add(ChatColor.GRAY + "invisible");
        Leglore.add("");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Reaper armor passed down after a");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "legendary warrior slew death himself..");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "It is said that the weapon of death");
        Leglore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "was also passed down after the slaying");
        Leglore.add("");
        Leglore.add(a.legendary() + "LEGENDARY");
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
        a.addAttributes(ReaperBoots, 4, 8, 8, 8, 13, 13);
        Bootslore.add("");
        Bootslore.add(a.ability() + "PASSIVE SET BONUS: Translucence");
        Bootslore.add(ChatColor.GRAY + "Wearing this set of armor grants the");
        Bootslore.add(ChatColor.GRAY + "user's body some transparency causing");
        Bootslore.add(ChatColor.GRAY + "the opponent to have a 10% chance of");
        Bootslore.add(ChatColor.GRAY + "missing on atttempting to damage the user");
        Bootslore.add("");
        Bootslore.add(a.ability() + "INTERACT SET BONUS: Descendant of the Reaper");
        Bootslore.add(ChatColor.GRAY + "Shift and right click while facing the air");
        Bootslore.add(ChatColor.GRAY + "to get the ability to fly and turns you");
        Bootslore.add(ChatColor.GRAY + "invisible");
        Bootslore.add("");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Reaper armor passed down after a");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "Bootsendary warrior slew death himself..");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "It is said that the weapon of death");
        Bootslore.add(ChatColor.GRAY + "" + ChatColor.ITALIC + "was also passed down after the slaying");
        Bootslore.add("");
        Bootslore.add(a.legendary() + "LEGENDARY");
        ReaperBootsMeta.setLore(Bootslore);

        LeatherArmorMeta l = (LeatherArmorMeta) ReaperBootsMeta;
        l.setColor(Color.GRAY);

        ReaperBoots.setItemMeta(ReaperBootsMeta);
        boots = ReaperBoots;
    }
}
