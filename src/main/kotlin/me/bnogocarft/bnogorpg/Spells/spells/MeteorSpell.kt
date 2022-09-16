package me.bnogocarft.bnogorpg.Spells.spells

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.Abilities.Spell
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.entity.Fireball
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.util.Vector

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
        val targetLocation = caster.getTargetBlock(null, 200).location

        val world = caster.world
        val meteor1 = world.spawn(
            caster.location.add(Vector(0.0, 3.0, 0.0)),
            Fireball::class.java
        )
        val meteor2 = world.spawn(
            caster.location.add(Vector(0.0, 5.0, 0.0)),
            Fireball::class.java
        )
        val meteor3 = world.spawn(
            caster.location.add(Vector(0.0, 7.0, 0.0)),
            Fireball::class.java
        )
        val meteor4 = world.spawn(
            caster.location.add(Vector(0.0, 9.0, 0.0)),
            Fireball::class.java
        )
        val meteor5 = world.spawn(
            caster.location.add(Vector(0.0, 11.0, 0.0)),
            Fireball::class.java
        )

        meteor1.velocity = (targetLocation.toVector().subtract(meteor1.location.toVector())).normalize().multiply(2)
        meteor1.velocity = (targetLocation.toVector().subtract(meteor2.location.toVector())).normalize().multiply(2)
        meteor1.velocity = (targetLocation.toVector().subtract(meteor3.location.toVector())).normalize().multiply(2)
        meteor1.velocity = (targetLocation.toVector().subtract(meteor4.location.toVector())).normalize().multiply(2)
        meteor1.velocity = (targetLocation.toVector().subtract(meteor5.location.toVector())).normalize().multiply(2)
        val p = OnlineBPlayers[caster]
        p.stats.currentMana -= 20
    }
}