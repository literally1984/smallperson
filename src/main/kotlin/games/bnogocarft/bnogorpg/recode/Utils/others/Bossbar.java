package games.bnogocarft.bnogorpg.recode.Utils.others;

import com.comphenix.packetwrapper.WrapperPlayServerEntityDestroy;
import com.comphenix.packetwrapper.WrapperPlayServerEntityMetadata;
import com.comphenix.packetwrapper.WrapperPlayServerSpawnEntityLiving;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.plugin.java.JavaPlugin;

import com.comphenix.protocol.ProtocolLibrary;
import com.comphenix.protocol.events.PacketContainer;
import java.lang.reflect.InvocationTargetException;
import java.util.logging.Level;

import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.entity.EntityType;
import org.bukkit.entity.Player;
import org.bukkit.scheduler.BukkitTask;

import com.comphenix.protocol.ProtocolManager;
import com.comphenix.protocol.wrappers.WrappedDataWatcher;

public class Bossbar extends JavaPlugin implements CommandExecutor {
    private static final int TICKS_PER_SECOND = 20;

    // You could also use a full-fledged API like RemoteEntities
    private static class FakeWither {
        public static final byte INVISIBLE = 0x20;
        // Just a guess
        private static final int HEALTH_RANGE = 80 * 80;
        // Next entity ID
        private static int NEXT_ID = 6000;

        private static final int METADATA_WITHER_HEALTH = 16; // 1.5.2 -> Change to 16

        // Metadata indices
        private static final int METADATA_FLAGS = 0;
        private static final int METADATA_NAME = 5;        // 1.5.2 -> Change to 5
        private static final int METADATA_SHOW_NAME = 6;   // 1.5.2 -> Change to 6

        // Unique ID
        private int id = NEXT_ID++;
        // Default health
        private int health = 300;

        private boolean visible;
        private String customName;
        private boolean created;

        private Location location;
        private ProtocolManager manager;

        public FakeWither(Location location, ProtocolManager manager) {
            this.location = location;
            this.manager = manager;
        }

        public int getHealth() {
            return health;
        }

        public void setHealth(int health) {
            // Update the health of the entity
            if (created) {
                WrappedDataWatcher watcher = new WrappedDataWatcher();

                watcher.setObject(METADATA_WITHER_HEALTH, (int) health); // 1.5.2 -> Change to (int)
                sendMetadata(watcher);
            }
            this.health = health;
        }

        public void setVisible(boolean visible) {
            // Make visible or invisible
            if (created) {
                WrappedDataWatcher watcher = new WrappedDataWatcher();

                watcher.setObject(METADATA_FLAGS, visible ? (byte)0 : INVISIBLE);
                sendMetadata(watcher);
            }
            this.visible = visible;
        }

        public void setCustomName(String name) {
            if (created) {
                WrappedDataWatcher watcher = new WrappedDataWatcher();

                if (name != null) {
                    watcher.setObject(METADATA_NAME, name);
                    watcher.setObject(METADATA_SHOW_NAME, (byte) 1);
                } else {
                    // Hide custom name
                    watcher.setObject(METADATA_SHOW_NAME, (byte) 0);
                }

                // Only players nearby when this is sent will see this name
                sendMetadata(watcher);
            }
            this.customName = name;
        }

        private void sendMetadata(WrappedDataWatcher watcher) {
            WrapperPlayServerEntityMetadata update = new WrapperPlayServerEntityMetadata();

            update.setEntityId(id);
            update.setEntityMetadata(watcher.getWatchableObjects());
            broadcastPacket(update.getHandle(), true);
        }

        public int getId() {
            return id;
        }

        public void create() {
            WrapperPlayServerSpawnEntityLiving spawnMob = new WrapperPlayServerSpawnEntityLiving();
            WrappedDataWatcher watcher = new WrappedDataWatcher();

            watcher.setObject(METADATA_FLAGS, visible ? (byte)0 : INVISIBLE);
            watcher.setObject(METADATA_WITHER_HEALTH, (int) health); // 1.5.2 -> Change to (int)

            if (customName != null) {
                watcher.setObject(METADATA_NAME, customName);
                watcher.setObject(METADATA_SHOW_NAME, (byte) 1);
            }

            spawnMob.setEntityID(id);
            spawnMob.setType(EntityType.WITHER);
            spawnMob.setX(location.getX());
            spawnMob.setY(location.getY());
            spawnMob.setZ(location.getZ());
            spawnMob.setMetadata(watcher);

            broadcastPacket(spawnMob.getHandle(), true);
            created = true;
        }

        public void destroy() {
            if (!created)
                throw new IllegalStateException("Cannot kill a killed entity.");

            WrapperPlayServerEntityDestroy destroyMe = new WrapperPlayServerEntityDestroy();
            destroyMe.setEntities(new int[] { id });

            broadcastPacket(destroyMe.getHandle(), false);
            created = false;
        }

        private void broadcastPacket(PacketContainer packet, boolean onlyNearby) {
            for (Player player : Bukkit.getServer().getOnlinePlayers()) {
                // Must be within the range
                if (!onlyNearby || player.getLocation().distanceSquared(location) < HEALTH_RANGE) {
                    try {
                        manager.sendServerPacket(player, packet);
                    } catch (InvocationTargetException e) {
                        Bukkit.getLogger().log(Level.WARNING, "Cannot send " + packet + " to " + player, e);
                    }
                }
            }
        }
    }

    private FakeWither wither;
    private BukkitTask task;

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (sender instanceof Player) {
            Player player = (Player) sender;

            if (wither != null) {
                wither.destroy();
                task.cancel();
            }

            // Initialize and create the wither
            wither = new FakeWither(player.getLocation(), ProtocolLibrary.getProtocolManager());
            wither.setCustomName("Countdown Man");
            wither.setVisible(false);
            wither.create();

            // Count down
            task = getServer().getScheduler().runTaskTimer(this, new Runnable() {
                @Override
                public void run() {
                    // Count down
                    wither.setHealth(wither.getHealth() - 1);

                    if (wither.getHealth() <= 0) {
                        wither.destroy();
                        task.cancel();
                    }
                }
            }, TICKS_PER_SECOND / 4, TICKS_PER_SECOND / 4);
        }
        return true;
    }
}