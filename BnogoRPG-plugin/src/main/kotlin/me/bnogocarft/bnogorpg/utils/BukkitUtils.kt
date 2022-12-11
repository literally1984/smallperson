package me.bnogocarft.bnogorpg.utils

import me.bnogocarft.bnogorpg.entity.BEntity
import me.bnogocarft.bnogorpg.entity.BLivingEntity
import me.bnogocarft.bnogorpg.utils.bitem.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.BItems.*
import me.bnogocarft.bnogorpg.utils.bitem.SerializableItem
import me.bnogocarft.bnogorpg.utils.bitem.factory.*
import net.minecraft.server.v1_8_R3.*
import org.apache.commons.lang3.SerializationUtils
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.craftbukkit.v1_8_R3.CraftWorld
import org.bukkit.craftbukkit.v1_8_R3.entity.CraftLivingEntity
import org.bukkit.craftbukkit.v1_8_R3.entity.CraftPlayer
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Vector
import java.io.File
import java.io.Serializable
import kotlin.math.pow
import kotlin.math.roundToInt
import kotlin.reflect.KClass
import kotlin.reflect.KMutableProperty
import kotlin.reflect.full.declaredMemberProperties
import kotlin.reflect.full.memberProperties


val entityMetadata = HashMap<Entity, Pair<String, Any>>()
fun Entity.addData(key: String, value: Any) {
    entityMetadata[this] = Pair(key, value)
}

fun Entity.hasData(key: String): Boolean {
    return entityMetadata.contains(this) && try {
        entityMetadata[this]?.first == key
    } catch (e: NullPointerException) {
        false
    }
}

fun Entity.getData(key: String): Any? {
    return entityMetadata[this]?.second
}

operator fun Vector.plus(vector: Vector): Vector {
    return this.add(vector)
}

operator fun Vector.minus(vector: Vector): Vector {
    return this.subtract(vector)
}

operator fun Vector.times(vector: Double): Vector {
    return this.multiply(vector)
}

operator fun Vector.div(vector: Vector): Vector {
    return this.divide(vector)
}

fun ItemStack.glow(): ItemStack {
    if (type == Material.BOW) {
        addEnchantment(Enchantment.WATER_WORKER, 32)
        return this
    } else {
        addEnchantment(Enchantment.ARROW_DAMAGE, 32)
        return this
    }
}

enum class B {
    WEAPON, ARMOR, GEAR, ITEM, TALISMAN, SCROLL, ENCHANTABLE, MISC, MAGIC_ITEM;
}

infix fun ItemStack.canBe(type: B): Boolean {
    if (!hasItemMeta() && itemMeta.lore == null) return false
    val identifier = itemMeta.lore[itemMeta.lore.size - 1]
    when (type) {
        B.GEAR -> {
            if (this canBe B.ITEM) {
                if (identifier.contains(armorIdentifier) || identifier.contains(weaponIdentifier)) return true
            }
            return false
        }

        B.ARMOR -> {
            if (this canBe B.GEAR) {
                if (identifier.contains(armorIdentifier)) return true
            }
            return false
        }

        B.WEAPON -> {
            if (this canBe B.GEAR) {
                if (identifier.contains(weaponIdentifier)) return true
            }
            return false
        }

        B.ITEM -> {
            return identifier.contains(weaponIdentifier) ||
                    identifier.contains(talismanIdentifier) ||
                    identifier.contains(armorIdentifier) ||
                    identifier.contains(scrollIdentifier) ||
                    identifier.contains(miscIdentifier)
        }

        B.TALISMAN -> {
            if (this canBe B.MAGIC_ITEM) {
                if (identifier.contains(talismanIdentifier)) return true
            }
            return false
        }

        B.SCROLL -> {
            if (this canBe B.MAGIC_ITEM) {
                if (identifier.contains(scrollIdentifier)) return true
            }
            return false
        }

        B.ENCHANTABLE -> {
            if (this canBe B.GEAR) {
                return true
            }
            if (this canBe B.TALISMAN) {
                return true
            }
            return false
        }

        B.MISC -> {
            if (identifier.contains(miscIdentifier)) return true
        }

        B.MAGIC_ITEM -> {
            if (this canBe B.TALISMAN || this canBe B.SCROLL) return true
        }
    }
    return false
}

infix fun Player.has(item: ItemStack): Boolean {
    return inventory.contains(item)
}

fun playSound(location: Location, sound: String, volume: Float, pitch: Float) {
    val packet = PacketPlayOutNamedSoundEffect(
        sound,
        location.x,
        location.y,
        location.z,
        volume,
        pitch
    )
    for (player in Bukkit.getOnlinePlayers()) {
        (player as CraftPlayer).handle.playerConnection.sendPacket(packet)
    }
}

interface SpawnZone {
    val topLeft: Location
    val bottomRight: Location
    val gear: ArrayList<ItemStack?>
    val mobAmount: Int
}

data class SpawnArea(
    override val topLeft: Location, override val bottomRight: Location,
    override val gear: ArrayList<ItemStack?>, override val mobAmount: Int
) : SpawnZone {
    constructor(topLeft: Float, bottomRight: Float, gear: ArrayList<ItemStack?>, mobs: Int) : this(
        Location(Bukkit.getWorld("world"), topLeft.toDouble(), 0.0, topLeft.toDouble()),
        Location(Bukkit.getWorld("world"), bottomRight.toDouble(), 0.0, bottomRight.toDouble()),
        gear,
        mobs
    )
}

fun Location.isInSpawnArea(SpawnArea: SpawnArea): Boolean {
    return this.x >= SpawnArea.topLeft.x &&
            this.x <= SpawnArea.bottomRight.x &&
            this.z >= SpawnArea.topLeft.z &&
            this.z <= SpawnArea.bottomRight.z
}

data class SpawnRing(
    override val topLeft: Location,
    override val bottomRight: Location,
    val centerTopLeft: Location,
    val centerBottomRight: Location, override val gear: ArrayList<ItemStack?>, override val mobAmount: Int
) : SpawnZone {
    constructor(excluded: SpawnArea, topLeft: Float, bottomRight: Float, gear: ArrayList<ItemStack?>, mobs: Int) : this(
        excluded.topLeft,
        excluded.bottomRight,
        Location(Bukkit.getWorld("world"), topLeft.toDouble(), 0.0, topLeft.toDouble()),
        Location(Bukkit.getWorld("world"), bottomRight.toDouble(), 0.0, bottomRight.toDouble()),
        gear,
        mobs
    )

    constructor(excluded: SpawnRing, topLeft: Float, bottomRight: Float, gear: ArrayList<ItemStack?>, mobs: Int) : this(
        excluded.topLeft,
        excluded.bottomRight,
        Location(Bukkit.getWorld("world"), topLeft.toDouble(), 0.0, topLeft.toDouble()),
        Location(Bukkit.getWorld("world"), bottomRight.toDouble(), 0.0, bottomRight.toDouble()),
        gear,
        mobs
    )
}

fun Location.isInSpawnRing(SpawnRing: SpawnRing): Boolean {
    return this.x >= SpawnRing.topLeft.x &&
            this.x <= SpawnRing.bottomRight.x &&
            this.z >= SpawnRing.topLeft.z &&
            this.z <= SpawnRing.bottomRight.z &&
            !(this.x >= SpawnRing.centerTopLeft.x &&
                    this.x <= SpawnRing.centerBottomRight.x &&
                    this.z >= SpawnRing.centerTopLeft.z &&
                    this.z <= SpawnRing.centerBottomRight.z)
}

data class SpawnEdge(
    override val topLeft: Location,
    override val bottomRight: Location,
    override val gear: ArrayList<ItemStack?>, override val mobAmount: Int
) : SpawnZone {
    constructor(SpawnRing: SpawnRing, gear: ArrayList<ItemStack?>, mobs: Int) : this(
        SpawnRing.topLeft,
        SpawnRing.bottomRight,
        gear,
        mobs
    )

    constructor(topLeft: Float, bottomRight: Float, gear: ArrayList<ItemStack?>, mobs: Int) : this(
        Location(Bukkit.getWorld("world"), topLeft.toDouble(), 0.0, topLeft.toDouble()),
        Location(Bukkit.getWorld("world"), bottomRight.toDouble(), 0.0, bottomRight.toDouble()),
        gear,
        mobs
    )
}

fun Location.isInSpawnEdge(SpawnEdge: SpawnEdge): Boolean {
    return this.x >= SpawnEdge.topLeft.x &&
            this.x <= SpawnEdge.bottomRight.x &&
            this.z >= SpawnEdge.topLeft.z &&
            this.z <= SpawnEdge.bottomRight.z
}

fun Entity.setGear(slot: Int, item: ItemStack) {
    val equipment = (this as LivingEntity).equipment
    when (slot) {
        1 -> equipment.helmet = item
        2 -> equipment.chestplate = item
        3 -> equipment.leggings = item
        4 -> equipment.boots = item
        5 -> equipment.itemInHand = item
    }
}

fun Entity.bEntity(): BEntity {
    return BEntity(this)
}

fun LivingEntity.bEntity(): BLivingEntity {
    return BLivingEntity(this)
}


fun LivingEntity.setAi(enabled: Boolean) {
    val handle = (this as CraftLivingEntity).handle
    handle.dataWatcher.watch(15, (if (enabled) 0 else 1).toByte())
}

fun getExpAtLevel(level: Int): Int {
    return if (level <= 16) {
        (Math.pow(level.toDouble(), 2.0) + 6 * level).toInt()
    } else if (level <= 31) {
        (2.5 * Math.pow(level.toDouble(), 2.0) - 40.5 * level + 360.0).toInt()
    } else {
        (4.5 * Math.pow(level.toDouble(), 2.0) - 162.5 * level + 2220.0).toInt()
    }
}

fun Long.getNeededExp(): Int {
    return ((3.2 * (toDouble().pow(3.0))) / 5).roundToInt()

}

val currentlyClicking = HashMap<Player, PlayerInteractEvent>()
fun PlayerInteractEvent.onStop(handler: (playerInteractEvent: PlayerInteractEvent) -> Unit) {

}

fun Location.addFakeBlock(who: Player, block: Material): PacketPlayOutBlockChange {
    val packet = PacketPlayOutBlockChange((this.world as CraftWorld).handle, BlockPosition(this.x, this.y, this.z))
    (who as CraftPlayer).sendPacket(packet)
    return packet
}

fun Location.spawnParticle(particle: EnumParticle) {
    val packet = PacketPlayOutWorldParticles(
        particle,
        true,
        this.x.toFloat(),
        this.y.toFloat(),
        this.z.toFloat(),
        0f,
        0f,
        0f,
        0f,
        1
    )
    for (player in Bukkit.getOnlinePlayers()) {
        (player as CraftPlayer).handle.playerConnection.sendPacket(packet)
    }
}

fun Player.sendPacket(packet: Packet<*>) {
    (this as CraftPlayer).handle.playerConnection.sendPacket(packet)
}

fun ItemStack.getTopBItem(): KClass<out BItem> {
    return if (this canBe B.TALISMAN) {
        Talisman::class
    } else if (this canBe B.WEAPON) {
        BWeapon::class
    } else if (this canBe B.ARMOR) {
        BArmor::class
    } else {
        BScroll::class
    }
}

fun ItemStack.toByteArray(): ByteArray {
    val file = File("ItemStack.yml")
    val config = YamlConfiguration.loadConfiguration(file)

    config.set("item", this)
    config.save(file)

    return SerializationUtils.serialize(file)
}

fun ItemStack.fromByteArray(bytes: ByteArray): ItemStack {
    val file = SerializationUtils.deserialize<File>(bytes)
    val config = YamlConfiguration.loadConfiguration(file)
    return config.getItemStack("item")
}