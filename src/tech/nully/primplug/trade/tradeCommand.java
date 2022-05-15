package tech.nully.primplug.trade;

import javafx.util.Pair;
import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;

import java.util.HashMap;

public class tradeCommand implements CommandExecutor {
    public static HashMap<Player, Player> activeRequests = new HashMap<Player, Player>();
    public static HashMap<Pair<Player, Inventory>, Pair<Player, Inventory>> activeTradeWindows = new HashMap<Pair<Player, Inventory>, Pair<Player, Inventory>>();
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if(!(sender instanceof Player)) {
            return false;
        }

        // Command name chec, argument length less than 2, args[0] is an onlone player
        if(cmd.getName().equalsIgnoreCase("trade") && args.length <2 && Bukkit.getPlayer(args[0]) != null) {
            Player requester = (Player) sender;
            Player requestee = Bukkit.getPlayer(args[0]);

            requester.sendMessage(ChatColor.YELLOW + "You requested to trade with" + requestee.getDisplayName());
            requestee.sendMessage(ChatColor.LIGHT_PURPLE + "--------------------------------------------------------");
            requestee.sendMessage(ChatColor.LIGHT_PURPLE + "--------------------------------------------------------");
            requestee.sendMessage(ChatColor.YELLOW + requester.getDisplayName() + ChatColor.GREEN + "has requested to trade with you, type /taccept to accept");
            requestee.sendMessage(ChatColor.LIGHT_PURPLE + "--------------------------------------------------------");
            requestee.sendMessage(ChatColor.LIGHT_PURPLE + "--------------------------------------------------------");

            activeRequests.put(requestee, requester);
            return true;
        }

        // -------------- Handler for the accept command ----------------
        if (cmd.getName().equalsIgnoreCase("taccept") && args.length <2 && Bukkit.getPlayer(args[0]) != null) {
            Player requestAccepter = (Player) sender;
            if (activeRequests.containsKey(requestAccepter)) {
                Player p1 = activeRequests.get(requestAccepter);
                // TODO OPEN TRADE GUI TO requestAccepter and p1
            }
            return true;
        }
        return false;
    }
}
