package tech.nully.primplug.fileSystem;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import tech.nully.primplug.Main;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class file {
    static HashMap<String, FileConfiguration> playerFileConfig = new HashMap<String, FileConfiguration>();
    Main m = new Main();
    public void saveFile(String fileName) {
        File playerYml = new File(Main.getInstance().getDataFolder() + "/" +"PrimPlugin" + "/" +fileName + ".yml");
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

    public void addToSpell(FileConfiguration fileConfig, String dataType, String data) {
        // Datatype pass-in is what type of item the data is, eg. Talisman, spells, etc
        fileConfig.set(dataType, data);
    }

    public List<String> readFile(FileConfiguration config, String path) {
        return Arrays.asList(config.getString(path).split(","));
    }

    public FileConfiguration getFileConfig(String PlayerName) {
        return playerFileConfig.get(PlayerName);
    }
}
