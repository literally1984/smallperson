package tech.nully.primplug.recipeBook;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class baseMethods {
    private ItemStack base = new ItemStack(Material.getMaterial(34));
    private ItemMeta baseMeta = base.hasItemMeta() ? base.getItemMeta() : Bukkit.getItemFactory().getItemMeta(base.getType());
    public boolean isOnArmorPage;
    public boolean isOnWeaponPage;
    public boolean isOnTalismanPage;
    public boolean isOnGunPage;
    public boolean isOnAbItemsPage;
    public ItemMeta adMeta;
    public ItemMeta acMeta;
    public Inventory inv;
    public ItemMeta NCATMeta;
    public ItemMeta PCATMeta;
    public ItemMeta ArmIMeta;
    public ItemMeta WeaIMeta;
    public ItemMeta TalIMeta;
    public ItemMeta GunMeta;
    public ItemMeta AbIMeta;
    public ItemStack Page1;
    public ItemStack Page2;
    public ItemStack Page3;
    public ItemStack Page4;
    public ItemStack Page5;
// !CRAFTING
    // Making the border for a crafting UI
    public void makeBaseCraft(Inventory inv) {
        baseMeta.setDisplayName("");
        base.setItemMeta(baseMeta);
        int[] edges = new int[]{
            0,1,2,3,4,5,6,7,8,
            9,13,14,15,16,17,
            18,22,23,25,26,
            27,31,32,33,34,35,
            36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53};
        inv.setItem(edges[0], base);
        inv.setItem(edges[1], base);
        inv.setItem(edges[2], base);
        inv.setItem(edges[3], base);
        inv.setItem(edges[4], base);
        inv.setItem(edges[5], base);
        inv.setItem(edges[6], base);
        inv.setItem(edges[7], base);
        inv.setItem(edges[8], base);
        inv.setItem(edges[9], base);
        inv.setItem(edges[10], base);
        inv.setItem(edges[11], base);
        inv.setItem(edges[12], base);
        inv.setItem(edges[13], base);
        inv.setItem(edges[14], base);
        inv.setItem(edges[15], base);
        inv.setItem(edges[16], base);
        inv.setItem(edges[17], base);
        inv.setItem(edges[18], base);
        inv.setItem(edges[19], base);
        inv.setItem(edges[20], base);
        inv.setItem(edges[21], base);
        inv.setItem(edges[22], base);
        inv.setItem(edges[23], base);
        inv.setItem(edges[24], base);
        inv.setItem(edges[25], base);
        inv.setItem(edges[26], base);
        inv.setItem(edges[27], base);
        inv.setItem(edges[28], base);
        inv.setItem(edges[29], base);
        inv.setItem(edges[30], base);
        inv.setItem(edges[31], base);
        inv.setItem(edges[32], base);
        inv.setItem(edges[33], base);
        inv.setItem(edges[34], base);
        inv.setItem(edges[35], base);
        inv.setItem(edges[36], base);
        inv.setItem(edges[37], base);
        inv.setItem(edges[38], base);
        inv.setItem(edges[39], base);
        inv.setItem(edges[40], base);
        inv.setItem(edges[41], base);
        inv.setItem(edges[42], base);
        inv.setItem(edges[43], base);

    }
//!menu
    // making the morder for a menu UI
    public void makeMenu(Inventory inv) {
        baseMeta.setDisplayName("");
        base.setItemMeta(baseMeta);
        int[] edges = new int[]{1,10,19,28,37,46,9,18,27,36,45,54};
        inv.setItem(edges[0], base);
        inv.setItem(edges[1], base);
        inv.setItem(edges[2], base);
        inv.setItem(edges[3], base);
        inv.setItem(edges[4], base);
        inv.setItem(edges[5], base);
        inv.setItem(edges[6], base);
        inv.setItem(edges[7], base);
        inv.setItem(edges[8], base);
        inv.setItem(edges[9], base);
        inv.setItem(edges[10], base);
        inv.setItem(edges[11], base);
        inv.setItem(edges[12], base);
    }
    public void openBaseGui(Player player){


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
        acMeta.setDisplayName("Next Page");
        nextPage.setItemMeta(acMeta);

        adMeta.setDisplayName("Previous Page");
        prevPage.setItemMeta(adMeta);

        ArmIMeta.setDisplayName("Armor");
        armorItems.setItemMeta(ArmIMeta);

        WeaIMeta.setDisplayName("Weapons");
        weaponItems.setItemMeta(WeaIMeta);

        TalIMeta.setDisplayName("Talismans");
        Talismans.setItemMeta(TalIMeta);

        GunMeta.setDisplayName("Guns");
        Guns.setItemMeta(GunMeta);

        AbIMeta.setDisplayName("Ability Items");
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
        player.openInventory(inv);
        player.sendMessage("Opened GUI!");
    }
}
