package tech.nully.primplug.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import tech.nully.primplug.manaManager.manaListener;

public class playerJoinListener implements Listener{
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        manaListener m = new manaListener();
        m.setMaxMana(e.getPlayer());
    }
}
