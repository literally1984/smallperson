package me.bnogocarft.bnogorpg.planes

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryMisc
import me.bnogocarft.bnogorpg.utils.getYawFromVector
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Minecart
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Vector

val planes = HashMap<Minecart, Plane>()
val planeEntitites = HashMap<ItemStack, Plane>()

class PlaneKeyItem {
    init {
        makePlaneKey()
    }

    companion object {
        var key: ItemStack = ItemStack(Material.TRIPWIRE)
        private fun makePlaneKey() {

        }
    }
}

data class Plane(val key: ItemStack) {
    val stats = PlaneStat(key)
    var isSpawned = false
    var isRunning = false
    var isDestroyed = false
    var isSteering = false

    lateinit var plane: Minecart


    fun spawn(loc: Location): Boolean {
        return if (isSpawned) {
            false
        } else {
            isSpawned = true
            plane = loc.world.spawn(loc, Minecart::class.java)
            planes[plane] = this
            true
        }
    }

    fun collect() {
        if (isSpawned) {
            isSpawned = false
            plane.remove()
            planes.remove(plane)
        }
    }

    fun start(p: Player) {
        if (isSpawned && !isRunning) {
            print("started successfully")
            p.sendMessage("You started your plane successfully!")
            isRunning = true
            val pLoc = p.location
            val pDir = pLoc.direction
            pDir.normalize()
            pDir.multiply(stats.currentSpeed / 20)
            pLoc.add(pDir)
            val yVector = pDir.subtract(pLoc.toVector())

            val noYVector = Vector(yVector.x, 0.0, yVector.z)

            plane.flyingVelocityMod = Vector(1, 1, 1)
            plane.derailedVelocityMod = Vector(1, 1, 1)
            print("Math completed")

            Bukkit.getServer().scheduler.scheduleSyncRepeatingTask(Main.instance, Runnable {
                if (!isSteering && isRunning) {
                    plane.velocity = noYVector
                    plane.location.yaw = getYawFromVector(noYVector)
                }
            }, 0L, 1L)
        }
    }

    fun stop() {
        if (isRunning) {
            isRunning = false
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