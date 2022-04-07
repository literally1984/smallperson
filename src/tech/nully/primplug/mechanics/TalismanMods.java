package tech.nully.primplug.mechanics;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Items.Talisman;

public class TalismanMods implements Listener {
    static Player p;
    @EventHandler
    public static void OnRightClickTalisman(PlayerInteractEvent i) {
        p = i.getPlayer();
        ItemStack handItem = p.getItemInHand();
        ItemMeta handItemMeta = handItem.getItemMeta();
        // Listeners for right-click talismans
        // For Curse of despair
        if (p.getItemInHand().getType() == Material.RED_ROSE) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    if (handItemMeta.getDisplayName() == Talisman.BladeOfDespair.getItemMeta().getDisplayName()) {
                        // TODO MAKE IT ADD TO CONFIG THING
                        p.getInventory().remove(Talisman.BladeOfDespair);
                        p.sendMessage(ChatColor.YELLOW + "Successfully added your" + ChatColor.LIGHT_PURPLE + "" + ChatColor.BOLD + " Curse of Despair " + ChatColor.YELLOW + "Talisman to your Talisman Bag!");
                    }
            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                if (handItemMeta.getDisplayName() == Talisman.BladeOfDespair.getItemMeta().getDisplayName()) {
                    i.setCancelled(true);

                }
            }
        }
        // For Blessing of durability
        if (p.getItemInHand().getType() == Material.YELLOW_FLOWER) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    if (handItemMeta.getDisplayName() == Talisman.BlessingOfDurability.getItemMeta().getDisplayName()) {
                        // TODO MAKE IT ADD TO CONFIG THING
                        p.getInventory().remove(Talisman.BlessingOfDurability);
                        p.sendMessage(ChatColor.YELLOW + "Successfully added your" + ChatColor.LIGHT_PURPLE + "" + ChatColor.BOLD + " Blessing of Durability " + ChatColor.YELLOW + "Talisman to your Talisman Bag!");
                }
            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                if (handItemMeta.getDisplayName() == Talisman.BlessingOfDurability.getItemMeta().getDisplayName()) {
                    i.setCancelled(true);
                    }
                }
            }
    }
}
