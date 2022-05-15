package tech.nully.primplug.trade;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import tech.nully.primplug.baseMethods;

public class tradeGUIManager {
    baseMethods b = new baseMethods();
    public void openTradeGUI(Player p) {

        ItemStack counter = new ItemStack(Material.FIREBALL, 5);
        ItemStack accept = new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData());
        ItemStack decline = new ItemStack(Material.WOOL, 1, DyeColor.RED.getDyeData());
        // 0 1  2  3  4  5  6  7  8
        // 9 10 11 12 13 14 15 16 17
        // 18 19 20 21 22 23 24 25 26
        // 27 28 29 30 31 32 33 34 35
        // 36 37 38 39 40 41 42 43 44
        // 45 46 47 48 49 50 51 52 53
        Inventory inv = Bukkit.createInventory(null, 54, ChatColor.BLACK + "YOU               " + "OTHER");
        inv.setItem(4, b.base);
        inv.setItem(13, b.base);
        inv.setItem(22, b.base);
        inv.setItem(31, b.base);
        inv.setItem(40, b.base);
        inv.setItem(49, b.base);

        inv.setItem(48, counter);
        inv.setItem(50, counter);

        inv.setItem(45, decline);
        inv.setItem(46, accept);


    }
}
