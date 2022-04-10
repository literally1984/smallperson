package tech.nully.primplug.recipeBook;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class recipeCommand implements CommandExecutor{
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can execute this command");
            return true;
        }


        if (cmd.getName().equalsIgnoreCase("recipes")) {
            Player p = (Player) sender;
            recipeGUI r = new recipeGUI();
            r.openGui(p);
            return true;
        }
        return true;
    }
}
