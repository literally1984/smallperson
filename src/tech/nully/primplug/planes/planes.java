package tech.nully.primplug.planes;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;


import java.lang.Math;

import net.lax1dude.util.event.PlayerVehicleInputEvent;

public class planes implements Listener{
    boolean isFoward;
    boolean isBackward;
    boolean isLeft;
    boolean isRight;
    @EventHandler
    public static void PlayerVehicleInputEvent(PlayerVehicleInputEvent e) {
        double DX = e.getX();
        String X = Double.toString(DX);
        double DZ = e.getZ();
        String Z = Double.toString(DZ);
        Player p = e.getPlayer();
        DX = 0.01 * Math.floor(DX * 100.0);
        DZ = 0.01 * Math.floor(DZ * 100.0);
        if (DX > 0) {
            p.sendMessage(ChatColor.RED + "[X]" + X);
            System.out.println(ChatColor.RED + "[X]" + X);
        }
        if (DX < 0) {
            p.sendMessage(ChatColor.RED + "[-X]" + X);
            System.out.println(ChatColor.RED + "[-X]" + X);
        }
        if (DZ > 0) {
            p.sendMessage(ChatColor.YELLOW + "[Z]" + Z);
            System.out.println(ChatColor.RED + "[Z]" + Z);
        }
        if (DZ < 0) {
            p.sendMessage(ChatColor.YELLOW + "[-Z]" + Z);
            System.out.println(ChatColor.RED + "[-Z]" + Z);
        }
    }
    
}
