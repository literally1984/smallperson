package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;

import tech.nully.primplug.defenseManager.defenseListener;

public class playerDamageListener implements Listener{
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        if (e.getEntity() instanceof Player) {
            Player p = (Player) e.getEntity();

            defenseListener d = new defenseListener();
            int playerDefense = d.getdefense(p);


            int pCurrentHealth = p.getHealth();
            int damage = e.getDamage();
            e.setCancelled(true);
            int finalDamage = damage - (e.getDamage()*playerDefense);
            p.setHealth(pCurrentHealth - finalDamage);
        }
    }
}
