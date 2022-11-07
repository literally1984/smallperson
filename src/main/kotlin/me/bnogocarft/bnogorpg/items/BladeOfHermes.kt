package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.ItemAbility.Abilities.QuickDash
import me.bnogocarft.bnogorpg.utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class BladeOfHermes {
    companion object {
        lateinit var blade: ItemStack
    }

    init {
        createBlade()
    }

    private fun createBlade() {
        val facItem = BItemFactory.createBItem("Blade of Hermes", Material.DIAMOND_SWORD, BItemType.WEAPON)

        val ability = QuickDash()
        facItem.abilities.add(ability)
        facItem.stats = arrayListOf(8, 2, 3, 1, 30, 25)
        facItem.rarity = Rarity.EPIC

        blade = BItemFactory.produceItem(facItem)
        BItemFactory.register("hermesblade", blade)
    }

}