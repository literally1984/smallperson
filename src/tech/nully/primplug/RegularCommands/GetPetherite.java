package tech.nully.primplug.RegularCommands;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.Armor.Drakon;
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
        if (cmd.getName().equalsIgnoreCase("pgive")) {
            // Petherite set
            switch (args[0]) {
                case "petheritehelm": p.getInventory().addItem(PetheriteSet.helm);
                break;
                case "petheriteches": p.getInventory().addItem(PetheriteSet.ches);
                break;
                case "petheriteleg": p.getInventory().addItem(PetheriteSet.leg);
                break;
                case "petheriteboots": p.getInventory().addItem(PetheriteSet.boots);
                break;
                case "bod": p.getInventory().addItem(Talisman.BladeOfDespair);
                break;
                case "blod": p.getInventory().addItem(Talisman.BlessingOfDurability);
                break;
                case "drakonhelm": p.getInventory().addItem(Drakon.helm);
                break;
                case "drakonches": p.getInventory().addItem(Drakon.ches);
                break;
                case "drakonleg": p.getInventory().addItem(Drakon.leg);
                break;
                case "drakonboots": p.getInventory().addItem(Drakon.boots);
                break;
            }

        }
        return true;
    }
}
