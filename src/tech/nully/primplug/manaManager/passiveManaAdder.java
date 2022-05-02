package tech.nully.primplug.manaManager;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;

import tech.nully.primplug.Main;

public class passiveManaAdder {
    public void addMana() {
        Main main = new Main();
        manaManager m = new manaManager();
        Bukkit.getServer().getScheduler().scheduleSyncRepeatingTask(main.main, new Runnable() {
            public void run() {
                for (Player p : Bukkit.getOnlinePlayers()) {
                    if (m.getMana(p) < m.getMaxMana(p)) {
                        m.addMana(p, m.getMaxMana(p)/70);
                    } else {
                        return;
                    }
                }
            }
        }, 15, 15);
    }
}
