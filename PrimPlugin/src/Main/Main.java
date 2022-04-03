package Main;
    import org.bukkit.plugin.java.JavaPlugin;

import Main.Items.Armor.PetheriteSet;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        PetheriteSet.init();
    }

    @Override
    public void onDisable() {
    }
}