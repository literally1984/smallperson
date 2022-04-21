package tech.nully.primplug.RPGcommands.reforges;

import org.bukkit.ChatColor;
import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;

public class reforgeClickListener implements Listener{
    @EventHandler
    public void onInventoryClick(InventoryClickEvent e) {
        Player player = (Player) e.getWhoClicked();
        player.sendMessage("ya clicked ur inv lmao");
        reforgeGUI r = new reforgeGUI();
        ItemStack clickItem = e.getCurrentItem();


        // checks if inventory is the reforge inventory
        if (clickItem == null) {
            return;
        }
        if (e.getInventory().getName().equals(ChatColor.BLACK + "Reforge") &&  !(e.getCurrentItem() == e.getInventory().getItem(22)) || !(e.getInventory().getName().equals(player.getInventory().getName()))) {
            Player p = (Player) e.getWhoClicked();
            p.sendMessage("inventory check passed");
            e.setCancelled(true);
            ItemStack reforgeItem = r.inv.getItem(13);


            // If clicked item is not item in slot 13 (reforge item)
            if (!(clickItem.getItemMeta().getDisplayName().equals(reforgeItem.getItemMeta().getDisplayName()))) {

                p.sendMessage("Clickitem name passed");
                // If clicked item is the reforge anvil
                if (clickItem.getItemMeta().equals(baseMethods.reforgeAnvil.getItemMeta())) {
                    reforges re = new reforges();
                    re.reforgeName(reforgeItem);
                    p.playSound(p.getLocation(), Sound.ANVIL_USE, 100, 0);
                }
            }
        }
    }
}
