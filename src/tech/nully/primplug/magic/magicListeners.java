package tech.nully.primplug.magic;

import org.bukkit.Location;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import tech.nully.primplug.magic.API.events.spellCastEvent;
import tech.nully.primplug.magic.API.spell;

import java.util.HashMap;

public class magicListeners implements Listener {

    HashMap<Location, spell> ActiveSpells = new HashMap<Location, spell>();

    @EventHandler
    public void onSpellCast(spellCastEvent e) {
        spell s = new spell(e.getType(), e.getRawDamage(), e.getPlayer());

    }
}
