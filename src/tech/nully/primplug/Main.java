package tech.nully.primplug;

import java.util.Iterator;

import org.bukkit.ChatColor;
import org.bukkit.inventory.Recipe;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Listeners.damageListener;
import tech.nully.primplug.RPGcommands.reforges.reforgeCommand;
import tech.nully.primplug.RegularCommands.giveCommand;
import tech.nully.primplug.Talismans.Talisman;
import tech.nully.primplug.Talismans.talismanListeners;
import tech.nully.primplug.crafting.customRecipes.armorRecipes;
import tech.nully.primplug.phones.phone;
import tech.nully.primplug.phones.phoneListener;
import tech.nully.primplug.phones.phoneitems;
import tech.nully.primplug.planes.WASDPlaneKey;
import tech.nully.primplug.recipeBook.recipeCommand;
import tech.nully.primplug.rightClickPlayerMechanic.rightClickPlayer;
import tech.nully.primplug.upgradeItems.upgradeCommand;
import tech.nully.primplug.upgradeItems.guis.upgradeGUIListener;

public class Main extends JavaPlugin {
    public Iterator<Recipe> it = getServer().recipeIterator();

    @Override
    public void onEnable() {

        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        WASDPlaneKey.init();
        baseMethods.init();
        phoneitems.init();
        phone.init();

        // recipes
        armorRecipes.init();


        getServer().getPluginManager().registerEvents(new phoneListener(), this);
        getServer().getPluginManager().registerEvents(new upgradeGUIListener(), this);
        getServer().getPluginManager().registerEvents(new damageListener(), this);
        getServer().getPluginManager().registerEvents(new rightClickPlayer(), this);
        getServer().getPluginManager().registerEvents(new talismanListeners(), this);

        getCommand("recipes").setExecutor(new recipeCommand());
        getCommand("pgive").setExecutor(new giveCommand());
        getCommand("reforge").setExecutor(new reforgeCommand());
        getCommand("upgrade").setExecutor(new upgradeCommand());


        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage(
        ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + " PrimPlugin V0.1.13 is now Enabled! :D");
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