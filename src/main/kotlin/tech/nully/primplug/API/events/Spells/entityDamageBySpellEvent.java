package tech.nully.primplug.API.events.Spells;

import org.bukkit.entity.Entity;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;

public class entityDamageBySpellEvent extends Event implements Cancellable {
    private Entity damaged;
    private String spell;
    private int damage;
    private boolean isCancelled;

    public entityDamageBySpellEvent(Entity damaged, String spell, int damage) {
        this.damaged = damaged;
        this.spell = spell;
        this.damage = damage;
        this.isCancelled = false;
    }

    public Entity getPlayer() {
        return this.damaged;
    }

    public String getSpell() {
        return this.spell;
    }

    public int getDamage() {
        return this.damage;
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
