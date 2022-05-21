package tech.nully.primplug.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import tech.nully.primplug.API.PrimItems.PrimPlayer;

public class weaponEXPGainListener implements Listener {
    @EventHandler
    public void onEntityHit(EntityDamageEvent e) {
        if (e.getEntity() instanceof Player) {
            Player p = (Player) e.getEntity();
            PrimPlayer pl = new PrimPlayer(p);
        }
    }
}
