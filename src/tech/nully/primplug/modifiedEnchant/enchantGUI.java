package tech.nully.primplug.modifiedEnchant;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;

import tech.nully.primplug.baseMethods;

public class enchantGUI {
    public void openEnchantGUI(Player p) {
        Inventory inv = Bukkit.createInventory(null, 54, ChatColor.AQUA + "Enchanting Table");
        baseMethods b = new baseMethods();
        for (int i = 0; i < 54; i++) {
            inv.setItem(i, b.base);
        }
        int[] possibleLevel2 = {1, 2};
        int[] possibleLevels3 = {1, 2, 3};
        int[] possibleLevels5 = {1, 2, 3, 4, 5};


        String[] possibleSwordEnchants = {"Bane of Arthropods", "Smite", "Sharpness", "Fire Aspect", "Knockback", "Looting", "Unbreaking"};
        String[] possibleAxeEnchants = {"Efficiency", "Silk Touch", "Unbreaking", "Sharpness"};
        String[] possiblePickEnchants = {"Bane of Arthropods", "Fortune", "Silk Touch", "Efficency"};
        String[] possibleHoeEnchants = {"Bane of Arthropods", "Smite", "Sharpness", "Fire Aspect"};
        String[] possibleHelmEnchants = {"Bane of Arthropods", "Smite", "Sharpness", "Fire Aspect"};
        String[] possibleChesEnchants = {"Bane of Arthropods", "Smite", "Sharpness", "Fire Aspect"};
        String[] possibleLegEnchants = {"Bane of Arthropods", "Smite", "Sharpness", "Fire Aspect"};
        String[] possibleBootEnchants = {"Bane of Arthropods", "Smite", "Sharpness", "Fire Aspect"};
        String[][] possibleEnchants1 = {possibleSwordEnchants, };


        baseMethods.level1EnchantLore.add("");
        inv.setItem(37, baseMethods.level1Enchant);

    }
}