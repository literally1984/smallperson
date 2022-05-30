package tech.nully.primplug.API.events.WeaponEXP;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.entity.EntityDamageByEntityEvent;
import tech.nully.primplug.API.PrimItems.PrimItem;

public class WeaponEXPGainListener {

    @EventHandler
    // Creates a Listener for EntityDamageByEntityEvent
    public void OnSwordExpGain(EntityDamageByEntityEvent e) {
        if (e.getDamager() instanceof Player) {
            Player p = (Player) e.getDamager();
            if (PrimItem.isPrimItem(p.getItemInHand())) {
                PrimItem pi = new PrimItem(p.getItemInHand());
            }
        }
    }
}
