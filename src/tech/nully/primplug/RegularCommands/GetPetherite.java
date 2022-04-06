package tech.nully.primplug.RegularCommands;

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
            return true;
        }
        Player p = (Player) sender;
        if (cmd.getName().equalsIgnoreCase("getp")) {
            p.getInventory().addItem(PetheriteSet.PetheriteChestplate);
            return true;
        }
        if (cmd.getName().equalsIgnoreCase("getbod")) {
            p.getInventory().addItem(Talisman.BladeOfDespair);
            return true;
        }
        return true;
    }
}
