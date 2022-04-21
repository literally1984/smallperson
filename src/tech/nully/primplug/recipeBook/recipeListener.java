package tech.nully.primplug.recipeBook;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.RPGcommands.reforges.reforgeGUI;
import tech.nully.primplug.recipeBook.GUIs.armorGUI;

public class recipeListener implements Listener{
    @EventHandler
    public void onInventoryClick(InventoryClickEvent e) {
        reforgeGUI r = new reforgeGUI();
        if (e.getInventory().getName().equals(r.inv.getName())) {
            String clickItem = e.getCurrentItem().getItemMeta().getDisplayName();
            baseMethods b = new baseMethods();
            armorGUI a = new armorGUI();
        }
    }
}
