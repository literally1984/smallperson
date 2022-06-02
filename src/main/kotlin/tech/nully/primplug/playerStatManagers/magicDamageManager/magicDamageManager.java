package tech.nully.primplug.playerStatManagers.magicDamageManager;

import java.util.HashMap;

import org.bukkit.Location;
import org.bukkit.entity.TNTPrimed;

public class magicDamageManager {
    // Basically, these methods take entities or locations and pair them up with a damage integer value and in an
    // EntityDamageEvent, if the damage-cause is any of the hashmaps and if the location is within the hashmaps, the damage will be dealt to the entity

    // TODO: CHANGE SECOND VALUE TO PAIR AND CONTAIN PLAYER

    private static HashMap<TNTPrimed, Integer> ActiveMagicTNT = new HashMap<TNTPrimed, Integer>();

    public int getActiveTNT(TNTPrimed tnt) {
        return ActiveMagicTNT.get(tnt);
    }

    public boolean checkTNTContains(TNTPrimed tnt) {
        return ActiveMagicTNT.containsKey(tnt);
    }
    private static HashMap<Location, Integer> ActiveMagicLightning = new HashMap<Location, Integer>();

    public int getActiveLightning(Location loc) {
        return  ActiveMagicLightning.get(loc);
    }

    public boolean checkTNTContains(Location loc) {
        return ActiveMagicLightning.containsKey(loc);
    }

    public void addMagicLightning(Location location, int damage) {
        ActiveMagicLightning.put(location, damage);
    }

    public void removeMagicLightning(Location location) {
        ActiveMagicLightning.remove(location);
    }

    public void addMagicTNT(TNTPrimed tnt, int damage) {
        ActiveMagicTNT.put(tnt, damage);
    }

    public void removeTNT(TNTPrimed tnt) {
        ActiveMagicTNT.remove(tnt);
    }
}
