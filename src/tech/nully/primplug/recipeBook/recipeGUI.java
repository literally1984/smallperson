package tech.nully.primplug.recipeBook;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Items.Armor.Drakon;

public class recipeGUI {
    public static ItemMeta adMeta;
    public static ItemMeta acMeta;
    public static Inventory inv;
    public static ItemMeta NCATMeta;
    public static ItemMeta PCATMeta;
    public static ItemMeta ArmIMeta;
    public static ItemMeta WeaIMeta;
    public static ItemMeta TalIMeta;
    public static ItemMeta GunMeta;
    public static ItemMeta AbIMeta;
    public static ItemStack Page1;
    public static ItemStack Page2;
    public static ItemStack Page3;
    public static ItemStack Page4;
    public static ItemStack Page5;
    public void openGui(Player player){


        inv = Bukkit.createInventory(null, 54, ChatColor.DARK_GREEN + "Crafting");
    
        // define the items that can be used in the GUI
        ItemStack nextPage = new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData());
        acMeta = nextPage.getItemMeta();

        ItemStack prevPage = new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData());
        adMeta = prevPage.getItemMeta();

        ItemStack nextCat = new ItemStack(Material.WOOL, 1, DyeColor.RED.getDyeData());
        NCATMeta = nextCat.getItemMeta();

        ItemStack prevCat = new ItemStack(Material.WOOL, 1, DyeColor.RED.getDyeData());
        PCATMeta = prevCat.getItemMeta();

        // Display items

        ItemStack armorItems = new ItemStack(Material.DIAMOND_CHESTPLATE);
        ArmIMeta = armorItems.getItemMeta();

        ItemStack weaponItems = new ItemStack(Material.DIAMOND_SWORD);
        WeaIMeta = weaponItems.getItemMeta();

        ItemStack Talismans = new ItemStack(Material.DIAMOND_BLOCK);
        TalIMeta = Talismans.getItemMeta();

        ItemStack Guns = new ItemStack(Material.DIAMOND_HOE);
        GunMeta = Guns.getItemMeta();

        ItemStack AbilityItems = new ItemStack(Material.NETHER_STAR);
        AbIMeta = AbilityItems.getItemMeta();

        // Page changers
        acMeta.setDisplayName(ChatColor.GREEN + "Next Page");
        nextPage.setItemMeta(acMeta);

        adMeta.setDisplayName(ChatColor.GREEN + "Previous Page");
        prevPage.setItemMeta(adMeta);

        ArmIMeta.setDisplayName(ChatColor.YELLOW + "Armor");
        armorItems.setItemMeta(ArmIMeta);

        WeaIMeta.setDisplayName(ChatColor.YELLOW + "Weapons");
        weaponItems.setItemMeta(WeaIMeta);

        TalIMeta.setDisplayName(ChatColor.YELLOW + "Talismans");
        Talismans.setItemMeta(TalIMeta);

        GunMeta.setDisplayName(ChatColor.YELLOW + "Guns");
        Guns.setItemMeta(GunMeta);

        AbIMeta.setDisplayName(ChatColor.YELLOW + "Ability Items");
        AbilityItems.setItemMeta(AbIMeta);
        
        baseMethods b = new baseMethods();
        b.makeMenu(inv);


        // top row
        inv.setItem(1, prevCat);
        inv.setItem(2, armorItems);
        inv.setItem(3, weaponItems);
        inv.setItem(4, Talismans);
        inv.setItem(5, Guns);
        inv.setItem(6, AbilityItems);
        inv.setItem(7, nextCat);
        //bottom row
        inv.setItem(46, prevPage);
        inv.setItem(52, nextPage);
        // items
        inv.setItem(10, Drakon.helm);

        player.openInventory(inv);
        player.sendMessage("Opened GUI!");
    }
}
