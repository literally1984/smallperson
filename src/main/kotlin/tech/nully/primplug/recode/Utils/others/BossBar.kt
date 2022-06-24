package tech.nully.primplug.recode.Utils.others

import com.comphenix.packetwrapper.Packet47SpawnGlobalEntity
import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import com.comphenix.protocol.events.PacketContainer
import com.comphenix.protocol.wrappers.WrappedDataWatcher
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask
import java.lang.reflect.InvocationTargetException
import java.util.logging.Level

class SpawnFakeWither : JavaPlugin() {
    // You could also use a full-fledged API like RemoteEntities
    private class FakeWither(private val location: Location, private val manager: ProtocolManager) {
        // Unique ID
        val id = NEXT_ID++

        // Default health
        private var health = 300
        private var visible = false
        private var customName: String? = null
        private var created = false
        fun getHealth(): Int {
            return health
        }

        fun setHealth(health: Int) {
            // Update the health of the entity
            if (created) {
                val watcher = WrappedDataWatcher()
                watcher.setObject(METADATA_WITHER_HEALTH, health.toInt()) // 1.5.2 -> Change to (int)
                sendMetadata(watcher)
            }
            this.health = health
        }

        fun setVisible(visible: Boolean) {
            // Make visible or invisible
            if (created) {
                val watcher = WrappedDataWatcher()
                watcher.setObject(METADATA_FLAGS, if (visible) 0.toByte() else INVISIBLE)
                sendMetadata(watcher)
            }
            this.visible = visible
        }

        fun setCustomName(name: String?) {
            if (created) {
                val watcher = WrappedDataWatcher()
                if (name != null) {
                    watcher.setObject(METADATA_NAME, name)
                    watcher.setObject(METADATA_SHOW_NAME, 1.toByte())
                } else {
                    // Hide custom name
                    watcher.setObject(METADATA_SHOW_NAME, 0.toByte())
                }

                // Only players nearby when this is sent will see this name
                sendMetadata(watcher)
            }
            customName = name
        }

        private fun sendMetadata(watcher: WrappedDataWatcher) {
            val update = Packet47SpawnGlobalEntity()
            update.setEntityId(id)
            update.setEntityMetadata(watcher.watchableObjects)
            broadcastPacket(update.getHandle(), true)
        }

        fun create() {
            val spawnMob = WrapperPlayServerSpawnEntityLiving()
            val watcher = WrappedDataWatcher()
            watcher.setObject(METADATA_FLAGS, if (visible) 0.toByte() else INVISIBLE)
            watcher.setObject(METADATA_WITHER_HEALTH, health.toInt()) // 1.5.2 -> Change to (int)
            if (customName != null) {
                watcher.setObject(METADATA_NAME, customName)
                watcher.setObject(METADATA_SHOW_NAME, 1.toByte())
            }
            spawnMob.setEntityID(id)
            spawnMob.setType(EntityType.WITHER)
            spawnMob.setX(location.x)
            spawnMob.setY(location.y)
            spawnMob.setZ(location.z)
            spawnMob.setMetadata(watcher)
            broadcastPacket(spawnMob.getHandle(), true)
            created = true
        }

        fun destroy() {
            check(created) { "Cannot kill a killed entity." }
            val destroyMe = WrapperPlayServerEntityDestroy()
            destroyMe.setEntities(intArrayOf(id))
            broadcastPacket(destroyMe.getHandle(), false)
            created = false
        }

        private fun broadcastPacket(packet: PacketContainer, onlyNearby: Boolean) {
            for (player in Bukkit.getServer().onlinePlayers) {
                // Must be within the range
                if (!onlyNearby || player.location.distanceSquared(location) < HEALTH_RANGE) {
                    try {
                        manager.sendServerPacket(player, packet)
                    } catch (e: InvocationTargetException) {
                        Bukkit.getLogger().log(Level.WARNING, "Cannot send $packet to $player", e)
                    }
                }
            }
        }

        companion object {
            const val INVISIBLE: Byte = 0x20

            // Just a guess
            private const val HEALTH_RANGE = 80 * 80

            // Next entity ID
            private var NEXT_ID = 6000
            private const val METADATA_WITHER_HEALTH = 16 // 1.5.2 -> Change to 16

            // Metadata indices
            private const val METADATA_FLAGS = 0
            private const val METADATA_NAME = 5 // 1.5.2 -> Change to 5
            private const val METADATA_SHOW_NAME = 6 // 1.5.2 -> Change to 6
        }
    }

    private var wither: FakeWither? = null
    private var task: BukkitTask? = null
    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<String>): Boolean {
        if (sender is Player) {
            if (wither != null) {
                wither!!.destroy()
                task!!.cancel()
            }

            // Initialize and create the wither
            wither = FakeWither(sender.location, ProtocolLibrary.getProtocolManager())
            wither!!.setCustomName("Countdown Man")
            wither!!.setVisible(false)
            wither!!.create()

            // Count down
            task = server.scheduler.runTaskTimer(this, { // Count down
                wither!!.setHealth(wither!!.getHealth() - 1)
                if (wither!!.getHealth() <= 0) {
                    wither!!.destroy()
                    task!!.cancel()
                }
            }, (TICKS_PER_SECOND / 4).toLong(), (TICKS_PER_SECOND / 4).toLong())
        }
        return true
    }

    companion object {
        private const val TICKS_PER_SECOND = 20
    }
}