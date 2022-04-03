    import org.bukkit.plugin.java.JavaPlugin;

import Items.Armor.PetheriteSet;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        PetheriteSet.init();
    }

    @Override
    public void onDisable() {
    }
}