package games.bnogocarft.bnogorpg.economy.market;

import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

public class marketCommand implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (sender instanceof Player) {
            sender.sendMessage(ChatColor.RED + "Only players can use this command!");
            return false;
        }


        return false;
    }
}
