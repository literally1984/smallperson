package tech.nully.primplug.planes;

import com.comphenix.protocol.PacketType;
import com.comphenix.protocol.ProtocolManager;
import com.comphenix.protocol.events.ListenerPriority;
import com.comphenix.protocol.events.PacketAdapter;
import com.comphenix.protocol.events.PacketContainer;
import com.comphenix.protocol.events.PacketEvent;

import org.bukkit.entity.Player;

import tech.nully.primplug.Main;

public class planes {
    public void protocolLib(ProtocolManager manager) {
        Main main = new Main();
        manager.addPacketListener(new PacketAdapter(main, ListenerPriority.NORMAL, PacketType.Play.Client.STEER_VEHICLE) {
            @Override
            public void onPacketReceiving(PacketEvent event) {
                PacketContainer packet = event.getPacket();
                Player p = event.getPlayer();
                float sideways = packet.getFloat().read(0);
                float foward = packet.getFloat().read(1);
                if (sideways > 0) {
                    p.sendMessage("You are moving left");
                } else if(sideways < 0) {
                    p.sendMessage("You are moving right");
                }
                if (foward > 0) {
                    p.sendMessage("You are moving foward");
                } else if (foward < 0) {
                    p.sendMessage("You are moving backward");
                }
            }
        });
    }
}
