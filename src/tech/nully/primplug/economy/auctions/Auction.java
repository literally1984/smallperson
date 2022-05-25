package tech.nully.primplug.economy.auctions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.economy.Time;

public class Auction {
    private Player Auctioner;
    private int startingbid;
    private ItemStack AucItem;
    private Time TimeLeft;

    private Player highestBidder;
    private int highestBid;

    public Auction(Player Auctioner, int startingbid, ItemStack AucItem, Time timeLeft) {
        this.Auctioner = Auctioner;
        this.startingbid = startingbid;
        this.AucItem = AucItem;
        this.TimeLeft = timeLeft;
        this.highestBidder = null;
        this.highestBid = 0;
    }

    public void setBid(Player bidder, int amount) {
        if (amount > this.highestBid) {
            this.highestBidder = bidder;
            this.highestBid = amount;
        }
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

    public Player getHighestBidder() {
        return this.highestBidder;
    }
    
    public static void sortAuctions() {
        List<Long> times = new ArrayList<>();
        for (long l : AuctionCommand.auctions.keySet()) {
            times.add(l);
        }
        Long[] timesArr = null;
        timesArr = times.toArray(timesArr);
        Arrays.sort(timesArr);
        HashMap<Long, Auction> newAuctions = new HashMap<Long, Auction>();
        for (Long timez : timesArr) {
            newAuctions.put(timez, AuctionCommand.auctions.get(timez));
        }
        AuctionCommand.auctions = newAuctions;
        newAuctions = null;
        System.gc();
    }
}
