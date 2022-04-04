package Main.RegularCommands;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import net.minecraft.server.v1_5_R3.Material;

public class GetPetherite implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
        if (args.equals(null)) {
            args[0] = sender.getName();
        }
        Player p = Bukkit.getPlayer(args[0]);

        // TODO: FIX DIS THING
        if (cmd.getName().equalsIgnoreCase("pgivea")) {
            p.getInventory().addItem(ItemStack(Material.getMaterial().equalsIgnoreCase(args[1])));
        }
        return true;
    }
}
