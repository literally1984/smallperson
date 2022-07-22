package games.bnogocarft.bnogorpg.Planes

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.Abilities.getYawFromVector
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Minecart
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

val planes = HashMap<Minecart, PlaneEntity>()

class PlaneKeyItem {
    init {
        makePlaneKey()
    }
    companion object {
        var key: ItemStack = ItemStack(Material.TRIPWIRE)
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
            lore.add("${ChatColor.YELLOW}Used to spawn and collect planes")
            lore.add("${ChatColor.YELLOW}Right click this on the ground to spawn")
            lore.add("${ChatColor.YELLOW}your plane and Right click your spawned")
            lore.add("${ChatColor.YELLOW}plane to collect it.")
            lore.add("")
            lore.add("${ChatColor.YELLOW}Speed: ${ChatColor.WHITE}3 ${ChatColor.DARK_GRAY}(75% of max 4 speed)")
            lore.add("${ChatColor.YELLOW}Health: ${ChatColor.WHITE}50 ${ChatColor.DARK_GRAY}(100% of max 50 health)")
            lore.add("${ChatColor.YELLOW}Fuel: ${ChatColor.WHITE}100 ${ChatColor.DARK_GRAY}(100% of max 100 fuel)")
            meta.lore = lore
            k.itemMeta = meta

            key = k
            BItemFactory.register("planekey", key)
        }
    }
}

data class PlaneEntity(val key: ItemStack) {
    val stats = PlaneStat(key)
    var isSpawned = false
    var isRunning = false
    var isDestroyed = false
    var isSteering = false
    lateinit var continueRunScheduler: BukkitTask

    lateinit var plane: Minecart



    fun spawn(loc: Location) {
        isSpawned = true
        plane = loc.world.spawn(loc, Minecart::class.java)
        planes[plane] = this
    }

    fun collect() {
        if (isSpawned) {
            isSpawned = false
            plane.remove()
        }
    }

    fun start(p: Player) {
        if (isSpawned && !isRunning) {
            isRunning = true
            val pLoc = p.location
            val pDir = pLoc.direction
            pDir.normalize()
            pDir.multiply(stats.currentSpeed/20)
            pLoc.add(pDir)
            val yVector = pDir.subtract(pLoc.toVector())

            val noYVector = Vector(yVector.x, 0.0, yVector.z)

            plane.flyingVelocityMod = Vector(1,1,1)
            plane.derailedVelocityMod = Vector(1,1,1)

            continueRunScheduler = Bukkit.getServer().scheduler.runTaskTimer(Main.instance, Runnable() {
                if (!isSteering) {
                    plane.velocity = noYVector
                    plane.location.yaw = getYawFromVector(noYVector)
                }
            }, 0L, 1L)
        }
    }

    fun stop() {
        if (isRunning) {
            isRunning = false
            continueRunScheduler.cancel()
            plane.velocity = Vector(0.0, 0.0, 0.0)
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
        print(speedLine)
        print(healthLine)
        print(fuelLine)
        currentSpeed = speedLine[1].replace("§f", "").toInt()
        maxSpeed = speedLine[5].toInt()

        currentHealth = healthLine[1].replace("§f", "").toInt()
        maxHealth = healthLine[5].toInt()

        currentFuel = fuelLine[1].replace("§f", "").toInt()
        maxFuel = fuelLine[5].toInt()
    }
}