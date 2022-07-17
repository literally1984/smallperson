package games.bnogocarft.bnogorpg.enchantStuff;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerExpChangeEvent;

public class EnchantAbilities implements Listener {
    
    @EventHandler
    public void onMending(PlayerExpChangeEvent e) {
        if (e.getAmount() > 0) {
        }
    }
}
