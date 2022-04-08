package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageByEntityEvent;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.Items.Armor.Drakon;

public class armorListeners implements Listener{
    @EventHandler
    public static void playerDamageEvent(EntityDamageEvent dmg) {
        EntityDamageByEntityEvent e = (EntityDamageByEntityEvent) dmg;
        ItemStack VictimHelm;
        ItemStack VictimChes;
        ItemStack VictimLeg;
        ItemStack VictimBoots;
        String DrakonHelmName = Drakon.helm.getItemMeta().getDisplayName();
        String DrakonChesName = Drakon.ches.getItemMeta().getDisplayName();
        String DrakonLegName = Drakon.leg.getItemMeta().getDisplayName();
        String DrakonBootsName = Drakon.boots.getItemMeta().getDisplayName();
        Player VPlayer;
        // Listener setup stuff
        // Use HelmName, ChesName, LegName, and BootsName to get the victim's armor set to compare
        if (e.getEntity() instanceof Player) {
            VPlayer = (Player) e.getEntity();
            VictimHelm = VPlayer.getInventory().getHelmet();
            VictimChes = VPlayer.getInventory().getChestplate();
            VictimLeg = VPlayer.getInventory().getLeggings();
            VictimBoots = VPlayer.getInventory().getBoots();
            String HelmName = VictimHelm.getItemMeta().getDisplayName();
            String ChesName = VictimChes.getItemMeta().getDisplayName();
            String LegName = VictimLeg.getItemMeta().getDisplayName();
            String BootsName = VictimBoots.getItemMeta().getDisplayName();
            if (DrakonHelmName.equals(HelmName)) {
                int drakonHelmProt = (int) Math.round(e.getDamage() * 0.16);
                e.setDamage(e.getDamage() - (drakonHelmProt));
            if (DrakonChesName.equals(ChesName)) {
                int drakonChesProt = (int) Math.round(e.getDamage() * 0.35);
                e.setDamage(e.getDamage() - (drakonChesProt));
                }
            if (DrakonLegName.equals(LegName)) {
                int drakonLegProt = (int) Math.round(e.getDamage() * 0.25);
                e.setDamage(e.getDamage() - (drakonLegProt));
                }
            if (DrakonBootsName.equals(BootsName)) {
                int drakonBootsProt = (int) Math.round(e.getDamage() * 0.16);
                e.setDamage(e.getDamage() - (drakonBootsProt));
                }
            }
        }                
    }
}


