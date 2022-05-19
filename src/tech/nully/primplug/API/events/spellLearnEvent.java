package tech.nully.primplug.API.events;

import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;

public class spellLearnEvent extends Event implements Cancellable {
    private Player player;
    private String spell;
    private boolean isCancelled;

    public spellLearnEvent(Player player, String spell) {
        this.player = player;
        this.spell = spell;
        this.isCancelled = false;
    }

    public Player getPlayer() {
        return this.player;
    }

    public String getSpell() {
        return this.spell;
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
