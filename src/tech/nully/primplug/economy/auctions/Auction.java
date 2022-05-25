package tech.nully.primplug.economy.auctions;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import tech.nully.primplug.economy.Time;

public class Auction {
    private Player Auctioner;
    private int startingbid;
    private ItemStack AucItem;
    private Time TimeLeft;

    public Auction(Player Auctioner, int startingbid, ItemStack AucItem, Time timeLeft) {
        this.Auctioner = Auctioner;
        this.startingbid = startingbid;
        this.AucItem = AucItem;
        this.TimeLeft = timeLeft;
    }

    public Player getPlayer() {
        return this.Auctioner;
    }

    public int getStartingBid() {
        return startingbid;
    }

    public ItemStack getItem() {
        return this.AucItem;
    }

    public Time getTimeLeft() {
        return this.TimeLeft;
    }
}
