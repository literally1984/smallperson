package tech.nully.primplug.enchantStuff;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import tech.nully.primplug.baseMethods;

import java.util.ArrayList;
import java.util.List;

import static tech.nully.primplug.baseMethods.*;

public class EnchantGUI {
    public static ItemStack LVL1Enchant;
    public static ItemStack LVL2Enchant;
    public static ItemStack LVL3Enchant;

    public static void init() {
        createEnchantItems();
    }


    public String unavaliableDisplayName = "There are no items in the Enchanting Slot";
    public List<String> unavaliableLore() {
        List<String> enchantLore = new ArrayList<String>();
        enchantLore.add(ChatColor.GRAY + "Put an Item into the Enchant slot");
        enchantLore.add(ChatColor.GRAY + "to be able to enchant it!");
        return enchantLore;
    }

    private static void createEnchantItems() {
        ItemStack level1Enchant = new ItemStack(Material.EXP_BOTTLE);
        ItemMeta NoEnchants = level1Enchant.getItemMeta();

        NoEnchants.setDisplayName("There are no items in the Enchanting Slot");
        List<String> enchantLore = NoEnchants.getLore();
        enchantLore.add(ChatColor.GRAY + "Put an Item into the Enchant slot");
        enchantLore.add(ChatColor.GRAY + "to be able to enchant it!");
        NoEnchants.setLore(enchantLore);

        ItemStack level2Enchant = new ItemStack(Material.EXP_BOTTLE);
        ItemMeta NoEnchants2 = level1Enchant.getItemMeta();

        NoEnchants.setDisplayName("There are no items in the Enchanting Slot");
        List<String> enchantLore2 = enchantLore;
        NoEnchants.setLore(enchantLore);

        ItemStack level3Enchant = new ItemStack(Material.EXP_BOTTLE);
        ItemMeta NoEnchants3 = level1Enchant.getItemMeta();

        NoEnchants.setDisplayName("There are no items in the Enchanting Slot");
        List<String> enchantLore3 = enchantLore;
        NoEnchants.setLore(enchantLore);


        level1Enchant = LVL1Enchant;
        level2Enchant = LVL2Enchant;
        level3Enchant = LVL3Enchant;
    }

    // creates a method that opens a enchant GUI to player


    public void openEnchant() {
        // makes a new inventory object called EnchantGUI
        Inventory inv = Bukkit.createInventory(null, 54, ChatColor.BLUE + "Enchanting Table");

        baseMethods b = new baseMethods();

        for (int i = 0; i <54; i++) {
            inv.setItem(i, b.base);
        }


        inv.setItem(13, new ItemStack(Material.AIR));
        inv.setItem(38, level1Enchant);
        inv.setItem(40, level2Enchant);
        inv.setItem(42, level3Enchant);


    }
}
