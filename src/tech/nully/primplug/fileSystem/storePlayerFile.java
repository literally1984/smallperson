package tech.nully.primplug.fileSystem;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;

import tech.nully.primplug.Main;

public class storePlayerFile {
    HashMap<String, FileConfiguration> playerFileConfig = new HashMap<String, FileConfiguration>();
    Main m = new Main();
    public void saveFile(String fileName) {
        File playerYml = new File(m.main.getDataFolder()+fileName + ".yml");
        FileConfiguration fileConfig = YamlConfiguration.loadConfiguration(playerYml);
        try {
            fileConfig.save(playerYml);
            } catch (IOException e) {
            e.printStackTrace();
            }
        playerFileConfig.put(fileName, fileConfig);
    }

    public void addToFile(FileConfiguration fileConfig) {
        Main.getInstance().
    }
}
