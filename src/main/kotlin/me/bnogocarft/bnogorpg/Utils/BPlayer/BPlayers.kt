package me.bnogocarft.bnogorpg.Utils.BPlayer

import org.bukkit.entity.Player

val OnlineBPlayers = NonNullHashMap<Player, OnlineBPlayer>()
class NonNullHashMap<K, V> : HashMap<K, V>(){
    override fun get(key: K): V {
        return super.get(key)!!
    }
}