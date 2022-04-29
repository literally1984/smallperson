package tech.nully.primplug;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class baseMethods {
    public ItemStack base = new ItemStack(Material.getMaterial(34));
    private ItemMeta baseMeta = base.hasItemMeta() ? base.getItemMeta() : Bukkit.getItemFactory().getItemMeta(base.getType());
    public boolean isOnArmorPage;
    public boolean isOnWeaponPage;
    public boolean isOnTalismanPage;
    public boolean isOnGunPage;
    public boolean isOnAbItemsPage;
    public static ItemMeta adMeta;
    public static ItemMeta acMeta;
    public Inventory inv;
    public static ItemMeta NCATMeta;
    public static ItemMeta PCATMeta;
    public static ItemMeta ArmIMeta;
    public static ItemMeta WeaIMeta;
    public static ItemMeta TalIMeta;
    public static ItemMeta GunMeta;
    public static ItemMeta AbIMeta;
    public ItemStack Page1;
    public ItemStack Page2;
    public ItemStack Page3;
    public ItemStack Page4;
    public ItemStack Page5;

    public static void init() {
        createBaseItems();
    }
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
        inv.setItem(0, base);
        inv.setItem(9, base);
        inv.setItem(18, base);
        inv.setItem(27, base);
        inv.setItem(36, base);
        inv.setItem(45, base);
        inv.setItem(8, base);
        inv.setItem(17, base);
        inv.setItem(26, base);
        inv.setItem(35, base);
        inv.setItem(44, base);
        inv.setItem(53, base);
    }

    //!Base GUI Items
    private static ItemStack prevCat;
    private static ItemStack armorItems;
    private static ItemStack weaponItems;
    private static ItemStack Talismans;
    private static ItemStack Guns;
    private static ItemStack nextCat;
    private static ItemStack prevPage;
    private static ItemStack nextPage;
    private static ItemStack AbilityItems;
    public static ItemStack reforgeAnvil;
    public static ItemStack level1Enchant;
    public static ItemStack level2Enchant;
    public static ItemStack level3Enchant;
    public static List<String> level1EnchantLore = new ArrayList<>();
    public static List<String> level2EnchantLore = new ArrayList<>();
    public static List<String> level3EnchantLore = new ArrayList<>();
    public static ItemStack damageUpgrade;
    public static ItemStack defenseUpgrade;
    public static ItemStack manaUpgrade;
    public static ItemStack staminaUpgrade;
    private static void createBaseItems() {
                // define the items that can be used in the GUI
                nextPage = new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData());
                acMeta = nextPage.getItemMeta();
        
                prevPage = new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData());
                adMeta = prevPage.getItemMeta();
        
                nextCat = new ItemStack(Material.WOOL, 1, DyeColor.RED.getDyeData());
                NCATMeta = nextCat.getItemMeta();
        
                prevCat = new ItemStack(Material.WOOL, 1, DyeColor.RED.getDyeData());
                PCATMeta = prevCat.getItemMeta();
        
                // Display items
        
                armorItems = new ItemStack(Material.DIAMOND_CHESTPLATE);
                ArmIMeta = armorItems.getItemMeta();
        
                weaponItems = new ItemStack(Material.DIAMOND_SWORD);
                WeaIMeta = weaponItems.getItemMeta();
        
                Talismans = new ItemStack(Material.DIAMOND_BLOCK);
                TalIMeta = Talismans.getItemMeta();
        
                Guns = new ItemStack(Material.DIAMOND_HOE);
                GunMeta = Guns.getItemMeta();
        
                AbilityItems = new ItemStack(Material.NETHER_STAR);
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


            // reforge anvil
                reforgeAnvil = new ItemStack(Material.ANVIL);
                ItemMeta reforgeAnvilMeta = reforgeAnvil.getItemMeta();
                reforgeAnvilMeta.setDisplayName(ChatColor.GOLD + "Reforge");
                List<String> reforgeAnvilLore = new ArrayList<>();
                reforgeAnvilLore.add(ChatColor.YELLOW + "Click to reforge your item");
                reforgeAnvilMeta.setLore(reforgeAnvilLore);
                reforgeAnvilMeta.addEnchant(Enchantment.DURABILITY, 10, false);
                reforgeAnvil.setItemMeta(reforgeAnvilMeta);

            // Enchant Items
                level1Enchant = new ItemStack(Material.ANVIL);
                ItemMeta level1EnchantMeta = level1Enchant.getItemMeta();
                level1EnchantMeta.setDisplayName(ChatColor.GOLD + "Level 9 Enchant");
                level1EnchantMeta.setLore(level1EnchantLore);
                level1Enchant.setItemMeta(level1EnchantMeta);

                level2Enchant = new ItemStack(Material.ANVIL);
                ItemMeta level2EnchantMeta = level1Enchant.getItemMeta();
                level1EnchantMeta.setDisplayName(ChatColor.GOLD + "Level 16 Enchant");
                level1EnchantMeta.setLore(level2EnchantLore);
                level1Enchant.setItemMeta(level2EnchantMeta);

                level3Enchant = new ItemStack(Material.ANVIL);
                ItemMeta level3EnchantMeta = level1Enchant.getItemMeta();
                level1EnchantMeta.setDisplayName(ChatColor.GOLD + "Level 30 Enchant");
                level1EnchantMeta.setLore(level3EnchantLore);
                level1Enchant.setItemMeta(level3EnchantMeta);
                
        // DamageUpgrade item
                damageUpgrade = new ItemStack(Material.DIAMOND_SWORD);
                ItemMeta damageUpgradeMeta = level1Enchant.getItemMeta();
                damageUpgradeMeta.setDisplayName(ChatColor.GOLD + "Upgrade Damage");
                List<String> damageUpgradeLore = new ArrayList<>();
                reforgeAnvilLore.add(ChatColor.YELLOW + "Click to upgrade the damage of");
                reforgeAnvilLore.add(ChatColor.YELLOW + "your item");
                damageUpgradeMeta.setLore(damageUpgradeLore);
                damageUpgradeMeta.addEnchant(Enchantment.DAMAGE_ALL, 10, false);
                damageUpgrade.setItemMeta(damageUpgradeMeta);
                
        // defense upgrade item
                defenseUpgrade = new ItemStack(Material.DIAMOND_CHESTPLATE);
                ItemMeta defenseUpgradeMeta = level1Enchant.getItemMeta();
                defenseUpgradeMeta.setDisplayName(ChatColor.GOLD + "Upgrade defense");
                List<String> defenseUpgradeLore = new ArrayList<>();
                reforgeAnvilLore.add(ChatColor.YELLOW + "Click to upgrade the damage of");
                reforgeAnvilLore.add(ChatColor.YELLOW + "your item");
                defenseUpgradeMeta.setLore(defenseUpgradeLore);
                damageUpgradeMeta.addEnchant(Enchantment.PROTECTION_ENVIRONMENTAL, 10, false);
                defenseUpgrade.setItemMeta(defenseUpgradeMeta);
        // mana upgrade item
                manaUpgrade = new ItemStack(Material.EXP_BOTTLE);
                ItemMeta manaUpgradeMeta = level1Enchant.getItemMeta();
                manaUpgradeMeta.setDisplayName(ChatColor.GOLD + "Upgrade mana");
                List<String> manaUpgradeLore = new ArrayList<>();
                reforgeAnvilLore.add(ChatColor.YELLOW + "Click to upgrade the damage of");
                reforgeAnvilLore.add(ChatColor.YELLOW + "your item");
                manaUpgradeMeta.setLore(manaUpgradeLore);
                damageUpgradeMeta.addEnchant(Enchantment.LOOT_BONUS_BLOCKS, 10, false);
                manaUpgrade.setItemMeta(manaUpgradeMeta);


                staminaUpgrade = new ItemStack(Material.COOKED_BEEF);
                ItemMeta staminaUpgradeMeta = level1Enchant.getItemMeta();
                staminaUpgradeMeta.setDisplayName(ChatColor.GOLD + "Upgrade stamina");
                List<String> staminaUpgradeLore = new ArrayList<>();
                reforgeAnvilLore.add(ChatColor.YELLOW + "Click to upgrade the damage of");
                reforgeAnvilLore.add(ChatColor.YELLOW + "your item");
                staminaUpgradeMeta.setLore(staminaUpgradeLore);
                damageUpgradeMeta.addEnchant(Enchantment.DURABILITY, 10, false);
                staminaUpgrade.setItemMeta(staminaUpgradeMeta);
    }

    //! base GUI
    public void openBaseGui(Inventory inv){
        
        makeMenu(inv);
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
    }




    public void makeBaseReforgeGUI(Inventory inv) {
        for (int i = 0; i < 54; i++) {
            inv.setItem(i, base);
        }
        for (int i = 0; i < 9; i++) {
            inv.setItem(i, new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData()));
        }
        for (int i = 45; i < 54; i++) {
            inv.setItem(i, new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData()));
        }
        inv.setItem(13, new ItemStack(Material.getMaterial(0)));
        inv.setItem(40, reforgeAnvil);
    }
    



    public boolean checkIsArmor(ItemStack item) {
        if (item.getType().toString().toLowerCase().contains("helmet") || 
        item.getType().toString().toLowerCase().contains("chestplate") || 
        item.getType().toString().toLowerCase().contains("leggings") || 
        item.getType().toString().toLowerCase().contains("boots")) {
            return true;
        } else {
        return false;
        }
    }




    public boolean checkIsWeapon(ItemStack item) {
        if (item.getType().toString().toLowerCase().contains("sword") || 
            item.getType().toString().toLowerCase().contains("axe")) {
            return true;
        } else {
        return false;
        }
    }
}