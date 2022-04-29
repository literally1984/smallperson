package tech.nully.primplug.manaManager;

import java.util.Timer;
import java.util.TimerTask;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;

public class passiveManaAdder {
    public void addMana() {
        Timer timer = new Timer();

    timer.schedule( new TimerTask() {
        public void run() {
            manaManager m = new manaManager();
            for (Player p : Bukkit.getServer().getOnlinePlayers()) {
                String pName = p.getDisplayName();
                if (m.getMana(pName) <= m.getMaxMana(pName)) {
                    m.addMana(pName, m.getMaxMana(pName)/20);
                    }
                }
            }
        }, 0, 60*1000);
    }
}
