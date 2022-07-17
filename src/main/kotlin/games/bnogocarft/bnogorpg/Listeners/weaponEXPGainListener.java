package games.bnogocarft.bnogorpg.Listeners;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import games.bnogocarft.bnogorpg.API.PrimItems.PrimPlayer;

public class weaponEXPGainListener implements Listener {
    @EventHandler
    public void OnSwordEXPGain(EntityDamageEvent e) {
        if (e.getEntity() instanceof Player) {
            Player p = (Player) e.getEntity();
            PrimPlayer pl = new PrimPlayer(p);
        }
    }
}
