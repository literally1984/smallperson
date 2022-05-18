package tech.nully.primplug.magic.events;

import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import org.bukkit.inventory.ItemStack;

import java.util.List;

public class formSwitchEvent extends Event implements Cancellable {
    private Player player;
    private boolean form;

    private List<ItemStack> hotbar;

    private List<String> spells;
    private boolean isCancelled;

    public formSwitchEvent(Player player, boolean isInBattleForm, List<ItemStack> hotbar, List<String> spells) {
        this.player = player;
        this.form = isInBattleForm;
        this.hotbar = hotbar;
        this.spells = spells;
        this.isCancelled = false;
    }

    public Player getPlayer() {
        return this.player;
    }

    public List<ItemStack> getBeforeHotbar() {
        return this.hotbar;
    }

    public boolean getForm() {
        return this.form;
    }

    public List<String> getSpells() {
        return this.spells;
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
