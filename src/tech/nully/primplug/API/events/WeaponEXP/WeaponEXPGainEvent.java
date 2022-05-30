package tech.nully.primplug.API.events.WeaponEXP;

import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import org.bukkit.inventory.ItemStack;

public class WeaponEXPGainEvent extends Event implements Cancellable {
    private final ItemStack item;
    private final int EXP;
    private final Player Owner;
    private boolean isCancelled;

    public WeaponEXPGainEvent(ItemStack EXPItem, int EXP, Player Owner) {
        this.item = EXPItem;
        this.EXP = EXP;
        this.Owner = Owner;
        this.isCancelled = false;
    }

    // creates getters for the private variables

    public ItemStack getItem() {
        return this.item;
    }

    public int getEXP() {
        return this.EXP;
    }

    public Player getOwner() {
        return this.Owner;
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
