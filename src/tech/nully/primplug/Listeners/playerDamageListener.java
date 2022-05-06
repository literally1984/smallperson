package tech.nully.primplug.Listeners;

import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;

import tech.nully.primplug.damageManager.getDamage;
import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;

public class playerDamageListener implements Listener{
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        // define some stuff
        Player p = (Player) e.getEntity();
        int finalDamage = e.getDamage();
        int reflectedDamage = 0;
        defenseManager d = new defenseManager();


        EntityDamageEvent event = (EntityDamageEvent) e;

        // checks if the event cause is from an entity damaging
        if (event.getCause() == DamageCause.ENTITY_ATTACK) {


            //Checks if event-entity is a player
            if (p.getLastDamageCause().getEntity() instanceof Player) {

                // defines damager as the entity that last damaged the player casted into a player
                Player damager = (Player) p.getLastDamageCause().getEntity();
                finalDamage = finalDamage + d.getArmorDamage(damager) + getDamage.getItemDamage(damager.getItemInHand());
            }
        }



        if (event.getEntity() instanceof Player) {
            if (d.checkDefMapContains((Player) event.getEntity())) {
                // gets the percentage that the damage needs to be multiplied by
                int playerDefense = d.getdefense(p);
                int playerDefPerc = Math.round(100*(playerDefense)/(100*(playerDefense) + 100));
                int def = playerDefPerc/100;

                // does the final damage
                int damage = finalDamage;
                finalDamage = damage - (damage*def);
            }
        }

        e.setCancelled(true);
        LivingEntity damaged = (LivingEntity) event.getEntity();
        damaged.setHealth(damaged.getHealth() - finalDamage);
        p.sendMessage("works yayy!!");
    }
}
