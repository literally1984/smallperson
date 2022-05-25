package tech.nully.primplug.economy.auctions;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class AuctionCommand implements CommandExecutor{

    private 

    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can execute this Command");
            return false;
        }

        if (cmd.getName().equalsIgnoreCase("auc")) {
            if (!(sender instanceof Player)){
            sender.sendMessage("Opening Auction");
            }
        }
        return false;
    }

}
