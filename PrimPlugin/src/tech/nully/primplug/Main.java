package tech.nully.primplug;
    import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Items.Armor.PetheriteSet;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        PetheriteSet.init();
    }

    @Override
    public void onDisable() {
    }
}