package tech.nully.primplug.economy.bounty;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.PlayerDeathEvent;

public class BountyListener implements Listener {

    @EventHandler
    public void onPlayerSlainByPlayer(PlayerDeathEvent e) {
        if (e.getEntity().getLastDamageCause().equals(EntityDamageEvent.DamageCause.ENTITY_ATTACK)) {

        }
    }
}
