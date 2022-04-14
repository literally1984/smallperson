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
import tech.nully.primplug.Listeners.talismanListeners;
import tech.nully.primplug.RegularCommands.GetPetherite;
import tech.nully.primplug.recipeBook.recipeCommand;

public class Main extends JavaPlugin {
   

    @Override
    public void onEnable() {

        PetheriteSet.init();
        Talisman.init();
        Drakon.init();
        WASDPlaneKey.init();



        getCommand("recipes").setExecutor(new recipeCommand());
        getCommand("pgive").setExecutor(new GetPetherite());
        getServer().getPluginManager().registerEvents(new talismanListeners(), this);
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage(
        ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.GREEN + " PrimPlugin is now Enabled!");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        getServer().getConsoleSender().sendMessage("--------------------------------------------");
        saveDefaultConfig();


        ProtocolManager manager = ProtocolLibrary.getProtocolManager();
        manager.addPacketListener(new PacketAdapter(this, ListenerPriority.NORMAL, PacketType.Play.Client.STEER_VEHICLE) {
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
                System.out.println(p);
            }
        });
    }

    @Override
    public void onDisable() {
        getServer().getConsoleSender().sendMessage(
            ChatColor.LIGHT_PURPLE + "[PrimPlugin]" + ChatColor.RED + "PrimPlugin is now Disabled!");
    }
}