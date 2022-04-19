package tech.nully.primplug.Armor;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;

public class listener implements Listener{
    @EventHandler
    public void armorDamage(EntityDamageEvent e) {
        if (e.getEntity() instanceof Player) {
            int rawDamage = e.getDamage();
            Player p = (Player) e.getEntity();
            if (p.getInventory().getHelmet() == PetheriteSet.helm) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.setHealth(p.getHealth() - finalDamage);
            }
            if (p.getInventory().getHelmet() == PetheriteSet.ches) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.setHealth(p.getHealth() - finalDamage);
            }
            if (p.getInventory().getHelmet() == PetheriteSet.leg) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.setHealth(p.getHealth() - finalDamage);
            }
            if (p.getInventory().getHelmet() == PetheriteSet.boots) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.setHealth(p.getHealth() - finalDamage);
            }
        }
    }
}
