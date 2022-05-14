package tech.nully.primplug.Listeners;

import org.bukkit.entity.*;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;

import tech.nully.primplug.Armor.setBonuses;
import tech.nully.primplug.damageManager.getDamage;
import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;
import tech.nully.primplug.playerStatManagers.magicDamageManager.magicDamageManager;

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
                Player damager = (Player) p.getLastDamageCause().getEntity();

                // defines damager as the entity that last damaged the player casted into a player
                getDamage dmg = new getDamage();
                finalDamage = finalDamage + d.getArmorDamage(damager) + dmg.getItemDamage(damager.getItemInHand());
            }
        }
        //bongo u need to fix this plz
    

        // victim defense manager
        if (event.getEntity() instanceof Player) {
            Player damaged = (Player) event.getEntity();
            if (event.getCause() == DamageCause.ENTITY_EXPLOSION && event.getEntity() instanceof TNTPrimed) {
                TNTPrimed tnt = (TNTPrimed) event.getEntity();
                magicDamageManager m = new magicDamageManager();
                if (m.checkTNTContains(tnt)) {
                    finalDamage = finalDamage + m.getActiveTNT(tnt);
                    m.removeTNT(tnt);
                }
            }


            setBonuses set = new setBonuses();

            // checks if the player has the "cac" set bnous
            if (set.getPlayerSetBonus(damaged).equals("cac")) {
                reflectedDamage = e.getDamage()/3;
            }
            if (d.checkDefMapContains((Player) event.getEntity())) {
                // gets the percentage that the damage needs to be multiplied by
                int playerDefense = d.getdefense(p);
                int playerDefPerc = Math.round((100 * (playerDefense)) / ((100 * (playerDefense)) + 100));
                int def = playerDefPerc/100;

                // does the final damage
                int damage = finalDamage;
                finalDamage = damage - (damage*def);
            }
        }

        e.setCancelled(true);
        LivingEntity damaged = (LivingEntity) event.getEntity();
        damaged.setHealth(damaged.getHealth() - finalDamage);
        if (event.getCause() == DamageCause.ENTITY_ATTACK) {


            //Checks if event-entity is a player
            if (p.getLastDamageCause().getEntity() instanceof Player) {
                Player damager = (Player) p.getLastDamageCause().getEntity();

                // defines damager as the entity that last damaged the player casted into a player
                int playerDefense = d.getdefense(damager);
                int playerDefPerc = Math.round((100 * (playerDefense)) / ((100 * (playerDefense)) + 100));
                int def = playerDefPerc/100;

                // does the final damage
                damager.setHealth(damager.getHealth() - (reflectedDamage - (finalDamage *def)));
                if (damaged instanceof Player) {
                    ((Player) damaged).sendMessage("You have been hit by" + damager.getDisplayName());
                }
            }
        }

        p.sendMessage("works yayy!!");
    }
}
