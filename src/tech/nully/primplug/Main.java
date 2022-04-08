package tech.nully.primplug;

import com.comphenix.protocol.PacketType;
import com.comphenix.protocol.ProtocolLibrary;
import com.comphenix.protocol.ProtocolManager;
import com.comphenix.protocol.events.ListenerPriority;
import com.comphenix.protocol.events.PacketAdapter;
import com.comphenix.protocol.events.PacketContainer;
import com.comphenix.protocol.events.PacketEvent;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

import tech.nully.primplug.Items.Talisman;
import tech.nully.primplug.Items.WASDPlaneKey;
import tech.nully.primplug.Items.Armor.Drakon;
import tech.nully.primplug.Items.Armor.PetheriteSet;
import tech.nully.primplug.Listeners.armorListeners;
import tech.nully.primplug.Listeners.talismanListeners;
import tech.nully.primplug.RegularCommands.GetPetherite;

public class Main extends JavaPlugin {
    public static boolean pressW;
    public static boolean pressS;
    public static boolean pressA;
    public static boolean pressD;

    @Override
    public void onEnable() {

        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        WASDPlaneKey.init();
        getCommand("pgive").setExecutor(new GetPetherite());
        getServer().getPluginManager().registerEvents(new talismanListeners(), this);
        getServer().getPluginManager().registerEvents(new armorListeners(), this);
        getServer().getConsoleSender().sendMessage(
        ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + "PrimPlugin is now Enabled!");
        saveDefaultConfig();





        ProtocolManager manager = ProtocolLibrary.getProtocolManager();
        manager.addPacketListener(new PacketAdapter(this, ListenerPriority.NORMAL, PacketType.Play.Client.STEER_VEHICLE) {
            @Override
            public void onPacketReceiving(PacketEvent event) {
                PacketContainer packet = event.getPacket();
                event.getPacket().getHandle();
                Player p = event.getPlayer();
                float a = packet.getFloat().read(1);
                float b = packet.getFloat().read(2);
                if (a > 0) {
                    pressA = true;
                    p.sendMessage("You are moving left!");
                } else {
                    pressA = false;
                }
                if (a < 0) {
                    pressD = true;
                    p.sendMessage("You are moving rigjt!");
                } else {
                    pressD = false;
                }
                if (b > 0) {
                    pressW = true;
                    p.sendMessage("You are moving foward!");
                } else {
                    pressW = false;
                }
                if (b < 0) {
                    pressS = true;
                    p.sendMessage("You are moving back!");
                } else {
                    pressS = false;
                }
            }
        });

        }

    @Override
    public void onDisable() {
        getServer().getConsoleSender().sendMessage(
            ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.RED + "PrimPlugin is now Disabled!");
    }
}