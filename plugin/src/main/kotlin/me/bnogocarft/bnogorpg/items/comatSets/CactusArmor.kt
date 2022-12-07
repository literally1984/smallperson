package me.bnogocarft.bnogorpg.items.comatSets

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.bitem.factory.ArmorSetMaker
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryWeapon
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class CactusArmor : ArmorSetMaker {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack

        lateinit var craftShard: ItemStack

        val abil = SpikeySpikes()

        val rarity = Rarity.UNCOMMON
    }

    init {
        createHelmet()
    }

    override fun createHelmet() {
        val stats = arrayListOf(0, 6, 0, 2, 3, 7)

        helm = FactoryWeapon(
            "Cactus Helmet",
            rarity,
            arrayListOf(),
            BMaterial.CACTUS_HELMET,
            stats
        ).register("cactus_helmet")

        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.CACTUS)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val stats = arrayListOf(2, 18, 1, 10, 10, 20)

        chestplate = FactoryWeapon(
            "Cactus Chestplate",
            rarity,
            arrayListOf(),
            BMaterial.CACTUS_CHESTPLATE,
            stats
        ).register("cactus_chestplate")

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.CACTUS)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val stats = arrayListOf(1, 14, 0, 8, 7, 14)

        leggings = FactoryWeapon(
            "Cactus Leggings",
            rarity,
            arrayListOf(),
            BMaterial.CACTUS_LEGGINGS,
            stats
        ).register("cactus_leggings")

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.CACTUS)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val stats = arrayListOf(0, 6, 0, 3, 4, 8)

        helm = FactoryWeapon(
            "Cactus Boots",
            rarity,
            arrayListOf(),
            BMaterial.CACTUS_BOOTS,
            stats
        ).register("cactus_boots")
    }

    class SpikeySpikes : SetBonus {
        override val description: ArrayList<String> = arrayListOf(
            "When an opponent damages you,",
            "30% of the ${ChatColor.RED}damage ${ChatColor.GRAY}will be",
            "reflected back to them."
        )
        override val name: String = "Spiky Spikes"

        override val type: AbilityTrigger = AbilityTrigger.PASSIVE

        override fun cast(caster: Player, event: Event) {
            if (event is EntityDamageByEntityEvent) {
                val damage = event.damage * 0.3
                if (event.damager is LivingEntity) {
                    (event.damager as LivingEntity).damage(damage, caster)
                }
            }
        }

        init {
            Main.registeredAbilities += this
        }
    }
}
