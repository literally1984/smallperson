package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.utils.ability.Abilities.LightningChain
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.factory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
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

        val ability = LightningChain()
        facItem.abilities.add(ability)
        facItem.stats = arrayListOf(11, 3, 9, 2, 45, 40)
        facItem.rarity = Rarity.DIVINE

        blade = BItemFactory.produceItem(facItem)
        BItemFactory.register("thunderbolt", blade)
    }

}