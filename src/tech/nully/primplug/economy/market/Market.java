package tech.nully.primplug.economy.market;

import org.bukkit.entity.Player;

public class Market {
    int price;
    Player maker;

    public Market(int price, Player maker) {
        this.price = price;
        this.maker = maker;
    }

    public int getPrice() {
        return this.price;
    }
}
