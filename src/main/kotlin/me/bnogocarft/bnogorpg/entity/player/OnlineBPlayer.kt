package me.bnogocarft.bnogorpg.entity.player

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.combat.ComboCounter.Combo
import me.bnogocarft.bnogorpg.player.PlayerBar.MainBar
import me.bnogocarft.bnogorpg.utils.*
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.Database.BnogoSQL
import me.bnogocarft.bnogorpg.utils.JVMUtils.BarArrayList
import me.bnogocarft.bnogorpg.utils.Mode.Mode
import me.bnogocarft.bnogorpg.utils.stat.StatManager
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.abilities.Spell
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.events.Button
import me.bnogocarft.bnogorpg.utils.events.ClickState
import me.bnogocarft.bnogorpg.utils.events.ClickStateChangeEvent
import me.bnogocarft.bnogorpg.utils.stat.PlayerStat
import net.minecraft.server.v1_8_R3.IChatBaseComponent.ChatSerializer
import net.minecraft.server.v1_8_R3.PacketPlayOutChat
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.craftbukkit.v1_8_R3.entity.CraftPlayer
import org.bukkit.entity.Entity
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import tech.nully.BossBarAPI.BossBar
import java.text.SimpleDateFormat
import java.util.*
import kotlin.collections.ArrayList
import kotlin.math.roundToInt


/**
 * Stores the RPG attributes of a player.
 * @constructor Fully constructs the RPG attributes of a given Online Player
 */
data class OnlineBPlayer(val p: Player) : BPlayer(p.name) {
    var controlling: Entity? = null
        set(entity) {
            entity?.bEntity()?.setController(p)
            field = entity
        }

    private val playerStats = StatManager.calculateStats(p)

    val activeAbilities = ArrayList<IAbility>()

    /**
     * The Player's connection to send packets to
     */
    val connection = (p as CraftPlayer).handle.playerConnection

    var isRightClicking = false
        set(value) {
            field = value
            val event: ClickStateChangeEvent = if (value) {
                ClickStateChangeEvent(p, Button.RIGHT, ClickState.HOLD)
            } else {
                ClickStateChangeEvent(p, Button.RIGHT, ClickState.RELEASE)
            }

            Bukkit.getPluginManager().callEvent(event)
        }
    var isLeftClicking = false
        set(value) {
            field = value
            val event: ClickStateChangeEvent = if (value) {
                ClickStateChangeEvent(p, Button.LEFT, ClickState.HOLD)
            } else {
                ClickStateChangeEvent(p, Button.LEFT, ClickState.RELEASE)
            }

            Bukkit.getPluginManager().callEvent(event)
        }
    var rcLastTick = false
    var lcLastTick = false

    var manaMultiplier = 1.0f
    var staminaMultiplier = 1.0f

    /**
     * The Player's EXP animation progress bar manager for charging attacks etc
     */
    val chargeBar = ChargeBar(this)

    /**
     * The server time in which the player joined
     */
    var joinTime: String

    /**
     * The Player's currently displayed bossbar, defaults to default server text
     */
    val bar = BossBar(p)

    /**
     * A modified version of an ArrayList that works similar to a stack,
     * constantly displaying the top of the list which is being sorted by priority
     */
    var bars = BarArrayList(this)

    /**
     * The Player's currently active combo if there is one
     */
    var combo: Combo? = null

    /**
     * The Player's current armor set Bonus
     */
    var currentSetBonus = object : SetBonus {
        override val type = AbilityTrigger.NONE
        override val description = ArrayList<String>()
        override val name = "placeholder"

        override fun cast(caster: Player, abilityEvent: Event) {
        }
    }

    var gamemode = GameMode.SURVIVAL

    /**
     * The player's current [Mode]
     */
    var mode: Mode = Mode.NONE

    /**
     * The Player's regular hotbar, used for combat mode switching
     */
    val regHotbar = arrayListOf<ItemStack?>(null, null, null, null, null, null, null, null, null)

    /**
     * A hashmap linking ItemStacks to spells in the player's hotbar in combat mode
     */
    val spellItemMap = HashMap<ItemStack, Spell>()

    /**
     * The Player's skull item
     */
    val skull = ItemStack(Material.SKULL_ITEM)
    val onDamage = ArrayList<DamageHandler>()
    var isInCastMode = false
        set(value) {
            // If the Player was not previously in spellcast form
            if (field != value) {
                if (value) {
                    p.sendMessage("${ChatColor.GREEN}Combat mode ${ChatColor.BOLD}ON")
                    val castItem = p.itemInHand
                    for (i in 0..8) {
                        regHotbar[i] = p.inventory.getItem(i)
                        if (i == 8) {
                            p.inventory.setItem(8, castItem)
                            continue
                        }
                        try {
                            val disItem = spells[i].displayItem
                            p.inventory.setItem(i, disItem)
                            spellItemMap[disItem] = spells[i]
                        } catch (e: IndexOutOfBoundsException) {
                            p.inventory.setItem(i, null)
                            print("null")
                            continue
                        }
                    }
                    p.inventory.heldItemSlot = 8
                } else {
                    p.sendMessage("${ChatColor.GREEN}Combat mode ${ChatColor.BOLD}OFF")
                    for (i in 0..8) {
                        p.inventory.setItem(i, regHotbar[i])
                        regHotbar[i] = null
                    }
                }
            }
            field = value
        }

    val hitbox = Hitbox(p)

    /**
     * The latest update of the player's [PlayerStat]
     */
    var stats = PlayerStat(playerStats)
        get() {
            val manaDiff = field.maxMana - field.currentMana
            val staminaDiff = field.maxStamina - field.currentStamina
            val gearStats = StatManager.calculateStats(p)
            field = PlayerStat(gearStats)
            field.currentMana -= manaDiff
            field.currentStamina -= staminaDiff
            return field
        }

    val metadata = HashMap<String, Any>()

    init {
        for (armor in p.inventory.armorContents) {
            if (armor != null) {
                val bArmor = armor.getBArmor()
                if (bArmor != null) {
                    for (ability in bArmor.abilities) activeAbilities.add(ability)
                }
            }
        }
        if (p.itemInHand != null) {
            if (p.itemInHand canBe B.WEAPON) {
                val weapon = p.itemInHand.getBWeapon()
                if (weapon != null) {
                    for (ability in weapon.abilities) activeAbilities.add(ability)
                }
            }
        }
        // Creates a SQL entry for the player if it is not already created
        val exitResult = BnogoSQL.con.prepareStatement("SELECT name FROM players WHERE name = '$player'").executeQuery()
        if (!exitResult.next()) {
            val query =
                BnogoSQL.con.prepareStatement(
                    "INSERT INTO players VALUES (" +
                            "'0 0', " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "0, 0.0, " +
                            "ARRAY[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], " +
                            "ARRAY[]::text[], " +
                            "'$player', " +
                            "'${p.address.hostName}');"
                )
            query.execute()
            print("Created new SQL entry for $player")
        }

        Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
            if (rcLastTick) {
                rcLastTick = false
            } else {
                isRightClicking = false
            }

            if (lcLastTick) {
                lcLastTick = false
            } else {
                isLeftClicking = false
            }
        }, 0, 1)
        bars.add(MainBar())

        val now = Date()
        val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")
        joinTime = format.format(now)

        val skullMeta = Bukkit.getItemFactory().getItemMeta(Material.SKULL)
        skullMeta.displayName = "$player's Profile"
        skull.itemMeta = skullMeta
    }

    fun sendActionBar(message: String) {
        val packet = PacketPlayOutChat(ChatSerializer.a("{\"text\":\" $message \"}"), 2.toByte())
        connection.sendPacket(packet)
    }

    fun addToMelee(amount: Int) {
        combatEXP += amount / 2
        meleeEXP += amount
        if (meleeEXP >= getNeededEXP(meleeLVL)) {
            levelUp("melee")
        }

        if (combatEXP >= getNeededEXP(combatLVL)) {
            levelUp("combat")
        }
    }

    fun addToSpellcast(amount: Int) {
        combatEXP += amount / 2
        spellcastEXP += amount

        if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
            levelUp("spellcast")
        }

        if (combatEXP >= getNeededEXP(combatLVL)) {
            levelUp("combat")
        }
    }

    fun generateInspectGui(): Inventory {
        val fInv = GUIFactory.createInventory("$player's Profile", 54)
        val layer1 = GUILayer(fInv)

        layer1.backgrounds.add(GUIBackground(13, skull))

        val balItem = ItemStack(Material.EMERALD)
        val balMeta = Bukkit.getItemFactory().getItemMeta(Material.EMERALD)
        balMeta.displayName = "${ChatColor.GREEN}$player's Balance:"

        val emeraldLore = ArrayList<String>()
        emeraldLore.add("${ChatColor.GREEN}\$${Main.econ.getBalance(player)}")
        balMeta.lore = emeraldLore
        balItem.itemMeta = balMeta

        val manaItem = ItemStack(Material.LAPIS_BLOCK)
        val manaMeta = Bukkit.getItemFactory().getItemMeta(Material.LAPIS_BLOCK)
        manaMeta.displayName = "${ChatColor.AQUA}$player's Mana:"

        val manaLore = ArrayList<String>()
        manaLore.add("${ChatColor.AQUA}${stats.currentMana}/${stats.maxMana}")
        manaMeta.lore = manaLore
        manaItem.itemMeta = manaMeta

        val staminaItem = ItemStack(Material.BLAZE_POWDER)
        val staminaMeta = Bukkit.getItemFactory().getItemMeta(Material.BLAZE_POWDER)
        staminaMeta.displayName = "${ChatColor.GOLD}$player's Stamina:"

        val staminaLore = ArrayList<String>()
        staminaLore.add("${ChatColor.GOLD}${stats.currentMana}/${stats.maxMana}")
        staminaMeta.lore = staminaLore
        staminaItem.itemMeta = staminaMeta

        layer1.backgrounds.add(GUIBackground(22, balItem))
        layer1.backgrounds.add(GUIBackground(21, manaItem))
        layer1.backgrounds.add(GUIBackground(23, staminaItem))



        return GUIFactory.produceInventory(fInv)
    }

    /**
     * Simiulates the current [OnlineBPlayer] dealing damage to another [OnlineBPlayer], Handles EXP gain and more
     */
    fun dealDamage(other: LivingEntity, amount: Int) {
        val damage = if (other is Player) {
            val player = OnlineBPlayers[other]
            try {
                amount * (player.stats.defense / player.stats.defense + 10)
            } catch (e: ArithmeticException) {
                amount
            }
        } else {
            amount
        }
        other.health -= damage
        addToMelee((damage * 0.7).roundToInt())
    }


    fun dealSpellDamage(player: OnlineBPlayer, amount: Int) {
        val damage = amount * (player.stats.mDefense / player.stats.mDefense + 10)
        player.p.health -= damage
        spellcastEXP += damage
        if (spellcastEXP >= getNeededEXP(player.spellcastLVL)) {
            levelUp("spellcast")
        }
    }

    fun levelUp(stat: String) {
        when (stat) {
            "melee" -> {
                if (meleeEXP >= getNeededEXP(meleeLVL)) {
                    meleeLVL++
                    meleeEXP -= getNeededEXP(meleeLVL)
                    p.sendMessage("You have leveled up to your melee level to $meleeLVL!")
                    p.sendMessage("Your current melee EXP is $meleeEXP and you need ${getNeededEXP(meleeLVL)} to level up again!")
                }
            }

            "spellcast" -> {
                if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
                    spellcastLVL++
                    spellcastEXP -= getNeededEXP(spellcastLVL)
                    p.sendMessage("You have leveled up to your spellcast level to $spellcastLVL!")
                    p.sendMessage(
                        "Your current spellcast EXP is $spellcastEXP and you need ${
                            getNeededEXP(
                                spellcastLVL
                            )
                        } to level up again!"
                    )
                }
            }

            "woodcutting" -> {
                if (woodCuttingEXP >= getNeededEXP(woodCuttingLVL)) {
                    woodCuttingLVL++
                    woodCuttingEXP -= getNeededEXP(woodCuttingLVL)
                    p.sendMessage("You have leveled up to your woodcutting level to $woodCuttingLVL!")
                    p.sendMessage(
                        "Your current woodcutting EXP is $woodCuttingEXP and you need ${
                            getNeededEXP(
                                woodCuttingLVL
                            )
                        } to level up again!"
                    )
                }
            }

            "mining" -> {
                if (miningEXP >= getNeededEXP(miningLVL)) {
                    miningLVL++
                    miningEXP -= getNeededEXP(miningLVL)
                    p.sendMessage("You have leveled up to your mining level to $miningLVL!")
                    p.sendMessage("Your current mining EXP is $miningEXP and you need ${getNeededEXP(miningLVL)} to level up again!")
                }
            }

            "combat" -> {
                if (combatEXP >= getNeededEXP(combatLVL)) {
                    combatLVL++
                    combatEXP -= getNeededEXP(combatLVL)
                    p.sendMessage("You have leveled up to your combat level to $combatLVL!")
                    p.sendMessage("Your current combat EXP is $combatEXP and you need ${getNeededEXP(combatLVL)} to level up again!")
                }
            }

            "farming" -> {
                if (farmingEXP >= getNeededEXP(farmingLVL)) {
                    farmingLVL++
                    farmingEXP -= getNeededEXP(farmingLVL)
                    p.sendMessage("You have leveled up to your farming level to $farmingLVL!")
                    p.sendMessage("Your current farming EXP is $farmingEXP and you need ${getNeededEXP(farmingLVL)} to level up again!")
                }
            }
        }
    }

    fun sendMessage(message: String) {
        p.sendMessage(message)
    }
}