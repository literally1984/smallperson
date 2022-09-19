package me.bnogocarft.bnogorpg.Utils

import me.bnogocarft.bnogorpg.Main
import net.minecraft.server.v1_5_R3.EntityPlayer
import net.minecraft.server.v1_5_R3.MinecraftServer
import net.minecraft.server.v1_5_R3.PlayerInteractManager
import net.minecraft.server.v1_5_R3.World
import org.bukkit.Bukkit
import org.bukkit.Location

data class Hologram(val location: Location, var message: String) {
    var entity: EntityPlayer? = null
    fun spawn() {
        entity = EntityPlayer(
            Bukkit.getServer() as MinecraftServer,
            location.world as World,
            message,
            PlayerInteractManager(location.world as World)
        )
        Main.defaultTeam.addPlayer(Bukkit.getOfflinePlayer(entity!!.displayName))
    }
}