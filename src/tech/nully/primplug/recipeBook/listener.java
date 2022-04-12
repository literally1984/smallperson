package tech.nully.primplug.recipeBook;

import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.meta.ItemMeta;

public class listener implements Listener{
    public void onInventoryClick(InventoryClickEvent e) {
        recipeGUI gui = new recipeGUI();
        String clickItem = e.getCurrentItem().getItemMeta().getDisplayName();
        switch (clickItem) {
            case "Armor":
        }
    }
}
