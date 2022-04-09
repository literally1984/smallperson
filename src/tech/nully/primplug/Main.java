package tech.nully.primplug;

import org.bukkit.ChatColor;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.WASDPlaneKey;
import tech.nully.primplug.Items.Armor.Drakon;
import tech.nully.primplug.Items.Armor.PetheriteSet;
import tech.nully.primplug.Listeners.talismanListeners;
import tech.nully.primplug.RegularCommands.GetPetherite;
import tech.nully.primplug.planes.planes;

public class Main extends JavaPlugin {
    public static boolean pressW;
    public static boolean pressS;
    public static boolean pressA;
    public static boolean pressD;

    @Override
    public void onEnable() {

        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        WASDPlaneKey.init();
        getCommand("pgive").setExecutor(new GetPetherite());
        getServer().getPluginManager().registerEvents(new talismanListeners(), this);
        getServer().getPluginManager().registerEvents(new planes(), this);
        getServer().getConsoleSender().sendMessage(
        ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + "PrimPlugin is now Enabled!");
        saveDefaultConfig();

        }

    @Override
    public void onDisable() {
        getServer().getConsoleSender().sendMessage(
            ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.RED + "PrimPlugin is now Disabled!");
    }
}