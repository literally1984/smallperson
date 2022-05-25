package tech.nully.primplug.economy.auctions;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import tech.nully.primplug.economy.Time;

import java.util.ArrayList;
import java.util.List;

public class AuctionCommand implements CommandExecutor{

    private List<Auction> aucList = new ArrayList<>();

    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {

        //Player checker
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can execute this Command");
            return false;
        }

        // Command handler
        if (cmd.getName().equalsIgnoreCase("auc")) {
<<<<<<< HEAD
            if (!(sender instanceof Player)){
            sender.sendMessage("Opening Auction");
=======
            if (args[0].equalsIgnoreCase("start") && args.length == 6) {

                // Checks if all of the number args are int
                boolean allIsNumb = true;
                for (int i = 1; i < 6; i++) {
                    String num = args[i];
                    try {
                        int time = Integer.parseInt(num);
                    } catch (NumberFormatException nfe) {
                        allIsNumb = false;
                        return false;
                    }
                    allIsNumb = true;
                }

                // Creates the auction
                Player p = (Player) sender;
                Time time = new Time(Integer.parseInt(args[1]), Integer.parseInt(args[2]), Integer.parseInt(args[3]), Integer.parseInt(args[4]));
                Auction auc = new Auction(p, Integer.parseInt(args[5]), p.getItemInHand(), time);
            }

            if (args[0].equalsIgnoreCase("list") || args.length == 1) {
                
>>>>>>> ba7a2628b105027194fa4dda1d13e73454d31061
            }
        }
        return false;
    }

}
