package tech.nully.primplug.rightClickPlayerMechanic;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerInteractEntityEvent;

public class rightClickPlayer implements Listener {
    @EventHandler
    public void onPlayerShiftRC(PlayerInteractEntityEvent e) {
        if (e.getRightClicked() instanceof Player) {
            if (e.getPlayer().isSneaking() == true) {
                targetPlayerInv target = new targetPlayerInv();
                target.getPlayerInv((Player) e.getRightClicked());
                // adds a for loop
            }
        }
    }
}
