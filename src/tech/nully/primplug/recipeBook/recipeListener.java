package tech.nully.primplug.recipeBook;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.RPGcommands.reforges.reforgeGUI;
import tech.nully.primplug.recipeBook.GUIs.armorGUI;

public class recipeListener implements Listener{
    @EventHandler
    public void onInventoryClick(InventoryClickEvent e) {
        reforgeGUI r = new reforgeGUI();
        ItemStack clickItem = e.getCurrentItem();
        if (clickItem == null) {
            return;
        }

        if (e.getInventory().getName().equals(r.inv.getName())) {
            baseMethods b = new baseMethods();
            armorGUI a = new armorGUI();
        }
    }
}
