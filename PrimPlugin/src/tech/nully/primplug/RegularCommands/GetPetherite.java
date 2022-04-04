package tech.nully.primplug.RegularCommands;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;


public class GetPetherite implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (args.equals(null)) {
            args[0] = sender.getName();
        }
        Player p = Bukkit.getPlayer(args[0]);

        // TODO: FIX DIS THING
        Material mat = Material.matchMaterial(args[1]);
        if (cmd.getName().equalsIgnoreCase("pgivea")) {
            p.getInventory().addItem(new ItemStack(mat));
        }
        return true;
    }
}
