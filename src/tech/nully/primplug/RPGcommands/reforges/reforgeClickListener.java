package tech.nully.primplug.RPGcommands.reforges;

import org.bukkit.Material;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;

public class reforgeClickListener implements Listener{
    @EventHandler
    public void onReforgeClick(InventoryClickEvent e) {
        reforgeGUI r = new reforgeGUI();

        // checks if clicked item is anvil
        if (e.getInventory() == r.inv) {
            baseMethods b = new baseMethods();
            if (!(e.getCurrentItem() == new ItemStack(Material.ANVIL)) || !(e.getCurrentItem() == b.base)) {

            // checks if the inventory is the reforge inventory
                if (e.getCurrentItem() == new ItemStack(Material.ANVIL)) {

                    // checks if the reforege slot is not air
                    if (!(r.inv.getItem(13) == new ItemStack(Material.AIR))) {
                        ItemStack rItem = r.inv.getItem(13);

                        // checks if the reforge item is a armor piece or weapon
                        if (b.checkIsArmor(rItem) == true || b.checkIsWeapon(rItem) == true) {
                            reforges reforge = new reforges();
                            reforge.reforgeName(rItem);
                            }
                    }
                }
            }
        }
    }
}
