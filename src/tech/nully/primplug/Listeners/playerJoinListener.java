package tech.nully.primplug.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import tech.nully.primplug.Main;
import tech.nully.primplug.fileSystem.file;

import java.io.File;

public class playerJoinListener implements Listener{
    file file = new file();

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        String fileName = e.getPlayer().getDisplayName();
        if (!(new File(Main.getInstance().getDataFolder() + "/" +"PrimPlugin" + "/" + fileName + ".yml").exists())) {
            file.saveFile(e.getPlayer().getDisplayName());
        }
    }
}
