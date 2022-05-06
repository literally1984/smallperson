package tech.nully.primplug.Tools;

import org.bukkit.World;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;

public class toolAbilities implements Listener{
    @EventHandler
    public void onZeusHit(EntityDamageEvent e) {
        EntityDamageEvent event = (EntityDamageEvent) e;

        // checks if the event damage cause is an entity attack
        if (event.getCause() == DamageCause.ENTITY_ATTACK) {

            Player p = (Player) event.getEntity();

            // checks if the last damage cause is a player
            if (p.getLastDamageCause().getEntity() instanceof Player) {
                Player damager = (Player) p.getLastDamageCause().getEntity();


                if (damager.getItemInHand().getItemMeta().getDisplayName().equalsIgnoreCase("Thunderbolt of Zeus")) {
                    World world  = p.getWorld();


                    // creates an explosion at the location of the damaged player that has a power of 1 and cannot damage blocks
                    world.createExplosion(p.getLocation().getX(), p.getLocation().getY(), p.getLocation().getZ(), 1, true, false);
                    world.strikeLightning(p.getLocation());
                }
            }
        }
    }
    
}
