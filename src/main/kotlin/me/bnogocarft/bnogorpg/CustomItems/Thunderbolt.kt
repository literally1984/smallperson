package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class Thunderbolt {
    companion object {
        lateinit var blade: ItemStack
    }

    init {
        createBlade()
    }

    private fun createBlade() {
        val facItem = BItemFactory.createBItem("Thunderbolt", Material.BLAZE_ROD, BItemType.WEAPON)

        val ability = ItemAbility.LightningChain
        facItem.abilities.add(ability)
        facItem.stats = arrayListOf(11, 3, 9, 2, 45, 40)
        facItem.rarity = Rarity.DIVINE

        blade = BItemFactory.produceItem(facItem)
        BItemFactory.register("thunderbolt", blade)
    }

}