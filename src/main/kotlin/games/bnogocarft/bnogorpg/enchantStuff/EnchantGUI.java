package games.bnogocarft.bnogorpg.enchantStuff;

import games.bnogocarft.bnogorpg.baseMethods;
import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import java.util.ArrayList;
import java.util.List;

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
        List<String> enchantLore = new ArrayList<String>();
        enchantLore.add(ChatColor.GRAY + "Put an Item into the Enchant slot");
        enchantLore.add(ChatColor.GRAY + "to be able to enchant it!");
        NoEnchants.setLore(enchantLore);

        ItemStack level2Enchant = new ItemStack(Material.EXP_BOTTLE);
        ItemMeta NoEnchants2 = NoEnchants.clone();

        level2Enchant.setItemMeta(NoEnchants2);

        ItemStack level3Enchant = new ItemStack(Material.EXP_BOTTLE);
        ItemMeta NoEnchants3 = NoEnchants.clone();

        level3Enchant.setItemMeta(NoEnchants3);


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
        inv.setItem(38, baseMethods.level1Enchant);
        inv.setItem(40, baseMethods.level2Enchant);
        inv.setItem(42, baseMethods.level3Enchant);


    }
}
