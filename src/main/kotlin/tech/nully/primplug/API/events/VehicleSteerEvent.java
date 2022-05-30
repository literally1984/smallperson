package tech.nully.primplug.API.events;

import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;

public class VehicleSteerEvent extends Event implements Cancellable {

    private Player player;
    private String key;
    private boolean isCancelled;

    public VehicleSteerEvent(Player steerer, String key) {
        this.player = steerer;
        this.key = key;
        this.isCancelled = false;
    }

    public Player getPlayer() {
        return this.player;
    }

    public String getKey() {
        return this.key;
    }

    @Override
    public boolean isCancelled() {
        return this.isCancelled;
    }

    @Override
    public void setCancelled(boolean arg0) {
        this.isCancelled = arg0;
    }

    private static final HandlerList handlers = new HandlerList();

    @Override
    public HandlerList getHandlers() {
        return handlers;
    }

    public static HandlerList getHandlerList() {
        return handlers;
    }
}
