package tech.nully.primplug;
import org.bukkit.ChatColor;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.Armor.Drakon;
import tech.nully.primplug.Items.Armor.PetheriteSet;
import tech.nully.primplug.RegularCommands.GetPetherite;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        getCommand("pgive").setExecutor(new GetPetherite());
        System.out.println(ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + " PrimPlugin is now enabled");
    }

    @Override
    public void onDisable() {
    }
}