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
            p.sendMessage("1");
            recipeGUI r = new recipeGUI();
            p.sendMessage("2");
            r.openGui(p);
            p.sendMessage("3");
            p.sendMessage("4");
            return true;
        }
        return true;
    }
}
