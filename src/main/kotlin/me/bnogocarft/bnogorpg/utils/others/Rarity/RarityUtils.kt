package me.bnogocarft.bnogorpg.utils.others.Rarity

import me.bnogocarft.bnogorpg.utils.StringUtils

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