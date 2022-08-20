package games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity

import games.bnogocarft.bnogorpg.Utils.StringUtils

class RarityUtils {
    companion object {
        fun getRarity(s: String): Rarity? {
            when (s) {
                StringUtils.Common -> Rarity.COMMON
                StringUtils.Uncommon -> Rarity.UNCOMMON
                StringUtils.Rare -> Rarity.RARE
                StringUtils.Epic -> Rarity.EPIC

                StringUtils.Legendary -> Rarity.LEGENDARY
                StringUtils.Mythical -> Rarity.MYTHICAL
                StringUtils.Divine -> Rarity.DIVINE
            }
            return null
        }
    }
}