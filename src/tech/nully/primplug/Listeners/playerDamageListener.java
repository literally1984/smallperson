package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;

import tech.nully.primplug.defenseManager.defenseManager;

public class playerDamageListener implements Listener{
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        Player p = (Player) e.getEntity();
        int finalDamage;
        int pCurrentHealth;

        


        // defense calc
        defenseManager d = new defenseManager();
        int playerDefense = d.getdefense(p);
        int playerDefPerc = Math.round(100*(playerDefense)/(100*(playerDefense) + 100));
        int def = playerDefPerc/100;


        pCurrentHealth = p.getHealth();
        int damage = e.getDamage();
        e.setCancelled(true);
        finalDamage = damage - (damage*def);



        if (e.getEntity() instanceof Player) {
            
        }
    }
}
