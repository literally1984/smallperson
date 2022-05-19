package tech.nully.primplug.API;

import org.bukkit.entity.Player;

public class spell {
    String type;
    int damage;
    Player caster;

    public spell(String type, int damage, Player caster) {
        this.type = type;
        this.damage = damage;
        this.caster = caster;
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
