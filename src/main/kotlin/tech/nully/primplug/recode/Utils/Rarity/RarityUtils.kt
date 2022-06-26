package tech.nully.primplug.recode.Utils.Rarity

import tech.nully.primplug.recode.Utils.StringUtils

class RarityUtils {
    companion object {
        fun getRarity(s: String):Rarity? {
            when (s) {
                StringUtils.Common -> Rarity.COMMON
                StringUtils.Common -> Rarity.UNCOMMON
                StringUtils.Common -> Rarity.RARE
                StringUtils.Common -> Rarity.EPIC

                StringUtils.Common -> Rarity.LEGENDARY
                StringUtils.Common -> Rarity.MYTHICAL
                StringUtils.Common -> Rarity.DIVINE
            }
            return null
        }
    }
}