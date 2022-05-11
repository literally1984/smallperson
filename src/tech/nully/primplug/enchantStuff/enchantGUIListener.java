package tech.nully.primplug.enchantStuff;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.block.Block;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import java.util.ArrayList;
import java.util.List;

import static tech.nully.primplug.baseMethods.level1Enchant;

public class enchantGUIListener implements Listener {
    enchantMechanic ench = new enchantMechanic();

    @EventHandler
    public void onPlayerInteractAtEnchant(PlayerInteractEvent e) {
        if (e.getClickedBlock().getType() == Material.getMaterial(116)) {
            if (e.getAction() == Action.RIGHT_CLICK_BLOCK) {
                e.setCancelled(true);
            }

        }

    }

    @EventHandler
    public void onPlayerClickInEnchant(InventoryClickEvent e) {

        // checks if inventory name is Enchanting Table and within the double chest inventory range
        if (e.getInventory().getName().contains("Enchanting Table") &&
        e.getSlot() <= 53 && e.getSlot() >= 0 && e.getSlot() != 13) {
            e.setCancelled(true);
            if (e.getSlot() == 38) {
                ench.applyEnchants(e.getCurrentItem(), ench.getNeededEnchants(e.getCurrentItem()));
            }

            if (e.getSlot() == 40) {
                ench.applyEnchants(e.getCurrentItem(), ench.getNeededEnchants(e.getCurrentItem()));
            }

            if (e.getSlot() == 42) {
                ench.applyEnchants(e.getCurrentItem(), ench.getNeededEnchants(e.getCurrentItem()));
            }

            if (e.getSlot() == 13) {
                Inventory inv = e.getInventory();
                ItemMeta level1 = inv.getItem(38).getItemMeta();
                ItemMeta level2 = inv.getItem(40).getItemMeta();
                ItemMeta level3 = inv.getItem(42).getItemMeta();

                // checks after clicking if slot 13 is not empty
                if (e.getInventory().getItem(13) != null && enchantMethods.IsEnchantable(e.getInventory().getItem(13))) {
                    level1.setDisplayName(ChatColor.YELLOW + "Click to Enchant");
                    level1.setLore(ench.getNeededEnchants(e.getInventory().getItem(13)));
                    level2.setDisplayName(ChatColor.YELLOW + "Click to Enchant");
                    level2.setLore(ench.getNeededEnchants(e.getInventory().getItem(13)));
                    level3.setDisplayName(ChatColor.YELLOW + "Click to Enchant");
                    level3.setLore(ench.getNeededEnchants(e.getInventory().getItem(13)));
                } else {
                    EnchantGUI gui = new EnchantGUI();

                    level1.setDisplayName(gui.unavaliableDisplayName);
                    level1.setLore(gui.unavaliableLore());

                    level2.setDisplayName(gui.unavaliableDisplayName);
                    level2.setLore(gui.unavaliableLore());

                    level3.setDisplayName(gui.unavaliableDisplayName);
                    level3.setLore(gui.unavaliableLore());

                }
            }

        }
    }

}
