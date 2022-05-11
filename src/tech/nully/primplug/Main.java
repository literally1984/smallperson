package tech.nully.primplug;

import java.util.Iterator;

import org.bukkit.ChatColor;
import org.bukkit.inventory.Recipe;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.Armor.armorItems.demigodArmor;
import tech.nully.primplug.Armor.armorItems.hardenedDiamond;
import tech.nully.primplug.Armor.armorItems.lapisArmor;
import tech.nully.primplug.Armor.armorItems.platedArmor;
import tech.nully.primplug.Armor.armorItems.reaperArmor;
import tech.nully.primplug.Listeners.armorPutOnEvent;
import tech.nully.primplug.Listeners.playerDamageListener;
import tech.nully.primplug.Listeners.upgradeGUIListener;
import tech.nully.primplug.RPGcommands.reforges.reforgeCommand;
import tech.nully.primplug.RegularCommands.giveCommand;
import tech.nully.primplug.Talismans.Talisman;
import tech.nully.primplug.Talismans.talismanListeners;
import tech.nully.primplug.Tools.bloodThirstyBlade;
import tech.nully.primplug.Tools.toolAbilities;
import tech.nully.primplug.Tools.zeusBolt;
import tech.nully.primplug.crafting.customRecipes.armorRecipes;
import tech.nully.primplug.enchantStuff.EnchantGUI;
import tech.nully.primplug.enchantStuff.enchantMechanic;
import tech.nully.primplug.playerStatManagers.manaManager.passiveManaAdder;
import tech.nully.primplug.recipeBook.recipeCommand;
import tech.nully.primplug.rightClickPlayerMechanic.rightClickPlayer;
import tech.nully.primplug.upgradeItems.upgradeCommand;

public class Main extends JavaPlugin {
    public Iterator<Recipe> it = getServer().recipeIterator();
    private static Main instance;
    passiveManaAdder p = new passiveManaAdder();

    public static Main getInstance() {
        return instance;
    }

    @Override
    public void onEnable() {
        instance = this;

        p.addMana();
        enchantMechanic.createEnchantHashMap();
        EnchantGUI.createEnchantItems();


        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        baseMethods.init();
        cactusArmor.init();
        demigodArmor.init();
        hardenedDiamond.init();
        lapisArmor.init();
        platedArmor.init();
        reaperArmor.init();

        bloodThirstyBlade.makeBloodThirstyBlade();
        zeusBolt.createZeusBolt();
        
        
        // recipes
        armorRecipes.init();


        getServer().getPluginManager().registerEvents(new upgradeGUIListener(), this);
        getServer().getPluginManager().registerEvents(new playerDamageListener(), this);
        getServer().getPluginManager().registerEvents(new rightClickPlayer(), this);
        getServer().getPluginManager().registerEvents(new talismanListeners(), this);
        getServer().getPluginManager().registerEvents(new toolAbilities(), this);
        getServer().getPluginManager().registerEvents(new armorPutOnEvent(), this);

        getCommand("recipes").setExecutor(new recipeCommand());
        getCommand("pgive").setExecutor(new giveCommand());
        getCommand("reforge").setExecutor(new reforgeCommand());
        getCommand("upgrade").setExecutor(new upgradeCommand());


        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage(
        ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + " PrimPlugin V0.2.0 is now Enabled! :D");
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