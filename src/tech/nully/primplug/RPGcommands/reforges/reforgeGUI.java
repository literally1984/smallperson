package tech.nully.primplug.RPGcommands.reforges;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;

import tech.nully.primplug.baseMethods;

public class reforgeGUI {
    public Inventory inv;
    public void openReforgeGUI(Player p) {
        inv = Bukkit.createInventory(null, 54, ChatColor.BLACK + "Reforge");
        baseMethods b = new baseMethods();
        b.makeBaseReforgeGUI(inv);
        p.openInventory(inv);
    }
}
