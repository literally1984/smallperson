package tech.nully.primplug.RegularCommands;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.Armor.PetheriteSet;

// TODO: AYONULL MEK DIS THING WORK REEEE
public class GetPetherite implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can execute this command!");
        }
        Player p = Bukkit.getPlayer(args[0]);
        if (cmd.getName().equalsIgnoreCase("getp")) {
            p.getInventory().addItem(PetheriteSet.PetheriteChestplate);
        }
        if (cmd.getName().equalsIgnoreCase("getbod")) {
            p.getInventory().addItem(Talisman.BladeOfDespair);
        }
        return true;
    }
}
