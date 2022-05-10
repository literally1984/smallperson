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
        File playerYml = new File(Main.getInstance().getDataFolder()+fileName + ".yml");
        FileConfiguration fileConfig = YamlConfiguration.loadConfiguration(playerYml);
        try {
            fileConfig.save(playerYml);
            } catch (IOException e) {
            e.printStackTrace();
            }
        fileConfig.set("Talisman", null);
        fileConfig.set("Spells", null);
        playerFileConfig.put(fileName, fileConfig);
    }

    public void addToFile(FileConfiguration fileConfig, String dataType, String data) {
        // Datatype pass-in is what type of item the data is, eg. Talisman, spells, etc
        fileConfig.set(dataType, data);
    }

    public String readFile(FileConfiguration config, String path) {
        return config.getString(path);
    }

    public FileConfiguration getFileConfig(String PlayerName) {
        return playerFileConfig.get(PlayerName);
    }
}
