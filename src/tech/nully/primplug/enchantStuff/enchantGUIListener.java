package tech.nully.primplug.enchantStuff;

import org.bukkit.Material;
import org.bukkit.block.Block;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEvent;

public class enchantGUIListener implements Listener {
    enchantMechanic ench = new enchantMechanic();

    @EventHandler
    public void onPlayerInteractAtEnchant(PlayerInteractEvent e) {
        if (e.getClickedBlock().getType() == Material.getMaterial(116)) {
            if (e.getAction() == Action.RIGHT_CLICK_BLOCK) {

            }

        }

    }

    @EventHandler
    public void onPlayerClickInEnchant(InventoryClickEvent e) {

        // checks if inventory name is Enchanting Table and within the double chest inventory range
        if (e.getInventory().getName().contains("Enchanting Table") &&
        e.getSlot() < 54 && e.getSlot() > -1 && e.getSlot() != 13) {
            e.setCancelled(true);
            if (e.getSlot() == 38) {
                ench.applyEnchants(e.getCurrentItem(), ench.getNeededEnchants(e.getCurrentItem()));
            }
        }
    }

}
