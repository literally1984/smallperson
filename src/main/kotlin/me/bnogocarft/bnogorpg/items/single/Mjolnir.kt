package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.factory.BItemFactory
import me.bnogocarft.bnogorpg.utils.bitem.factory.WeaponMaker
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.inventory.ItemStack

class Mjolnir : WeaponMaker {
    companion object {
        lateinit var hammer: ItemStack
    }

    init {
        createWeapon()
    }

    override fun createWeapon() {
        val fItem = BItemFactory.createBItem("Mjolnir", Material.IRON_PICKAXE, BItemType.WEAPON)
        fItem.abilities.add(HammerFly())
    }
}

class HammerFly : IAbility {
    override val description = arrayListOf(
        "${ChatColor.YELLOW}Holding right click will charge",
        "${ChatColor.YELLOW}your hammer, releasing it will",
        "${ChatColor.YELLOW}cause you to fly based on how",
        "${ChatColor.YELLOW}long you charge (Max 5 seconds).",
        "${ChatColor.YELLOW}Consumes ${ChatColor.AQUA}20 Mana"
    )
    override val name: String
        get() = TODO("Not yet implemented")
    override val type: AbilityTrigger
        get() = TODO("Not yet implemented")

    override fun cast(caster: Player, abilityEvent: Event) {
        TODO("Not yet implemented")
    }
}