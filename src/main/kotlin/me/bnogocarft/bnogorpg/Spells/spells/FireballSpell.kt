package me.bnogocarft.bnogorpg.Spells.spells

import me.bnogocarft.bnogorpg.Utils.Abilities.Spell
import org.bukkit.Material
import org.bukkit.entity.Fireball
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

class FireballSpell : Spell {
    override var displayItem: ItemStack = ItemStack(Material.FIREBALL)
    override var name = "Fireball"

    override fun cast(caster: Player) {
        val fireball = caster.world.spawn(caster.location, Fireball::class.java)
        fireball.velocity = caster.location.direction.normalize().multiply(2)
    }
}