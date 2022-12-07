package me.bnogocarft.bnogorpg.planes

import com.comphenix.protocol.PacketType
import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.events.ListenerPriority
import com.comphenix.protocol.events.PacketAdapter
import com.comphenix.protocol.events.PacketEvent
import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.entity.player.bPlayer
import me.bnogocarft.bnogorpg.utils.getData
import me.bnogocarft.bnogorpg.utils.minus
import me.bnogocarft.bnogorpg.utils.plus
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Minecart
import org.bukkit.util.Vector
import java.lang.Math.cos
import java.lang.Math.sin

class SteerListener {
    fun enable() {
        ProtocolLibrary.getProtocolManager().addPacketListener(
            object : PacketAdapter(Main.instance, ListenerPriority.HIGHEST, PacketType.Play.Client.STEER_VEHICLE) {
                override fun onPacketReceiving(e: PacketEvent) {
                    val player = e.player
                    val packet = e.packet
                    val sideways = packet.float.read(0)
                    val forward = packet.float.read(1)
                    val jump = packet.booleans.read(0)
                    val shift = packet.booleans.read(1)

                    val bp = player.bPlayer()

                    val controlled = bp.controlling

                    if (bp.controlling != null) {
                        if (controlled is LivingEntity) {
                            if (sideways > 0) {
                                controlled.velocity += Vector(cos(180.0), 0.0, sin(180.0))
                            }

                            // Player presses D
                            if (sideways < 0) {
                                controlled.velocity += Vector(cos(0.0), 0.0, sin(0.0))
                            }

                            // Player presses W
                            if (forward > 0) {
                                controlled.velocity += Vector(cos(90.0), 0.0, sin(90.0))
                            }

                            // Player presses S
                            if (forward < 0) {
                                controlled.velocity += Vector(cos(270.0), 0.0, sin(270.0))
                            }

                            if (jump) {
                                controlled.velocity += Vector(0.0, 0.5, 0.0)
                            }
                            return
                        }

                        if (controlled is Minecart) {
                            if (controlled.getData("plane") != null) {
                                val plane = controlled.getData("plane") as Plane
                                if (plane.isRunning) {
                                    // Player presses A
                                    if (sideways > 0) {
                                        controlled.velocity += Vector(cos(100.0), 0.0, sin(100.0))
                                    }

                                    // Player presses D
                                    if (sideways < 0) {
                                        controlled.velocity += Vector(cos(80.0), 0.0, sin(80.0))
                                    }

                                    // Player presses W
                                    if (forward > 0) {
                                        controlled.velocity += Vector(0, 1, 0)
                                    }

                                    // Player presses S
                                    if (forward < 0) {
                                        controlled.velocity -= Vector(0, 1, 0)
                                    }
                                }

                                return
                            }
                        }

                        if (controlled is Entity) {
                            if (sideways > 0) {
                                controlled.velocity += Vector(cos(180.0), 0.0, sin(180.0))
                            }

                            // Player presses D
                            if (sideways < 0) {
                                controlled.velocity += Vector(cos(0.0), 0.0, sin(0.0))
                            }

                            // Player presses W
                            if (forward > 0) {
                                controlled.velocity += Vector(cos(90.0), 0.0, sin(90.0))
                            }

                            // Player presses S
                            if (forward < 0) {
                                controlled.velocity += Vector(cos(270.0), 0.0, sin(270.0))
                            }

                            if (jump) {
                                controlled.velocity += Vector(0.0, 0.5, 0.0)
                            }
                            return
                        }
                    }
                }
            }
        )
    }
}