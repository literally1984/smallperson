package tech.nully.primplug.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import tech.nully.primplug.manaManager.manaManager;

public class playerJoinListener implements Listener{
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        manaManager m = new manaManager();
        m.setMaxMana(e.getPlayer());
    }
}
