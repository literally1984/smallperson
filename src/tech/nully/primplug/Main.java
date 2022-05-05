package tech.nully.primplug;

import java.util.Iterator;

import org.bukkit.ChatColor;
import org.bukkit.inventory.Recipe;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Listeners.playerDamageListener;
import tech.nully.primplug.Listeners.upgradeGUIListener;
import tech.nully.primplug.RPGcommands.reforges.reforgeCommand;
import tech.nully.primplug.RegularCommands.giveCommand;
import tech.nully.primplug.Talismans.Talisman;
import tech.nully.primplug.Talismans.talismanListeners;
import tech.nully.primplug.Tools.bloodThirstyBlade;
import tech.nully.primplug.crafting.customRecipes.armorRecipes;
import tech.nully.primplug.playerStatManagers.manaManager.passiveManaAdder;
import tech.nully.primplug.recipeBook.recipeCommand;
import tech.nully.primplug.rightClickPlayerMechanic.rightClickPlayer;
import tech.nully.primplug.upgradeItems.upgradeCommand;

public class Main extends JavaPlugin {
    public Iterator<Recipe> it = getServer().recipeIterator();
    public Plugin main = this;
    passiveManaAdder p = new passiveManaAdder();

    @Override
    public void onEnable() {
        p.addMana();


        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        baseMethods.init();

        bloodThirstyBlade.init();
        
        
        // recipes
        armorRecipes.init();


        getServer().getPluginManager().registerEvents(new upgradeGUIListener(), this);
        getServer().getPluginManager().registerEvents(new playerDamageListener(), this);
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