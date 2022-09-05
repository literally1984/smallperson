package me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity

import me.bnogocarft.bnogorpg.Utils.StringUtils

class RarityUtils {
    companion object {
        fun getRarity(s: String): Rarity? {
            return when (s) {
                StringUtils.Common -> Rarity.COMMON
                StringUtils.Uncommon -> Rarity.UNCOMMON
                StringUtils.Rare -> Rarity.RARE
                StringUtils.Epic -> Rarity.EPIC

                StringUtils.Legendary -> Rarity.LEGENDARY
                StringUtils.Mythical -> Rarity.MYTHICAL
                StringUtils.Divine -> Rarity.DIVINE
                else -> {
                    null
                }
            }
        }
    }
}