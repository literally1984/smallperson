package tech.nully.primplug.RegularCommands;

import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.Armor.Drakon;
import tech.nully.primplug.Items.Armor.PetheriteSet;

public class GetPetherite implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can execute this command!");
            return true;
        }
        Player p = (Player) sender;
        if (!args[0].equals(null)) {
            switch (args[0]) {
                case "petheritehelm": p.getInventory().addItem(PetheriteSet.helm);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Petherite Helmet" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "petheriteches": p.getInventory().addItem(PetheriteSet.ches);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Petherite Chesplate" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "petheriteleg": p.getInventory().addItem(PetheriteSet.leg);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Petherite Leggings" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "petheriteboots": p.getInventory().addItem(PetheriteSet.boots);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Petherite Boots" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                // Talismans
                case "bod": p.getInventory().addItem(Talisman.BladeOfDespair);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Curse of despair" + 
                    ChatColor.YELLOW + 
                    "Talisman!");
                break;
                case "blod": p.getInventory().addItem(Talisman.BlessingOfDurability);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Blessing of Durability" + 
                    ChatColor.YELLOW + 
                    "Talisman!");
                break;
                case "miso": p.getInventory().addItem(Talisman.MisoTheRabbit);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Miso the Rabbit" + 
                    ChatColor.YELLOW + 
                    "Talisman!");
                break;
                // Drakon
                case "drakonhelm": p.getInventory().addItem(Drakon.helm);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Drakon Helmet!" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "drakonches": p.getInventory().addItem(Drakon.ches);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Drakon Chestplate!" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "drakonleg": p.getInventory().addItem(Drakon.leg);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Drakon Leggings!" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "drakonboots": p.getInventory().addItem(Drakon.boots);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    "Drakon Boots" + 
                    ChatColor.YELLOW + 
                    "!");
                break;
            }
        } else {
            sender.sendMessage("Please enter a valid item to give");
        }
    return true;
    }
}
