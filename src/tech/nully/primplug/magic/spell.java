package tech.nully.primplug.magic;

import org.bukkit.Location;
import org.bukkit.entity.Player;

public class spell {
    Location loc;
    String type;
    int damage;
    Player caster;

    public spell(Location loc, String type, int damage, Player caster) {
        this.loc = loc;
        this.type = type;
        this.damage = damage;
        this.caster = caster;
    }

    public Location getLocation() {
        return this.loc;
    }

    public String getType() {
        return this.type;
    }

    public int getDamage() {
        return this.damage;
    }

    public Player getCaster() {
        return this.caster;
    }
}
