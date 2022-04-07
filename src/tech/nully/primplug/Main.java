package tech.nully.primplug;
import org.bukkit.ChatColor;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.Armor.Drakon;
import tech.nully.primplug.Items.Armor.PetheriteSet;
import tech.nully.primplug.RegularCommands.GetPetherite;
import tech.nully.primplug.mechanics.TalismanMods;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        getCommand("pgive").setExecutor(new GetPetherite());
        getServer().getPluginManager().registerEvents(new TalismanMods(), this);
        getServer().getConsoleSender().sendMessage(
            ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + "PrimPlugin is now Enabled!");
    }

    @Override
    public void onDisable() {
        getServer().getConsoleSender().sendMessage(
            ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.RED + "PrimPlugin is now Disabled!");
    }
}