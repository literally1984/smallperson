package tech.nully.primplug.Armor;

import java.util.HashMap;

import org.bukkit.entity.Player;
import org.bukkit.event.entity.EntityDamageEvent;

public class listener {
    public void armorDamage(EntityDamageEvent e) {
        if (e.getEntity() instanceof Player) {
            int rawDamage = e.getDamage();
            Player p = (Player) e.getEntity();
            if (p.getInventory().getHelmet() == PetheriteSet.helm) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.setHealth(p.getHealth() - finalDamage);
            }
        }
    }
}
