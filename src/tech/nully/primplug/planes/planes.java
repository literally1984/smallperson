package tech.nully.primplug.planes;

import org.bukkit.entity.Player;
import org.bukkit.event.Listener;
import org.bukkit.event.EventHandler;

import net.lax1dude.util.event.PlayerVehicleInputEvent;

public class planes implements Listener{
    @EventHandler
    public static void PlayerVehicleInputEvent(PlayerVehicleInputEvent e) {
        Player p = e.getPlayer();
        if (e.getX() > 0) {
            System.out.println("You are going towards Positive X");
        if (e.getX() < 0) {
            System.out.println("You are going towards Negative X");
        }
        }
    }
    
}
