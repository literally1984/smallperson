package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEvent;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;
import tech.nully.primplug.playerStatManagers.manaManager.manaManager;
import tech.nully.primplug.playerStatManagers.staminaManager.staminaManager;

public class armorPutOnEvent implements Listener{
    public void setEverything(Player p) {
        manaManager m = new manaManager();
        staminaManager s = new staminaManager();
        defenseManager d = new defenseManager();
        m.setMaxMana(p);
        s.setMaxStamina(p);
        d.setMaxdefense(p);
        d.setMaxdefense(p);
    }

    @EventHandler
    public void armorPutOnByInv(InventoryClickEvent e) {
        baseMethods b = new baseMethods();
        // checks if the clicked slots are armor slots
        if (e.getSlot() == 100 || e.getSlot() == 101 || e.getSlot() == 102 || e.getSlot() == 103) {
            setEverything((Player) e.getWhoClicked());
        }

        if (b.checkIsArmor(e.getCurrentItem()) == true) {
            if (e.isShiftClick() == true) {
                setEverything((Player) e.getWhoClicked());
            }
        }
    }

    @EventHandler
    public void armorPutOnByInteract(PlayerInteractEvent i) {
        if (i.getAction() == Action.RIGHT_CLICK_AIR || i.getAction() == Action.RIGHT_CLICK_BLOCK) {
            baseMethods b = new baseMethods();
            if (b.checkIsArmor(i.getPlayer().getItemInHand())) {
                setEverything(i.getPlayer());
            }
        }
    }
    
}
