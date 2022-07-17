package games.bnogocarft.bnogorpg.Talismans;

import games.bnogocarft.bnogorpg.fileSystem.file;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;

import java.util.List;

public class getTalisman {
    file store = new file();
    public List<String> getTalisans(Player p) {
        FileConfiguration conf = store.getFileConfig(p.getDisplayName()); // gets the player's file config

        List<String> playerTalismans = store.readFile(conf, "Talisman"); // splits the player's talisman config into an array by commans
        return playerTalismans;

    }

}