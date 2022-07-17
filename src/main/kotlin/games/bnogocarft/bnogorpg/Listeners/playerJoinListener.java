package games.bnogocarft.bnogorpg.Listeners;

import games.bnogocarft.bnogorpg.fileSystem.file;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;
import games.bnogocarft.bnogorpg.API.PrimItems.PrimPlayer;

import java.io.File;

public class playerJoinListener implements Listener{
    games.bnogocarft.bnogorpg.fileSystem.file file = new file();

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        String fileName = e.getPlayer().getDisplayName();
        if (!(new File(Main.getInstance().getDataFolder() + "/" +"PrimPlugin" + "/" + fileName + ".yml").exists())) {
            file.saveFile(e.getPlayer().getDisplayName());
        }

        PrimPlayer pPlayer = PrimPlayer.getPrimPlayer(e.getPlayer());
    }
}
