package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Player.PlayerBar.Bar
import games.bnogocarft.bnogorpg.Player.PlayerBar.CombatLogBar
import games.bnogocarft.bnogorpg.Player.PlayerBar.ComboBar
import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
import games.bnogocarft.bnogorpg.combat.CombatLog.CombatLog
import games.bnogocarft.bnogorpg.combat.CombatLog.CombatLogTimer
import games.bnogocarft.bnogorpg.combat.ComboCounter.Combo
import games.bnogocarft.bnogorpg.combat.ComboCounter.ComboTimer
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.scheduler.BukkitTask

class DamageEvent : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onPlayerDamage(e: EntityDamageByEntityEvent) {
        if (e.entity is LivingEntity) {
                // handlers for if the damager is player and recipient is a mob
            if (e.damager is Player) {
                val bDamager = BPlayers[e.damager]!!

                // Checks if the damaged entity is also a player
                if (e.entity is Player) {
                    lateinit var combatLogTask: BukkitTask
                    val combat: CombatLog? = bDamager.metadata["combo"] as CombatLog?
                    if (combat == null) {// Checks if the player is currently in combat
                        bDamager.metadata["combat"] = CombatLog(combatLogTask)

                        // Runs a task to decide when the player is going to get out of combat
                        combatLogTask =
                            Bukkit.getScheduler().runTaskTimer(Main.instance, CombatLogTimer(bDamager), 0, 20)
                        (e.damager as Player).sendMessage("${ChatColor.RED}You are in Combat! Please do not log out or else")
                        (e.damager as Player).sendMessage("${ChatColor.RED}you will lose all of your items!")

                        // Adds a full combat bar to the player's bars
                        val cBar = CombatLogBar(5, 300)
                        bDamager.bars.add(cBar)

                        // Checks if anything in the players bars has a higher priority than combat's (2)
                        var display = true
                        for (bar in bDamager.bars) {
                            if (bar.priority > 2) {
                                display = false
                            }
                        }

                        // Displays the player bar if there is
                        if (display) {
                            bDamager.bar.text = cBar.name
                            bDamager.bar.health = cBar.health
                        }
                    }

                    // Starts a combat log timer for the damaged
                    val bDamaged = BPlayers[e.entity]!!
                    val combat2: CombatLog? = bDamaged.metadata["combo"] as CombatLog?
                    if (combat2 != null) {
                        lateinit var combatLogTask2: BukkitTask
                        bDamaged.metadata["combat"] = CombatLog(combatLogTask)
                        combatLogTask2 =
                            Bukkit.getScheduler().runTaskTimer(Main.instance, CombatLogTimer(bDamaged), 0, 20)
                        (e.damager as Player).sendMessage(
                            "${ChatColor.RED}You are in Combat! Please do not log out or else"
                        )
                        (e.damager as Player).sendMessage(
                            "${ChatColor.RED}you will lose all of your items!"
                        )
                        val cBar2 = CombatLogBar(5, 300)
                        bDamaged.bars.add(cBar2)
                        var display2 = true
                        for (bar in bDamaged.bars) {
                            if (bar.priority > 2) {
                                display2 = false
                            }
                        }
                        if (display2) {
                            bDamaged.bar.text = cBar2.name
                            bDamaged.bar.health = cBar2.health
                        }
                    }
                }

                // Starts a Combo for the damager
                if (bDamager.combo == null) { // If the player is not currently comboing
                    val comboTask = Bukkit.getScheduler().runTaskTimer(Main.instance, ComboTimer(bDamager), 0, 1)
                    bDamager.combo = Combo(comboTask, 5, e.damage)

                    val coBar = ComboBar(bDamager.combo!!, 300)
                    bDamager.bars.add(coBar)
                    var display = true
                    for (bar in bDamager.bars) {
                        if (bar.priority > 2) {
                            display = false
                        }
                    }
                    if (display) {
                        bDamager.currentBar = coBar
                        bDamager.bar.text = coBar.name
                        bDamager.bar.health = coBar.health
                    }
                } else { // If the player is comboing
                    bDamager.combo!!.damage += e.damage
                    bDamager.combo!!.timeLeft = 5
                    var display = true
                    lateinit var dBar: Bar
                    for (bar in bDamager.bars) {
                        if (bar is ComboBar) {
                            bar.health = 300
                            bar.name = "Combo Damage: ${bar.combo.damage}"
                            dBar = bar
                        }
                        if (bar.priority > 2) {
                            display = false
                        }
                    }

                    if (display) {
                        bDamager.currentBar = dBar
                        bDamager.bar.text = dBar.name
                        bDamager.bar.health = dBar.health
                    }
                }
            }

            if (e.entity is Player) {
                val player = BPlayers[e.entity]!!
            }
        }
    }
}


