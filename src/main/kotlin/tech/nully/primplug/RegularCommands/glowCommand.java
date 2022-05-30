package tech.nully.primplug.RegularCommands;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import tech.nully.primplug.enchantStuff.Glow;

public class glowCommand implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        Player p = (Player) sender;
        if (!(sender instanceof Player)) {
            return false;
        }

        if (cmd.getName().equalsIgnoreCase("glow")) {
            Glow glow = new Glow(1);
            p.getInventory().getItemInHand().getItemMeta().addEnchant(glow, 1, true);
            return true;
        }
        return false;
    }
}
