package tech.nully.primplug.upgradeItems;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class upgradeCommand implements CommandExecutor{

    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only Players can use this command");
            return true;
        }

        if (cmd.getName() == "upgrade") {
            Player p = (Player) sender;
            upgradeGUI up = new upgradeGUI();
            up.openUpgradeGUI(p);
        }
        return true;
    }
    
}
