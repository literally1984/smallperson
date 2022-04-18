package tech.nully.primplug.recipeBook;

import org.bukkit.ChatColor;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.recipeBook.GUIs.armorGUI;

public class listener implements Listener{
    public void onInventoryClick(InventoryClickEvent e) {
        if (e.getInventory().getName().equalsIgnoreCase(ChatColor.GREEN + "Crafting")) {
            String clickItem = e.getCurrentItem().getItemMeta().getDisplayName();
            baseMethods b = new baseMethods();
            armorGUI a = new armorGUI();
            switch (clickItem) {
                case "Armor":
                    b.isOnArmorPage = true;
                    a.OpenArmor(e.getInventory());
                case "Weapons":
                    b.isOnArmorPage = true;
                    a.OpenArmor(e.getInventory());
                    
            }  
        }
    }
}
