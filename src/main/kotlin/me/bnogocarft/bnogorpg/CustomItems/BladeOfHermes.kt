package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
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

        val ability = ItemAbility.QuickDash
        facItem.abilities.add(ability)
        facItem.stats = arrayListOf(8, 2, 3, 1, 30, 25)
        facItem.rarity = Rarity.EPIC

        blade = BItemFactory.produceItem(facItem)
        BItemFactory.register("hermesblade", blade)
    }

}