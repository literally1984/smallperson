package tech.nully.primplug.Items;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class Talisman {

    public static ItemStack BladeOfDespair;

    public static void init() {
        createBOD();
    }

    private static void createBOD() {
        // DEFINE THE META -------------
        ItemStack BOD = new ItemStack(Material.RED_ROSE);
        ItemMeta BODMeta = (ItemMeta) BOD.getItemMeta();
        // SET THE META ----------------
        BODMeta.setDisplayName(ChatColor.BLUE+"[TALISMAN]"+ChatColor.WHITE+" Curse of Despair");
            // Lore ----------------------------------------------------
        List<String> BODlore = new ArrayList<>();
        BODlore.add(ChatColor.DARK_BLUE + "" + ChatColor.ITALIC + "It is said that strongest of wills have");
        BODlore.add(ChatColor.DARK_BLUE + "" + ChatColor.ITALIC + "have been shattered by this curse. Once,");
        BODlore.add(ChatColor.DARK_BLUE + "" + ChatColor.ITALIC + "a Legendary warrior of the ages used it");
        BODlore.add("");
        BODlore.add(ChatColor.RED + "Passive:");
        BODlore.add(ChatColor.WHITE + "Increases attack damage by 15%");
        BODlore.add("");
        BODlore.add(ChatColor.GOLD + "Right-Click ability: Bloodthirst");
        BODlore.add(ChatColor.WHITE + "Increases your attack damage by 50% and");
        BODlore.add(ChatColor.WHITE + "lifesteal by 25%");
        BODMeta.setLore(BODlore);

        // Glowing effect

        BODMeta.addEnchant(Enchantment.ARROW_DAMAGE, 1, false);

        BOD.setItemMeta(BODMeta);
        BladeOfDespair = BOD;
    }


    private static void createBOS() {
        // DEFINE THE META -------------
        ItemStack BOD = new ItemStack(Material.RED_ROSE);
        ItemMeta BODMeta = (ItemMeta) BOD.getItemMeta();
        // SET THE META ----------------
        BODMeta.setDisplayName(Color.BLUE+"[TALISMAN]"+Color.WHITE+" Blessing of Durability");
            // Lore ----------------------------------------------------
        List<String> BODlore = new ArrayList<>();
        BODlore.add(ChatColor.DARK_BLUE + "" + ChatColor.ITALIC + "It is said that strongest of wills have");
        BODlore.add(ChatColor.DARK_BLUE + "" + ChatColor.ITALIC + "have been shattered by this blade. Once,");
        BODlore.add(ChatColor.DARK_BLUE + "" + ChatColor.ITALIC + "a Legendary warrior of the ages wielded it");
        BODlore.add("");
        BODlore.add(ChatColor.RED + "Passive:");
        BODlore.add(ChatColor.WHITE + "Increases attack damage by 15%");
        BODlore.add("");
        BODlore.add(ChatColor.GOLD + "Right-Click ability: Bloodthirst");
        BODlore.add(ChatColor.WHITE + "Increases your attack damage by 50% and");
        BODlore.add(ChatColor.WHITE + "lifesteal by 25%");
        BODMeta.setLore(BODlore);

        // Glowing effect

        BODMeta.addEnchant(Enchantment.ARROW_DAMAGE, 1, false);

        BOD.setItemMeta(BODMeta);
        BladeOfDespair = BOD;
    }
}