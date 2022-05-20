package tech.nully.primplug.magic;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import tech.nully.primplug.API.events.spellCastEvent;
import tech.nully.primplug.API.spell;
import tech.nully.primplug.API.spellType;

import java.util.HashMap;

public class magicListeners implements Listener {

    HashMap<spellType, spell> ActiveSpells = new HashMap<spellType, spell>();

    @EventHandler
    public void onSpellCast(spellCastEvent e) {
        spell s = new spell(e.getType(), e.getRawDamage(), e.getPlayer());
        ActiveSpells.put(e.getType(), s);
    }
}
