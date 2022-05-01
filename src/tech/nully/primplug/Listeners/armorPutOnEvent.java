package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEvent;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.manaManager.manaManager;

public class armorPutOnEvent implements Listener{
    @EventHandler
    public void armorPutOnByInv(InventoryClickEvent e) {
        baseMethods b = new baseMethods();
        manaManager m = new manaManager();
        if (e.getSlot() == 100 || e.getSlot() == 101 || e.getSlot() == 102 || e.getSlot() == 103) {
            m.setMaxMana((Player) e.getWhoClicked());
        }

        if (b.checkIsArmor(e.getCurrentItem()) == true) {
            if (e.isShiftClick() == true) {
                m.setMaxMana((Player) e.getWhoClicked());
            }
        }
    }

    @EventHandler
    public void armorPutOnByInteract(PlayerInteractEvent i) {
        if (i.getAction() == Action.RIGHT_CLICK_AIR || i.getAction() == Action.RIGHT_CLICK_BLOCK) {
            baseMethods b = new baseMethods();
            if (b.checkIsArmor(i.getPlayer().getItemInHand())) {
                manaManager m = new manaManager();
                m.setMaxMana(i.getPlayer());
            }
        }
    }
    
}
