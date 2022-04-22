package tech.nully.primplug;

import org.bukkit.ChatColor;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Armor.Drakon;
import tech.nully.primplug.Armor.PetheriteSet;
import tech.nully.primplug.Armor.listener;
import tech.nully.primplug.RPGcommands.reforges.reforgeCommand;
import tech.nully.primplug.RegularCommands.giveCommand;
import tech.nully.primplug.Talismans.Talisman;
import tech.nully.primplug.Talismans.talismanListeners;
import tech.nully.primplug.phones.phoneListener;
import tech.nully.primplug.planes.WASDPlaneKey;
import tech.nully.primplug.recipeBook.recipeCommand;
import tech.nully.primplug.upgradeItems.upgradeCommand;
import tech.nully.primplug.upgradeItems.upgradeGUIListener;

public class Main extends JavaPlugin {

    @Override
    public void onEnable() {

        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        WASDPlaneKey.init();
        baseMethods.init();


        getServer().getPluginManager().registerEvents(new phoneListener(), this);
        getServer().getPluginManager().registerEvents(new upgradeGUIListener(), this);
        getServer().getPluginManager().registerEvents(new listener(), this);


        getCommand("recipes").setExecutor(new recipeCommand());
        getCommand("pgive").setExecutor(new giveCommand());
        getCommand("reforge").setExecutor(new reforgeCommand());
        getCommand("upgrade").setExecutor(new upgradeCommand());
        getServer().getPluginManager().registerEvents(new talismanListeners(), this);


        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage(
        ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + " PrimPlugin V0.1.9 is now Enabled! :D");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        saveDefaultConfig();
    }

    @Override
    public void onDisable() {
        getServer().getConsoleSender().sendMessage(
            ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.RED + "PrimPlugin is now Disabled! :(");
    }
}