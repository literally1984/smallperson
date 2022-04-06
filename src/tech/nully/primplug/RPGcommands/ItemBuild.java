package tech.nully.primplug.RPGcommands;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
// I have to make this an @EventHandler
public class ItemBuild implements CommandExecutor{
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (sender instanceof Player) {
            sender.sendMessage("Only players may use this command!");
            return true;
        }
        

        if (cmd.getName().equalsIgnoreCase("build")) {
            Inventory inv = Bukkit.createInventory(null, 9, ChatColor.BLUE + "Talisman Bag");
            return true;

        }
        return true;
    }
}