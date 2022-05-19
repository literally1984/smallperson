package tech.nully.primplug.Listeners;

import java.io.File;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import tech.nully.primplug.Main;
import tech.nully.primplug.fileSystem.file;

public class playerJoinListener implements Listener{
    file file = new file();

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        String fileName = e.getPlayer().getDisplayName();
        if (!(new File(Main.getInstance().getDataFolder() + "/" +"PrimPlugin" + "/" + fileName + ".yml").exists())) {
            
        }
    }
}
