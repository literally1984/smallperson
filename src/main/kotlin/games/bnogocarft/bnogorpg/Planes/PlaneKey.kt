package games.bnogocarft.bnogorpg.Planes

import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Minecart
import org.bukkit.inventory.ItemStack

val planes = HashMap<Minecart, ItemStack>()

class PlaneKeyItem {
    init {
        makePlaneKey()
    }
    companion object {
        lateinit var key: ItemStack
        private fun makePlaneKey() {
            // final will look like this:
            // Plane Key
            // Used to spawn and collect planes
            // Right click this on the ground to spawn
            // your plane and Right click your spawned
            // plane to collect it.

            // Speed: x (x% of max x speed)
            // Health: x (x% of max x health)
            // Fuel: x (x% of max x fuel)
            val k = ItemStack(Material.TRIPWIRE)
            val meta = Bukkit.getItemFactory().getItemMeta(Material.TRIPWIRE)
            val lore = ArrayList<String>()
            lore.add("Used to spawn and collect planes")
            lore.add("Right click this on the ground to spawn")
            lore.add("your plane and Right click your spawned")
            lore.add("plane to collect it.")
            lore.add("")
            lore.add("Speed: 3 (75% of max 4 speed)")
            lore.add("Health: 50 (100% of max 50 health)")
            lore.add("Fuel: 100 (100% of max 100 fuel)")
            meta.lore = lore
            k.itemMeta = meta

            key = k
        }
    }
}
data class PlaneKey(val item: ItemStack) {
    val stats = PlaneStat(item)
    val plane = PlaneEntity(this)
}

data class PlaneEntity(val key: PlaneKey) {
    lateinit var planeEntity: Minecart
    var speed = key.stats.currentSpeed
    var health = key.stats.currentHealth
    var fuel = key.stats.currentFuel
    var maxSpeed = key.stats.maxSpeed
    var maxHealth = key.stats.maxHealth
    var maxFuel = key.stats.maxFuel
    var isSpawned = false
     var destroyed = false
    fun spawn(loc: Location) {
        val planeCart = Minecart::class.java
        planeEntity = loc.world.spawn(loc, planeCart)
        isSpawned = true
        planes[planeEntity] = key.item
    }

    fun collect() {
        if (isSpawned) {
            planeEntity.remove()
            isSpawned = false
            planes.remove(planeEntity)
        }
    }
}

data class PlaneStat(val plane: ItemStack) {
    private val speedLine = plane.itemMeta.lore[5].split(" ")
    private val healthLine = plane.itemMeta.lore[6].split(" ")
    private val fuelLine = plane.itemMeta.lore[7].split(" ")

    var maxSpeed: Int = 0
        set(value) {
            speedLine[5].replace(maxSpeed.toString(), value.toString())
            plane.itemMeta.lore[5] = speedLine.joinToString(" ")
            field = value
        }
    var maxFuel: Int = 0
        set(value) {
            fuelLine[5].replace(maxFuel.toString(), value.toString())
            plane.itemMeta.lore[7] = fuelLine.joinToString(" ")
            field = value
        }
    var maxHealth: Int = 0
        set(value) {
            healthLine[5].replace(maxHealth.toString(), value.toString())
            plane.itemMeta.lore[6] = healthLine.joinToString(" ")
            field = value
        }
    var currentSpeed: Int = 0
        set(value) {
            speedLine[1].replace(currentSpeed.toString(), value.toString())
            plane.itemMeta.lore[5] = speedLine.joinToString(" ")
            field = value
        }
    var currentFuel: Int = 0
        set(value) {
            fuelLine[1].replace(currentFuel.toString(), value.toString())
            plane.itemMeta.lore[7] = fuelLine.joinToString(" ")
            field = value
        }
    var currentHealth: Int = 0
        set(value) {
            healthLine[1].replace(currentHealth.toString(), value.toString())
            plane.itemMeta.lore[6] = healthLine.joinToString(" ")
            field = value
        }

    init {
        currentSpeed = speedLine[1].toInt()
        maxSpeed = speedLine[5].toInt()

        currentHealth = healthLine[1].toInt()
        maxHealth = healthLine[5].toInt()

        currentFuel = fuelLine[1].toInt()
        maxFuel = fuelLine[5].toInt()
    }
}