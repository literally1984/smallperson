package games.bnogocarft.bnogorpg.Planes

import games.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Minecart
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

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
    var isRunning = false
    var destroyed = false
    var continueRun: BukkitTask? = null

    fun spawn(loc: Location) {
        val planeCart = Minecart::class.java
        planeEntity = loc.world.spawn(loc, planeCart)
        isSpawned = true
        planes[planeEntity] = key.item
    }

    fun start(p: Player) {
        if (p.vehicle.equals(planeEntity)) {
            planeEntity.derailedVelocityMod = Vector(0.5,0.5,0.5)
            val velo = Vector(p.location.direction.x, 0.5, p.location.direction.z)
            planeEntity.velocity = velo
            var i = 4 // Task will run 10 times.
            var task: BukkitTask? = null


            task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                fun run() {
                    if(i != 0) {
                        planeEntity.velocity = velo
                        i--
                    } else {
                        task!!.cancel()
                    }
                }}, 0, 1)

            val continueVelo = Vector(p.location.direction.x, 0.0, p.location.direction.z)
            val travelSpeed = speed/20
            var loopsTilFuel = 20
            isRunning = true
            // TODO: make sure Bukkit scheduler isnt multi-threaded
            continueRun = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                fun run() {
                    val destination = Location(p.world, p.location.x + travelSpeed, p.location.y, p.location.z + travelSpeed)
                    planeEntity.velocity = (destination.subtract(p.location)).toVector()
                    loopsTilFuel -= 1
                    if (loopsTilFuel == 0) {
                        fuel =- 1
                        loopsTilFuel = 20
                    }
                    if (fuel == 0) {
                        stop()
                    }
                }}, 0, 1)
        }
    }

    fun stop() {
        if (isRunning) {
            isRunning = false
            continueRun!!.cancel()
        }
    }

    fun collect() {
        if (!isRunning) {
            if (isSpawned) {
                planeEntity.remove()
                isSpawned = false
                planes.remove(planeEntity)
            }
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