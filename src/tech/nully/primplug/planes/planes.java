package tech.nully.primplug.planes;

import com.comphenix.protocol.PacketType;
import com.comphenix.protocol.events.ListenerPriority;
import com.comphenix.protocol.events.PacketAdapter;
import com.comphenix.protocol.events.PacketContainer;
import com.comphenix.protocol.events.PacketEvent;

import org.bukkit.entity.Player;

import tech.nully.primplug.Main;

public class planes {
    private final Main plugin;

    // constructor
    public planes(Main plugin) {
        this.plugin = plugin;
    }

    public void addPacketListener() {
        // note that "this" has been changed to "plugin"
        plugin.getProtocolManager().addPacketListener(new PacketAdapter(plugin, ListenerPriority.NORMAL, PacketType.Play.Client.STEER_VEHICLE) {
            @Override
            public void onPacketReceiving(PacketEvent e) {
                PacketContainer packet = e.getPacket();
                Player p = e.getPlayer();
                float sideways = packet.getFloat().read(0);
                float foward = packet.getFloat().read(1);
                boolean jump = packet.getBooleans().read(0);
                boolean crouch = packet.getBooleans().read(1);
                System.out.println(sideways);
                System.out.println(foward);
                System.out.println(jump);
                System.out.println(crouch);
            }
        });
    }
}
