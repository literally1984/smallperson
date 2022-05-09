package tech.nully.primplug.Tools;

import org.bukkit.World;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.damageManager.getDamage;

public class toolAbilities implements Listener{
    @EventHandler
    public void onHit(EntityDamageEvent e) {
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

                if (damager.getItemInHand().getItemMeta().getDisplayName().equalsIgnoreCase("Bloodthirsty Blade")) {
                    ItemStack Idamage = damager.getItemInHand();
                    Idamage.setDurability((short) -3);
                    getDamage dmg = new getDamage();
                    dmg.setDamage(Idamage, 3);
                }
            }
        }
    }

    @EventHandler
    public void onAbilityUse(PlayerInteractEvent e) {e

        if (e.getAction() == Action.RIGHT_CLICK_AIR) {
            Player p = e.getPlayer();
            if (p.isSneaking() && p.getEyeLocation().getPitch() > 70 && p.getItemInHand().getItemMeta().getDisplayName().contains("Thunderbolt of Zeus")) {
                World world  = p.getWorld();
                world.strikeLightning(p.getLocation());
                world.createExplosion(p.getLocation().getX(), p.getLocation().getY(), p.getLocation().getZ(), 6, true, false);
            }
        }
    }
}
