package tech.nully.primplug.API.events.WeaponEXP;

import org.bukkit.entity.Player;
import org.bukkit.event.Cancellable;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import org.bukkit.inventory.ItemStack;

public class WeaponEXPLevelUpEvent extends Event implements Cancellable {

    private final ItemStack item;
    private final int oldExp;
    private final Player Owner;
    private final int NewLevel;
    private final int newExp;
    private final int levelUpAmount;
    private boolean isCancelled;

    public WeaponEXPLevelUpEvent(ItemStack EXPItem, int oldExp, Player Owner, int NewLevel, int newExp, int levelUpAmount) {
        this.item = EXPItem;
        this.oldExp = oldExp;
        this.Owner = Owner;
        this.NewLevel = NewLevel;
        this.newExp = newExp;
        this.levelUpAmount = levelUpAmount;
        this.isCancelled = false;
    }
    // Creates getters and setters

    public ItemStack getItem() {
        return this.item;
    }

    public int getOldExp() {
        return this.oldExp;
    }

    public Player getOwner() {
        return this.Owner;
    }

    public int getNewLevel() {
        return this.NewLevel;
    }

    public int getNewExp() {
        return this.newExp;
    }

    public int getLevelUpAmount() {
        return this.levelUpAmount;
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
