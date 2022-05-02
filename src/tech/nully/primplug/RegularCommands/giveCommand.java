package tech.nully.primplug.RegularCommands;

import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.PetheriteSet;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.Talismans.Talisman;
import tech.nully.primplug.phones.phone;
import tech.nully.primplug.planes.WASDPlaneKey;

public class giveCommand implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can execute this command!");
            return true;
        }
        // Petherite helmet
        Player p = (Player) sender;
        if (!args[0].equals(null)) {
            switch (args[0]) {
                case "petheritehelm": p.getInventory().addItem(PetheriteSet.helm);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    //name
                    " Petherite Helmet " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "petheriteches": p.getInventory().addItem(PetheriteSet.ches);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    //name
                    " Petherite Chesplate " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "petheriteleg": p.getInventory().addItem(PetheriteSet.leg);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    // name
                    " Petherite Leggings " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "petheriteboots": p.getInventory().addItem(PetheriteSet.boots);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    // name
                    " Petherite Boots " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                // Talismans
                case "bod": p.getInventory().addItem(Talisman.BladeOfDespair);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    // name
                    " Curse of despair " + 
                    ChatColor.YELLOW + 
                    "Talisman!");
                break;
                case "blod": p.getInventory().addItem(Talisman.BlessingOfDurability);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    " You gave yourself a " + 
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
                    " Miso the Rabbit " + 
                    ChatColor.YELLOW + 
                    "Talisman!");
                break;
                // Drakon
                case "drakonhelm": p.getInventory().addItem(Drakon.helm);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    " Drakon Helmet! " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "drakonches": p.getInventory().addItem(Drakon.ches);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a" + 
                    ChatColor.LIGHT_PURPLE + 
                    " Drakon Chestplate " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "drakonleg": p.getInventory().addItem(Drakon.leg);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    " Drakon Leggings " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "drakonboots": p.getInventory().addItem(Drakon.boots);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    " Drakon Boots " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "planekey": p.getInventory().addItem(WASDPlaneKey.PlaneKey);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a " + 
                    ChatColor.LIGHT_PURPLE + 
                    " Plane key " + 
                    ChatColor.YELLOW + 
                    "!");
                case "phone": p.getInventory().addItem(phone.epikPhone);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a " + 
                    ChatColor.LIGHT_PURPLE + 
                    " Phone " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "cachelm": p.getInventory().addItem(cactusArmor.helm);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a " + 
                    ChatColor.LIGHT_PURPLE + 
                    " Cactus Helmet " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "cacches": p.getInventory().addItem(cactusArmor.ches);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a " + 
                    ChatColor.LIGHT_PURPLE + 
                    " Cactus Chesplate " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "cacleg": p.getInventory().addItem(cactusArmor.leg);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a pair of" + 
                    ChatColor.LIGHT_PURPLE + 
                    " Cactus Leggings " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
                case "cacboots": p.getInventory().addItem(cactusArmor.boots);
                sender.sendMessage(
                    ChatColor.YELLOW + 
                    "You gave yourself a " + 
                    ChatColor.LIGHT_PURPLE + 
                    " Phone " + 
                    ChatColor.YELLOW + 
                    "!");
                break;
            }
        } else {
            sender.sendMessage(ChatColor.RED + "Please enter a valid item to give");
        }
    return true;
    }
}
