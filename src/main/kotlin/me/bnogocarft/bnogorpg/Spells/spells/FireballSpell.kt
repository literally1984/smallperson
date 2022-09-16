package me.bnogocarft.bnogorpg.Spells.spells

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

class FireballSpell(r: Int) : Spell {
    override var displayItem: ItemStack = ItemStack(Material.FIREBALL)
        get() {
            val copy = Bukkit.getItemFactory().getItemMeta(field.type)
            val copylore = ArrayList<String>()
            copylore.add("")
            copylore.add("${ChatColor.YELLOW}Shoots a fireball at the direction")
            copylore.add("${ChatColor.YELLOW}you are lookig at")
            copylore.add("${ChatColor.GOLD}Spell Rank: $rank")

            copy.displayName = "Fireball"
            copy.lore = copylore
            field.itemMeta = copy
            return field
        }

    companion object {
        var scroll = ItemStack(Material.PAPER)
        fun init() {
            val fItem = BItemFactory.createBItem(
                "Fireball Spell Scroll",
                Material.PAPER,
                BItemType.SCROLL
            )
            fItem.customAbility.add("${ChatColor.YELLOW}Shoots a fireball at the direction")
            fItem.customAbility.add("${ChatColor.YELLOW}you are lookig at")
            fItem.levelReq = 5

            fItem.rarity = Rarity.UNCOMMON

            scroll = BItemFactory.produceItem(fItem)
        }
    }

    override val name = "Fireball"
    override val codeName = "fireball"
    override var rank = r
    override var manaCost = 10

    override fun cast(caster: Player) {
        val fireball = caster.world.spawn(
            caster.location.add(caster.location.direction.normalize().multiply(1)),
            Fireball::class.java
        )
        fireball.velocity = caster.location.direction.normalize().multiply(2)
        val p = OnlineBPlayers[caster]
    }
}