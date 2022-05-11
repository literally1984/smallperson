package tech.nully.primplug.magic;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerDropItemEvent;

public class listeners implements Listener{

    @EventHandler
    public void onSpellDrop(PlayerDropItemEvent e) {
        spellCast spell = new spellCast();
        if (spell.IsSpell(e.getItemDrop().getItemStack())) {
            e.setCancelled(true);
        }
    }
    
}
