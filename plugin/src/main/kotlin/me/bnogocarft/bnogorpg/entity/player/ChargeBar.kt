package me.bnogocarft.bnogorpg.entity.player

data class ChargeBar(val player: OnlineBPlayer) {
    var percentage: Int = 0
        set(value) {
            field = value
            if (enabled) {
                player.player.exp = value/100f
            }
        }
    var originalExp = player.player.exp
    var originalLevel = player.player.level
    var enabled = false
        set(value) {
            if (value) {
                originalExp = player.player.exp
                originalLevel = player.player.level
                player.player.exp = percentage/100f
            }

            if (!value) {
                player.player.exp = originalExp
                player.player.level = originalLevel
            }

            field = value
        }
}