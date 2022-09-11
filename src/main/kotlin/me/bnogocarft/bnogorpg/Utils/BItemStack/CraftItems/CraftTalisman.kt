package me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import org.bukkit.inventory.ItemStack

class CraftTalisman(override var item: ItemStack, val variables: List<TalismanVariable>) : CraftItem {
    override var type: BMaterial = BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
    override var amount: Int = item.amount
    override var rarityVary: Pair<Rarity, Rarity> = Pair(Rarity.COMMON, Rarity.COMMON)

    init {

    }

    override fun craft(): ItemStack {
        val indexOfAbility = 1
        val lore = item.itemMeta.lore
        while (lore[indexOfAbility] != "") {
            for (vari in variables) {
                if (lore.indexOf(lore[indexOfAbility]) == vari.loreLine) {
                    lore[lore.indexOf(lore[indexOfAbility])] = lore[lore.indexOf(lore[indexOfAbility])].replace(vari.key, vari.value)
                }
            }
        }
    }
}