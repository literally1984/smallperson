package games.bnogocarft.bnogorpg.API.events.pickUpEvent;

import org.bukkit.entity.Entity;
import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import org.bukkit.inventory.ItemStack;

public class InventoryChangeEvent extends Event implements Cancellable {
    private Player p;
    private ItemStack item;
    private Event event;
    private boolean isCancelled;

    public InventoryChangeEvent(Player p, ItemStack item, Event event) {
        this.p = p;
        this.item = item;
        this.event = event;
        this.isCancelled = false;
    }

    public Entity getPlayer() {
        return this.p;
    }

    public ItemStack getItem() {
        return this.item;
    }

    public Event getEvent() {
        return this.event;
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
