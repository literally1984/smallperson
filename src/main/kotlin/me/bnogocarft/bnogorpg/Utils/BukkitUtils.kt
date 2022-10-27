package me.bnogocarft.bnogorpg.Utils

import net.minecraft.server.v1_5_R3.Packet62NamedSoundEffect
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.craftbukkit.v1_5_R3.entity.CraftPlayer
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.inventory.ItemStack

fun playSound(location: Location, sound: String, volume: Float, pitch: Float) {
    val packet = Packet62NamedSoundEffect(
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