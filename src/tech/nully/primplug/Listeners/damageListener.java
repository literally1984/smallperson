package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;

import tech.nully.primplug.Armor.armorItems.PetheriteSet;

public class damageListener implements Listener{
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        if (e.getEntity() instanceof Player) {
            int rawDamage = e.getDamage();
            Player p = (Player) e.getEntity();


            String PlayerHelmet = p.getInventory().getChestplate().getItemMeta().getDisplayName();
            String PlayerChestplate = p.getInventory().getChestplate().getItemMeta().getDisplayName();
            String PlayerLeggings = p.getInventory().getChestplate().getItemMeta().getDisplayName();
            String PlayerBoots = p.getInventory().getChestplate().getItemMeta().getDisplayName();

            int finalTotalDamage = 0;
            if (PlayerHelmet.equals(PetheriteSet.helm.getItemMeta().getDisplayName())) {
                int finalHelmDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.sendMessage("You are wearing a petherite helmet and took damage");
                finalTotalDamage = finalTotalDamage + finalHelmDamage;
                
                p.sendMessage("Health subtract passed");
            }
            if (PlayerChestplate.equals(PetheriteSet.ches.getItemMeta().getDisplayName())) {
                int finalDamage = (int) Math.round(24 / (24 + 100));
                e.setCancelled(true);
                p.sendMessage("You are wearing a petherite Chesplate and took damage");
                p.setHealth(p.getHealth() - finalDamage);
                p.sendMessage("Health subtract passed");
            }
            if (PlayerLeggings.equals(PetheriteSet.leg.getItemMeta().getDisplayName())) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.sendMessage("You are wearing a petherite Leggings and took damage");
                p.setHealth(p.getHealth() - finalDamage);
                p.sendMessage("Health subtract passed");
            }
            if (PlayerBoots.equals(PetheriteSet.boots.getItemMeta().getDisplayName())) {
                int finalDamage = (int) Math.round(rawDamage*0.82);
                e.setCancelled(true);
                p.sendMessage("You are wearing a petherite Boots and took damage");
                p.setHealth(p.getHealth() - finalDamage);
                p.sendMessage("Health subtract passed");
            }
        }
    }
}
