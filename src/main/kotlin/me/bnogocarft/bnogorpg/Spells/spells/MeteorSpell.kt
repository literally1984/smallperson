package me.bnogocarft.bnogorpg.Spells.spells

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.Abilities.Spell
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.minusAssign
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.entity.Fireball
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector
import kotlin.random.Random

class MeteorSpell(r: Int) : Spell {
    override var displayItem: ItemStack = ItemStack(Material.FIREBALL)
        get() {
            val copy = Bukkit.getItemFactory().getItemMeta(field.type)
            val copylore = ArrayList<String>()
            copylore.add("")
            copylore.add("${ChatColor.YELLOW}Summons a meteor at the block your")
            copylore.add("${ChatColor.YELLOW}cursor is on")
            copylore.add("${ChatColor.GOLD}Spell Rank: $rank")

            copy.displayName = "Meteor Summon"
            copy.lore = copylore
            field.itemMeta = copy
            return field
        }
    override val name: String = "${ChatColor.RED}Meteor Summon"
    override val codeName = "meteor"
    override var rank = r
    override var manaCost = 20

    companion object {
        var scroll = ItemStack(Material.PAPER)
        fun init() {
            val fItem = BItemFactory.createBItem(
                "Meteor Summon Scroll",
                Material.PAPER,
                BItemType.SCROLL
            )
            fItem.customAbility.add("${ChatColor.YELLOW}Summons a meteor at the block your")
            fItem.customAbility.add("${ChatColor.YELLOW}cursor is on")
            fItem.levelReq = 10

            fItem.rarity = Rarity.EPIC
            scroll = BItemFactory.produceItem(fItem)
        }
    }

    override fun cast(caster: Player) {
        val bPlayer = OnlineBPlayers[caster]

        if (bPlayer.metadata.contains("MeteorSummonCD")) {
            caster.sendMessage("${ChatColor.RED}This Spell is on cooldown!")
            return
        }
        val targetLocation = caster.getTargetBlock(null, 50).location

        val possibleSpawnPoints = ArrayList<Location>()
        for (row in 0..40) {
            for (column in 0..40) {
                possibleSpawnPoints.add(
                    Location(
                        targetLocation.world,
                        caster.location.x + row,
                        caster.location.y + 6,
                        caster.location.z + column
                    )
                )
            }
        }

        val world = caster.world
        var indexOfFireball = 0
        var task: BukkitTask? = null
        task = Bukkit.getScheduler().runTaskTimer(
            Main.instance,
            {
                if (indexOfFireball < 50) {
                    val loc = possibleSpawnPoints[Random.nextInt(possibleSpawnPoints.size)]
                    loc.world.spawn(loc, Fireball::class.java).apply {
                        velocity = (targetLocation.toVector().subtract(location.toVector())).normalize().multiply(2)
                        shooter = caster
                    }
                    indexOfFireball++
                } else {
                    Bukkit.getScheduler().cancelTask(task!!.taskId)
                }
            }, 0, 5
        )

        bPlayer.metadata["MeteorSummonCD"] = 10

        var removeTask: BukkitTask? = null
        removeTask = Bukkit.getScheduler().runTaskTimer(
            Main.instance,
            {
                if (bPlayer.metadata["MeteorSummonCD"] as Int == 0) {
                    bPlayer.metadata.remove("MeteorSummonCD")
                    removeTask!!.cancel()
                    return@runTaskTimer
                }
                bPlayer.metadata["MeteorSummonCD"] -= 1
            }, 0, 20
        )
    }
}
