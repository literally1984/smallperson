package tech.nully.primplug;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Items.Armor.PetheriteSet;
import tech.nully.primplug.RegularCommands.GetPetherite;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        PetheriteSet.init();
        getCommand("pgivea").setExecutor(new GetPetherite());
        System.out.println("PrimPlugin is now enabled");
    }

    @Override
    public void onDisable() {
    }
}