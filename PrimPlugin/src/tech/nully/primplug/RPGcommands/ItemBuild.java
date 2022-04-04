package tech.nully.primplug.RPGcommands;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import tech.nully.primplug.Items.Talisman;

public class ItemBuild implements CommandExecutor{
    @Override
    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {

        // Checks if sender is a player
        if (!(sender instanceof Player)) {
            sender.sendMessage("Only players can use this command");
            return true;
        }

        // handles the command
        Player p = (Player) sender;
        if (cmd.getName().equalsIgnoreCase("build")) {
            if (p.getItemInHand() == Talisman.BladeOfDespair) {
                // TODO: AYONULL CONTINUE DIS THING
        }
    }
        return true;
    }
}
