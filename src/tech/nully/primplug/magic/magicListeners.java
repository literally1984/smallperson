package tech.nully.primplug.magic;

import org.bukkit.Location;
import org.bukkit.entity.Entity;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import tech.nully.primplug.API.events.spellCastEvent;
import tech.nully.primplug.API.spell;

import java.util.HashMap;

public class magicListeners implements Listener {

    public static HashMap<Entity, spell> ActiveEntSpells = new HashMap<Entity, spell>();

    public static HashMap<Location, spell> ActiveLocSpells = new HashMap<Location, spell>();

    @EventHandler
    public void onSpellCast(spellCastEvent e) {
        spell s = new spell(e.getType(), e.getRawDamage(), e.getPlayer());
        if (e.getType().getType() == (byte) 1) {
            ActiveEntSpells.put(e.getType().getEntity(), s);
        } else {
            ActiveLocSpells.put(e.getType().getLocation(), s);
        }
    }
}
