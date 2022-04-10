package tech.nully.primplug.planes;

import org.bukkit.event.Listener;

public class planes implements Listener{
    public void onEnable() {
        getServer().getPluginManager().registerEvents(this, this);
    }
}