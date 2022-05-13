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

public class undeadArmor {
    public static ItemStack helm;
    public static ItemStack chestplate;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createUndeadHelm();
        createUndeadChes();
        createUndeadLeg();
        createUndeadBoots();
    }
    
    private static baseAttributesAdder a = new baseAttributesAdder();
    
    private static void createUndeadHelm() {
         // DEFINE THE META -------------
        ItemStack UndeadHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta UndeadHelmMeta = UndeadHelm.getItemMeta();

        UndeadHelmMeta.setDisplayName("Undead Helmet");
            //Helmlore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("");
        a.addAttributes(UndeadHelm, 3, 3, 6, 14, 13, 15);
        Helmlore.add("");
        Helmlore.add("Armor made from the bones");
        Helmlore.add("of the damned. Spooky!");
        Helmlore.add("");
        Helmlore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Soul Stealer");
        Helmlore.add(ChatColor.ITALIC + "Steal 5% of the damage you deal");
        Helmlore.add(ChatColor.ITALIC + "from your opponent!");
        Helmlore.add("");
        Helmlore.add(ChatColor.BLUE + "EPIC");
        ((ItemMeta) UndeadHelm).setLore(Helmlore);

        LeatherArmorMeta l = (LeatherArmorMeta) UndeadHelmMeta;
        l.setColor(Color.BLACK);

        UndeadHelm.setDurability((short)-20);

        UndeadHelm.setItemMeta(UndeadHelmMeta);
        helm = UndeadHelm;
    }

    private static void createUndeadChes() {
        // DEFINE THE META -------------
        ItemStack UndeadChes = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta UndeadChesMeta = UndeadChes.getItemMeta();

        UndeadChesMeta.setDisplayName("Undead Chestplate");
            //Helmlore
        List<String> Cheslore = new ArrayList<>();
        Cheslore.add("");
        a.addAttributes(UndeadChes, 3, 3, 15, 17, 15, 15);
        Cheslore.add("");
        Cheslore.add("Armor made from the bones");
        Cheslore.add("of the damned. Spooky!");
        Cheslore.add("");
        Cheslore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Soul Stealer");
        Cheslore.add(ChatColor.ITALIC + "Steal 5% of the damage you deal");
        Cheslore.add(ChatColor.ITALIC + "from your opponent!");
        Cheslore.add("");
        Cheslore.add(ChatColor.BLUE + "EPIC");
        ((ItemMeta) UndeadChes).setLore(Cheslore);

        LeatherArmorMeta l = (LeatherArmorMeta) UndeadChesMeta;
        l.setColor(Color.BLACK);

        UndeadChes.setDurability((short)-20);

        UndeadChes.setItemMeta(UndeadChesMeta);
        chestplate = UndeadChes;

    }

    private static void createUndeadLeg() {
        // DEFINE THE META -------------
        ItemStack UndeadLeg = new ItemStack(Material.LEATHER_LEGGINGS);
        ItemMeta UndeadLegMeta = UndeadLeg.getItemMeta();

        UndeadLegMeta.setDisplayName("Undead Chestplate");
            //Helmlore
        List<String> Leglore = new ArrayList<>();
        Leglore.add("");
        a.addAttributes(UndeadLeg, 3, 3, 13, 15, 14, 15);
        Leglore.add("");
        Leglore.add("Armor made from the bones");
        Leglore.add("of the damned. Spooky!");
        Leglore.add("");
        Leglore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Soul Stealer");
        Leglore.add(ChatColor.ITALIC + "Steal 5% of the damage you deal");
        Leglore.add(ChatColor.ITALIC + "from your opponent!");
        Leglore.add("");
        Leglore.add(ChatColor.BLUE + "EPIC");
        ((ItemMeta) UndeadLeg).setLore(Leglore);

        LeatherArmorMeta l = (LeatherArmorMeta) UndeadLegMeta;
        l.setColor(Color.BLACK);

        UndeadLeg.setDurability((short)-20);

        UndeadLeg.setItemMeta(UndeadLegMeta);
        leg = UndeadLeg;
    }

    private static void createUndeadBoots() {
        // DEFINE THE META -------------
        ItemStack UndeadBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta UndeadBootsMeta = UndeadBoots.getItemMeta();

        UndeadBootsMeta.setDisplayName("Undead Chestplate");
            //Helmlore
        List<String> Bootslore = new ArrayList<>();
        Bootslore.add("");
        a.addAttributes(UndeadBoots, 3, 3, 6, 14, 13, 15);
        Bootslore.add("");
        Bootslore.add("Armor made from the bones");
        Bootslore.add("of the damned. Spooky!");
        Bootslore.add("");
        Bootslore.add(ChatColor.GOLD + "" + ChatColor.BOLD + "Full Set Bonus: Soul Stealer");
        Bootslore.add(ChatColor.ITALIC + "Steal 5% of the damage you deal");
        Bootslore.add(ChatColor.ITALIC + "from your opponent!");
        Bootslore.add("");
        Bootslore.add(ChatColor.BLUE + "EPIC");
        ((ItemMeta) UndeadBoots).setLore(Bootslore);

        LeatherArmorMeta l = (LeatherArmorMeta) UndeadBootsMeta;
        l.setColor(Color.BLACK);

        UndeadBoots.setDurability((short)-20);

        UndeadBoots.setItemMeta(UndeadBootsMeta);
        leg = UndeadBoots;
    }
}
