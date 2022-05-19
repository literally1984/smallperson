package tech.nully.primplug.magic.API;

import org.bukkit.Location;
import org.bukkit.entity.Entity;

public class spellType {
    byte type;
    Location loc;
    Entity damageEntity;

    // Sets a byte to identify type, returns 1 if it is an entity and 0 if it is not an entity (Lightning)
    public spellType(Location loc, Entity damageEntity) {
        // Is an entity
        if (loc == null) {
            this.type = (byte) 1;
            this.loc = null;
            this.damageEntity = damageEntity;
        } else if (damageEntity == null) {
            this.type = (byte) 0;
            this.damageEntity = null;
            this.loc = loc;
        }
    }

    public Object getIdentifier() {
        if (this.type == (byte) 1) {
            return this.damageEntity;
        } else return this.loc;
    }

}
