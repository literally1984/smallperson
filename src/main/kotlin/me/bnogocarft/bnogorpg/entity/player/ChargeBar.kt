package me.bnogocarft.bnogorpg.entity.player

data class ChargeBar(val player: OnlineBPlayer) {
    var percentage: Int = 0
        set(value) {
            field = value
            if (enabled) {
                player.p.exp = value/100f
            }
        }
    var originalExp = player.p.exp
    var originalLevel = player.p.level
    var enabled = false
        set(value) {
            if (value) {
                originalExp = player.p.exp
                originalLevel = player.p.level
                player.p.exp = percentage/100f
            }

            if (!value) {
                player.p.exp = originalExp
                player.p.level = originalLevel
            }

            field = value
        }
}