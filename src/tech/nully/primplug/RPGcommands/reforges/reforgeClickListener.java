package tech.nully.primplug.RPGcommands.reforges;

import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;

public class reforgeClickListener implements Listener{
    @EventHandler
    public void onReforgeClick(InventoryClickEvent e) {
        reforgeGUI r = new reforgeGUI();

        // checks if inventory is the reforge inventory
        if (e.getInventory() == r.inv) {
            ItemStack clickItem = e.getCurrentItem();
            ItemStack reforgeItem = r.inv.getItem(13);
            Player p = (Player) e.getWhoClicked();

            // If clicked item is not item in slot 13 (reforge item)
            if (!(clickItem.getItemMeta() == reforgeItem.getItemMeta())) {
                // If clicked item is the reforge anvil
                if (clickItem == baseMethods.reforgeAnvil) {
                    reforges re = new reforges();
                    re.reforgeName(reforgeItem);
                    p.playSound(p.getLocation(), Sound.ANVIL_USE, 100, 0);
                }
                e.setCancelled(true);
            }
        }
    }
}
