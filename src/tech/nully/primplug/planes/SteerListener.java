package tech.nully.primplug.planes;

import org.bukkit.entity.Minecart;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import tech.nully.primplug.API.events.VehicleSteerEvent;

public class SteerListener implements Listener {

    @EventHandler
    public void OnVehicleSteer(VehicleSteerEvent e) {

        if (!(e.getPlayer().getVehicle() instanceof Minecart)) {
            return;
        }
    }
}
