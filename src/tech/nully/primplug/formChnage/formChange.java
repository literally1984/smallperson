package tech.nully.primplug.formChnage;

import org.bukkit.entity.Player;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;

public class formChange implements Listener {
    public void changeForm(PlayerInteractEvent e) {
        if (e.getAction() == Action.RIGHT_CLICK_AIR) {
            if (e.getPlayer().isSneaking()) {
                
            }
        }
    }
    
}
