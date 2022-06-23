package tech.nully.primplug.planes;

import com.comphenix.protocol.PacketType;
import com.comphenix.protocol.events.ListenerPriority;
import com.comphenix.protocol.events.PacketAdapter;
import com.comphenix.protocol.events.PacketContainer;
import com.comphenix.protocol.events.PacketEvent;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import tech.nully.primplug.API.events.VehicleSteerEvent;

public class PacketListener {

    public void onVehicleSteer() {
        Main.getProtocolManager().addPacketListener(
                new PacketAdapter(Main.getInstance(), ListenerPriority.NORMAL, PacketType.Play.Client.STEER_VEHICLE) {

                    @Override
                    public void onPacketReceiving(PacketEvent event) {
                        final Player player = event.getPlayer();
                        if (event.getPacketType() == PacketType.Play.Client.STEER_VEHICLE && player.getVehicle() != null) {
                            final PacketContainer packet = event.getPacket();


                            final float right = event.getPacket().getFloat().readSafely(0); // positive means right, negative is left
                            String key = null;

                            if (right > 0) {
                                key = "a";
                                player.sendMessage("a");
                            } else if (right < 0) {
                                key = "d";
                                player.sendMessage("d");
                            }

                            final float forward = event.getPacket().getFloat().readSafely(1); // positive means forward, negative is backwards

                            if (forward > 0) {
                                key = "w";
                                player.sendMessage("w");
                            } else if (forward < 0) {
                                key = "s";
                                player.sendMessage("s");
                            }


                            try {
                                if (event.getPacket().getBooleans().readSafely(1)) {
                                    key = "shift";
                                    player.sendMessage("shift");
                                }
                                if (event.getPacket().getBooleans().readSafely(0)) {
                                    //player has pressed space
                                    key = " ";
                                    player.sendMessage("space");
                                }
                            } catch (Error | Exception e45) {
                            }

                            if (key == null) {
                                key = "null";
                            }
                            VehicleSteerEvent steerEvent = new VehicleSteerEvent(player, key);
                            Bukkit.getPluginManager().callEvent(steerEvent);

                        }
                    }

                });
    }
}
