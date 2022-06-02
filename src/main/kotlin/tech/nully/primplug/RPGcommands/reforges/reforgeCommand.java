package tech.nully.primplug.RPGcommands.reforges;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class reforgeCommand implements CommandExecutor{

    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        // Player checker
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can use this command");
            return true;
            }

        if (cmd.getName().equalsIgnoreCase("reforge")) {
            Player p = (Player) sender;
            reforgeGUI r = new reforgeGUI();
            r.openReforgeGUI(p);
            return true;
        }


        return true;
    }
    
}
