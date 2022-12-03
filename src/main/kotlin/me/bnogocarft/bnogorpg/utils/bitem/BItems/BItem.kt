package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.factory.*
import me.bnogocarft.bnogorpg.utils.encode
import me.bnogocarft.bnogorpg.utils.others.Rarity.RarityUtils
import org.bukkit.inventory.ItemStack

open class BItem(item: ItemStack) {
    open val item = item

    var material: String
    val abilities = ArrayList<IAbility>()

    var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size - 1])
    var type: BItemType =
        try {
            when (item.itemMeta.lore[item.itemMeta.lore.size - 2]) {
                talismanIdentifier -> BItemType.TALISMAN
                scrollIdentifier -> BItemType.SCROLL
                weaponIdentifier -> BItemType.WEAPON
                armorIdentifier -> BItemType.ARMOR
                miscIdentifier -> BItemType.MISC
                else -> BItemType.MISC
            }
        } catch (e: NullPointerException) {
            throw IllegalArgumentException("No type identifier found in item lore")
        }

    init {
        val lore = item.itemMeta.lore
        for (cLore in lore) {
            if (cLore.contains(encode("ability"))) {
                val ability = cLore.split("Ability: ")[1].drop(2)
                for (registeredAbility in Main.registeredAbilities) {
                    if (registeredAbility.name == ability) {
                        abilities.add(registeredAbility)
                    }
                }
            }
        }

        // If this is combat gear
        material = item.itemMeta.displayName.replace(" ", "_").uppercase()
    }

    fun equals(other: BItem): Boolean {
        return this.material == other.material && this.rarity == other.rarity && this.type == other.type
    }
}