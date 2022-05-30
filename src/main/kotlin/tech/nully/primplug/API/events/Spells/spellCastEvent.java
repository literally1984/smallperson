package tech.nully.primplug.API.events.Spells;

import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import tech.nully.primplug.API.Spells.spellType;

public class spellCastEvent extends Event implements Cancellable {
    private Player player;
    private String spell;

    private spellType type;
    private int rawDamage;
    private boolean isCancelled;

    public spellCastEvent(Player player, String spell, spellType type, int rawDamage) {
        this.player = player;
        this.spell = spell;
        this.type = type;
        this.isCancelled = false;
    }

    public int getRawDamage() {
        return this.rawDamage;
    }

    public spellType getType() {
        return this.type;
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
