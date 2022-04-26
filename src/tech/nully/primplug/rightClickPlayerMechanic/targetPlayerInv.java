package tech.nully.primplug.rightClickPlayerMechanic;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

public class targetPlayerInv {
    public void getPlayerInv(Player p) {
        Inventory inv = Bukkit.createInventory(null, 54, ChatColor.GREEN + p.getDisplayName() + "'s" + "Specs");
        ItemStack playerWeapon = new ItemStack(Material.AIR);
        for (int i = 8; i > -1; i--) {
            if (p.getInventory().getItem(i).getItemMeta().getDisplayName().toLowerCase().contains("sword") || 
                p.getInventory().getItem(i).getItemMeta().getDisplayName().toLowerCase().contains("blade")) {
                    playerWeapon = p.getInventory().getItem(i);
                }
        }
        inv.setItem(10, p.getInventory().getHelmet());
        inv.setItem(19, p.getInventory().getChestplate());
        inv.setItem(28, p.getInventory().getLeggings());
        inv.setItem(37, p.getInventory().getBoots());
        inv.setItem(21, playerWeapon);
        p.openInventory(inv);
    }
}
