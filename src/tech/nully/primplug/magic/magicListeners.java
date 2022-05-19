package tech.nully.primplug.magic;

import org.bukkit.Location;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import tech.nully.primplug.magic.events.spellCastEvent;

import java.util.HashMap;

public class magicListeners implements Listener {

    HashMap<Location, spell> ActiveSpells = new HashMap<Location, spell>();

    @EventHandler
    public void onSpellCast(spellCastEvent e) {

    }
}
