package tech.nully.primplug.Talismans;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import tech.nully.primplug.fileSystem.storePlayerFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class getTalisman {
    storePlayerFile store = new storePlayerFile();
    public List<String> getTalisans(Player p) {
        FileConfiguration conf = store.getFileConfig(p.getDisplayName()); // gets the player's file config

        String[] playerTalismans = store.readFile(conf, "Talisman").split(","); // splits the player's talisman config into an array by commans
        List<String> returnList = new ArrayList<String>();

        returnList.addAll(Arrays.asList(playerTalismans));
        return returnList;

    }

}