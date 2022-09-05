package me.bnogocarft.bnogorpg

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import me.bnogocarft.bnogorpg.CustomItems.*
import me.bnogocarft.bnogorpg.CustomItems.DefaultItems.DefaultOverrider
import me.bnogocarft.bnogorpg.Enchants.EnchantCommand
import me.bnogocarft.bnogorpg.Enchants.EnchantListeners
import me.bnogocarft.bnogorpg.ItemUpgrade.UpgradeCMD
import me.bnogocarft.bnogorpg.ItemUpgrade.UpgradeUtils
import me.bnogocarft.bnogorpg.Listeners.*
import me.bnogocarft.bnogorpg.OtherCommands.GiveCommand
import me.bnogocarft.bnogorpg.OtherCommands.PlayTimeCommand
import me.bnogocarft.bnogorpg.Planes.PlaneKeyItem
import me.bnogocarft.bnogorpg.Planes.PlaneListeners
import me.bnogocarft.bnogorpg.Planes.SteerListener
import me.bnogocarft.bnogorpg.Planes.removeScheduler
import me.bnogocarft.bnogorpg.Player.Stash.StashCommand
import me.bnogocarft.bnogorpg.Player.Stash.StashListener
import me.bnogocarft.bnogorpg.RecipeBook.RecipeBookCommand
import me.bnogocarft.bnogorpg.RecipeBook.RecipeManager
import me.bnogocarft.bnogorpg.Reforge.ReforgeBlockListener
import me.bnogocarft.bnogorpg.Reforge.ReforgeCommand
import me.bnogocarft.bnogorpg.Updater.Updates.Update
import me.bnogocarft.bnogorpg.Utils.*
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.CustomEvents.ArmorWearListeners
import me.bnogocarft.bnogorpg.Utils.Database.BnogoSQL
import me.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import me.bnogocarft.bnogorpg.Utils.EnchantUtils.Glow
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import me.bnogocarft.bnogorpg.Utils.economyUtils.auction.Auction
import me.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionTimer
import me.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import me.bnogocarft.bnogorpg.animation.animationTestCommand
import me.bnogocarft.bnogorpg.economy.Auction.AHGui
import me.bnogocarft.bnogorpg.economy.Auction.AhGuiUpdater
import me.bnogocarft.bnogorpg.economy.Auction.AuctionCommand
import me.bnogocarft.bnogorpg.economy.Auction.AuctionListeners
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask
import java.io.File
import kotlin.properties.Delegates


class Main : JavaPlugin() {
    companion object {
        lateinit var protocolManager: ProtocolManager
        lateinit var instance: Plugin

        var serverIp =
            "${ChatColor.BLUE}B${ChatColor.RED}n${ChatColor.YELLOW}o${ChatColor.AQUA}g${ChatColor.GOLD}o${ChatColor.LIGHT_PURPLE}Carft ${ChatColor.YELLOW}RPG Factions"
        val patch = Update.zerozerotwo
        val onChatCooldown = ArrayList<Player>()

        lateinit var serverFile: File
        lateinit var ymlConfig: YamlConfiguration

        val auctions = ArrayList<Auction>()
        var lastAuctionID by Delegates.notNull<String>()

        lateinit var econ: Economy

        lateinit var input: SignInputer
    }

    override fun onEnable() {
        BnogoSQL.enaableDB()
        instance = this
        serverFile = File("${instance.dataFolder}/server.yml")
        input = SignInputer(this)
        ymlConfig = YamlConfiguration.loadConfiguration(serverFile)
        if (!(serverFile.exists())) {
            ymlConfig.set("items.indexes.DiamondHelmet", 0)
            ymlConfig.set("items.indexes.DiamondChestplate", 0)
            ymlConfig.set("items.indexes.DiamondLeggings", 0)
            ymlConfig.set("items.indexes.DiamondBoots", 0)
            ymlConfig.set("items.indexes.DiamondSword", 0)
            ymlConfig.set("items.indexes.GoldHelmet", 0)
            ymlConfig.set("items.indexes.GoldChestplate", 0)
            ymlConfig.set("items.indexes.GoldLeggings", 0)
            ymlConfig.set("items.indexes.GoldBoots", 0)
            ymlConfig.set("items.indexes.GoldSword", 0)
            ymlConfig.set("items.indexes.IronHelmet", 0)
            ymlConfig.set("items.indexes.IronChestplate", 0)
            ymlConfig.set("items.indexes.IronLeggings", 0)
            ymlConfig.set("items.indexes.IronBoots", 0)
            ymlConfig.set("items.indexes.IronSword", 0)
            ymlConfig.set("items.indexes.CactusHelmet", 0)
            ymlConfig.set("items.indexes.CactusChestplate", 0)
            ymlConfig.set("items.indexes.CactusLeggings", 0)
            ymlConfig.set("items.indexes.CactusBoots", 0)
            ymlConfig.set("items.indexes.LapisHelmet", 0)
            ymlConfig.set("items.indexes.LapisChestplate", 0)
            ymlConfig.set("items.indexes.LapisLeggings", 0)
            ymlConfig.set("items.indexes.LapisBoots", 0)
            ymlConfig.set("items.indexes.DoubleJumpBoots", 0)

            ymlConfig.set("auction.lastAucID", "0")
            ymlConfig.set("auction.pausedAucs", "")
        }
        YMLUtils.saveCustomYml(ymlConfig, serverFile)

        lastAuctionID = ymlConfig.getString("auction.lastAucID")

        val cSender = server.consoleSender
        protocolManager = ProtocolLibrary.getProtocolManager()

        cSender.sendMessage("$logo Main class variables have been instanced")
        cSender.sendMessage("$logo Overriding default combat Items...")
        DefaultOverrider.overrideRecipes()
        cSender.sendMessage("$logo Overriding default combat Items... Done")

        registerGlow()

        cSender.sendMessage("$logo Constructing utils...")
        OnlineBPlayers
        initUtils()
        ItemAbility.init()
        cSender.sendMessage("$logo Utlils have been constructed")

        cSender.sendMessage("$logo Registering listeners")
        server.pluginManager.registerEvents(PlayerJoinEvent(), this)
        server.pluginManager.registerEvents(ChatInput.ChatListener(), this)
        server.pluginManager.registerEvents(HotbarChangeEvent(), this)
        server.pluginManager.registerEvents(PlayerLeaveEvent(), this)
        server.pluginManager.registerEvents(ArmorWearListeners(), this)
        server.pluginManager.registerEvents(DamageEvent(), this)
        server.pluginManager.registerEvents(AbilityListeners(), this)
        server.pluginManager.registerEvents(ChatListeners(), this)
        server.pluginManager.registerEvents(ReforgeBlockListener(), this)
        server.pluginManager.registerEvents(EnchantListeners(), this)
        server.pluginManager.registerEvents(TestListeners(), this)
        server.pluginManager.registerEvents(StashListener(), this)
        server.pluginManager.registerEvents(CraftingListeners(), this)
        server.pluginManager.registerEvents(AuctionListeners(), this)
        cSender.sendMessage("$logo Registered Listeners")

        cSender.sendMessage("$logo Enabling ItemUpgrades...")
        UpgradeUtils()
        cSender.sendMessage("$logo ItemUpgrades Enabled!")

        cSender.sendMessage("$logo Enabling Planes")
        PlaneKeyItem()
        server.pluginManager.registerEvents(PlaneListeners(), this)

        server.scheduler.scheduleSyncRepeatingTask(this, removeScheduler(), 0, 3)
        server.pluginManager.registerEvents(SteerListener(), this)
        cSender.sendMessage("$logo Planes have been enabled")

        cSender.sendMessage("$logo Enabling Websocket Server")
        //ComUtils.main()
        cSender.sendMessage("$logo Websocket Server has been enabled")

        cSender.sendMessage("Initializing Auctions...")

        val aucs = BnogoSQL.con.prepareStatement("SELECT * FROM auctions").executeQuery()
        while (aucs.next()) {
            @Suppress("RegExpRedundantEscape", "RegExpSimplifiable", "RegExpRedundantNestedCharacterClass")
            val auction = Auction(
                deserializeItem(aucs.getString("item").replace(Regex("[\\[[\\]]*\\]]"), "").split(", ")),
                aucs.getFloat("startBid").toDouble(),
                aucs.getString("creator"),
                ((aucs.getInt("endTime") + (System.currentTimeMillis()/1000)) - aucs.getInt("lastServerStop")).toInt(),
                aucs.getString("currentBidder"),
                aucs.getFloat("highestBid").toDouble(),
                aucs.getString("id")
            )
            if ((System.currentTimeMillis()/1000) > auction.timeLeft) {
                auction.endAuction()
                continue
            }
            val task: BukkitTask = Bukkit.getScheduler().runTaskTimer(instance, AuctionTimer(auction), 0, 20)
            auction.task = task
        }
        AHGui()
        Bukkit.getScheduler().scheduleSyncRepeatingTask(this, AhGuiUpdater(), 0, 20)
        cSender.sendMessage("All paused auctions are continued!")

        cSender.sendMessage("$logo Enabling other commands...")
        getCommand("giv").executor = GiveCommand()
        getCommand("playtime").executor = PlayTimeCommand()
        getCommand("reforge").executor = ReforgeCommand()
        getCommand("anim").executor = animationTestCommand()
        getCommand("upgrade").executor = UpgradeCMD()
        getCommand("ench").executor = EnchantCommand()
        getCommand("auction").executor = AuctionCommand()
        getCommand("stash").executor = StashCommand()
        cSender.sendMessage("$logo all commands are enabled!")

        cSender.sendMessage("$logo Registering custom ItemStacks...")
        CactusArmor()
        LapisArmor()
        BladeOfHermes()
        GrapplerItem()
        DoubleJumpBoots()
        Thunderbolt()
        cSender.sendMessage("$logo Registered custom Items")

        cSender.sendMessage("$logo Enabling RecipeBook...")
        RecipeManager.registerRecipes(server.recipeIterator())
        getCommand("recipes").executor = RecipeBookCommand()
        cSender.sendMessage("$logo RecipeBook has been enabled")

        cSender.sendMessage("$logo Enabling GUI stuff...")
        server.pluginManager.registerEvents(GUIListeners(guis), this)
        cSender.sendMessage("$logo GUI Utils enabled")

        cSender.sendMessage("$logo Enabling Economy...")
        if (!setupEconomy()) {
            cSender.sendMessage(String.format("[%s] - Disabled due to no Vault dependency found!", description.name))
            server.pluginManager.disablePlugin(this)
            return
        }

        cSender.sendMessage(
            "${ChatColor.LIGHT_PURPLE} $logo ${ChatColor.GREEN} BnogoRPG Vdev-0.0.4 has been ${ChatColor.GREEN}Enabled"
        )
        Bukkit.getScheduler().scheduleSyncRepeatingTask(this, {
            update()
        }, 20, 80)
        saveDefaultConfig()
        System.gc()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            "${ChatColor.LIGHT_PURPLE} $logo ${ChatColor.RED} BnogoRPG has been disabled D:"
        )
        for (player in server.onlinePlayers) {
            val bPlayer = OnlineBPlayers[player]!!
            PlaytimeUtils.addPlaytime(bPlayer)
            bPlayer.saveStats()
        }
        update()
        for (auc in auctions) {
            val query = BnogoSQL.con.prepareStatement(
                "UPDATE auctions SET \"lastServerStop\" = ${System.currentTimeMillis() / 1000} WHERE \"id\" = '${auc.ID}';"
            )
            query.execute()
        }
        ymlConfig.set("auction.lastAucID", lastAuctionID)
        YMLUtils.saveCustomYml(ymlConfig, serverFile)
    }

    fun update() {
        for (auc in auctions) {
            val replace =
                BnogoSQL.con.prepareStatement("UPDATE auctions SET \"currentBidder\" = '${auc.currentBidder}', \"highestBid\" = ${auc.highestBid} WHERE id = '${auc.ID}';")
                    .executeUpdate()
            if (replace > 0) {
                continue
            }
            val query = BnogoSQL.con.prepareStatement(
                "INSERT INTO auctions VALUES ('${auc.ID}', '${serializeItem(auc.item)}', ${auc.startingBid}, '${auc.currentBidder}', ${auc.highestBid}, '${auc.creator}', '${auc.timeLeft}');"
            )
            query.execute()
        }

        for (item in BItemUtils.BGears.values) {
            val stringAbilityArray = ArrayList<String>()
            for (ability in item.abilities) {
                stringAbilityArray.add("\"${ability}\"")
            }
            val beforeString = stringAbilityArray.joinToString(", ")
            BnogoSQL.con.prepareStatement(
                "UPDATE \"gearItems\" SET " +
                        "\"stars\" = ${item.rarity!!.getStars()}, " +
                        "\"name\" = '${item.initItem.itemMeta.displayName}', " +
                        "\"itemStack\" = '${serializeItem(item.initItem)}', " +
                        "\"abilities\" = ARRAY [$beforeString]::text[] " +
                        "WHERE \"id\" = ${item.id} AND \"type\" = '${item.initItem.itemMeta.displayName}';").executeUpdate()
        }
    }

    private fun setupEconomy(): Boolean {
        val economyProvider = server.servicesManager.getRegistration(Economy::class.java)
        if (economyProvider != null) {
            econ = economyProvider.provider
            return true
        }
        return false
    }

    fun registerGlow() {
        try {
            val f = Enchantment::class.java.getDeclaredField("acceptingNew")
            f.isAccessible = true
            f[null] = true
        } catch (e: Exception) {
            e.printStackTrace()
        }
        try {
            val glow = Glow()
            Enchantment.registerEnchantment(glow)
        } catch (ignore: IllegalArgumentException) {
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}