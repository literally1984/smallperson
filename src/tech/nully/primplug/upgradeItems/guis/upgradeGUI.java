package tech.nully.primplug.upgradeItems.guis;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import tech.nully.primplug.baseMethods;

public class upgradeGUI {
    public Inventory inv;
    public void openUpgradeGUI(Player p) {
        inv = Bukkit.createInventory(null, 54, ChatColor.BLACK + "Item Upgrades");
        baseMethods b = new baseMethods();
        for (int i = 0; i < 54; i++) {
            inv.setItem(i, b.base);
        }
        inv.setItem(22, new ItemStack(Material.AIR));
        inv.setItem(11, baseMethods.damageUpgrade);
        inv.setItem(15, baseMethods.defenseUpgrade);
        inv.setItem(29, baseMethods.manaUpgrade);
        inv.setItem(33, baseMethods.staminaUpgrade);
        p.openInventory(inv);
    }
}
