package tech.nully.primplug.API;

import org.bukkit.entity.Player;

public class spell {
    spellType type;
    int damage;
    Player caster;

    public spell(spellType type, int damage, Player caster) {
        this.type = type;
        this.damage = damage;
        this.caster = caster;
    }

    public spellType getType() {
        return this.type;
    }

    public int getDamage() {
        return this.damage;
    }

    public Player getCaster() {
        return this.caster;
    }
}
