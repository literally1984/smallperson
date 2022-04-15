package tech.nully.primplug.phones;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;

public class phoneListener implements Listener {
    @EventHandler
    public void listener(PlayerInteractEvent e) {
        Player p = e.getPlayer();
        boolean isInPhone = false;
        if (p.getItemInHand() == phone.epikPhone) {
            if (e.getAction() == Action.RIGHT_CLICK_AIR && e.getAction() == Action.RIGHT_CLICK_BLOCK) {
                ItemStack PlayerInvSlot1 = p.getInventory().getItem(0);
                ItemStack PlayerInvSlot2 = p.getInventory().getItem(1);
                ItemStack PlayerInvSlot3 = p.getInventory().getItem(2);
                ItemStack PlayerInvSlot4 = p.getInventory().getItem(3);
                ItemStack PlayerInvSlot5 = p.getInventory().getItem(4);
                ItemStack PlayerInvSlot6 = p.getInventory().getItem(5);
                ItemStack PlayerInvSlot7 = p.getInventory().getItem(6);
                ItemStack PlayerInvSlot8 = p.getInventory().getItem(7);
                ItemStack PlayerInvSlot9 = p.getInventory().getItem(8);
                if (isInPhone == false) {
                    isInPhone = true;
                    p.getInventory().setItem(0, phone.epikPhone);
                    p.getInventory().setItem(1, phoneitems.msges);
                    p.getInventory().setItem(2, phoneitems.PornHub);
                }
                if (isInPhone == true) {
                    isInPhone = false;
                    p.getInventory().setItem(0, PlayerInvSlot1);
                    p.getInventory().setItem(1, PlayerInvSlot2);
                    p.getInventory().setItem(2, PlayerInvSlot3);
                    p.getInventory().setItem(3, PlayerInvSlot4);
                    p.getInventory().setItem(4, PlayerInvSlot5);
                    p.getInventory().setItem(5, PlayerInvSlot6);
                    p.getInventory().setItem(6, PlayerInvSlot7);
                    p.getInventory().setItem(7, PlayerInvSlot8);
                    p.getInventory().setItem(8, PlayerInvSlot9);
                }
            }
            
        }
    }
}