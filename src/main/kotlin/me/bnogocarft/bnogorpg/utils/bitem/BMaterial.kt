package me.bnogocarft.bnogorpg.utils.bitem

import me.bnogocarft.bnogorpg.items.*
import me.bnogocarft.bnogorpg.items.armorSets.LapisArmor
import me.bnogocarft.bnogorpg.items.armorSets.Leather
import me.bnogocarft.bnogorpg.items.comatSets.CactusArmor
import me.bnogocarft.bnogorpg.items.handSets.Stone
import me.bnogocarft.bnogorpg.items.handSets.Wood
import me.bnogocarft.bnogorpg.items.sets.Diamond
import me.bnogocarft.bnogorpg.items.sets.Gold
import me.bnogocarft.bnogorpg.items.sets.Iron
import me.bnogocarft.bnogorpg.items.single.BladeOfHermes
import me.bnogocarft.bnogorpg.items.single.GrapplerItem
import me.bnogocarft.bnogorpg.items.single.Thunderbolt
import me.bnogocarft.bnogorpg.spells.spells.FireballSpell
import me.bnogocarft.bnogorpg.spells.spells.MeteorSpell
import me.bnogocarft.bnogorpg.utils.enchants.BEnchant
import me.bnogocarft.bnogorpg.utils.enchants.EnchantUtils
import org.bukkit.Material
import org.bukkit.inventory.meta.ItemMeta

enum class BMaterial {
    CACTUS_HELMET,
    CACTUS_CHESTPLATE,
    CACTUS_LEGGINGS,
    CACTUS_BOOTS,

    LAPIS_HELMET,
    LAPIS_CHESTPLATE,
    LAPIS_LEGGINGS,
    LAPIS_BOOTS,

    IRON_HELMET,
    IRON_CHESTPLATE,
    IRON_LEGGINGS,
    IRON_BOOTS,
    IRON_SWORD,
    IRON_AXE,
    IRON_HOE,
    IRON_PICKAXE,
    IRON_SHOVEL,

    GOLD_HELMET,
    GOLD_CHESTPLATE,
    GOLD_LEGGINGS,
    GOLD_BOOTS,
    GOLD_SWORD,
    GOLD_AXE,
    GOLD_HOE,
    GOLD_PICKAXE,
    GOLD_SHOVEL,

    DIAMOND_HELMET,
    DIAMOND_CHESTPLATE,
    DIAMOND_LEGGINGS,
    DIAMOND_BOOTS,
    DIAMOND_SWORD,
    DIAMOND_AXE,
    DIAMOND_HOE,
    DIAMOND_PICKAXE,
    DIAMOND_SHOVEL,

    HARDENED_DIAMOND_HELMET,
    HARDENED_DIAMOND_CHESTPLATE,
    HARDENED_DIAMOND_LEGGINGS,
    HARDENED_DIAMOND_BOOTS,
    HARDENED_DIAMOND_SWORD,
    HARDENED_DIAMOND_AXE,
    HARDENED_DIAMOND_HOE,
    HARDENED_DIAMOND_PICKAXE,
    HARDENED_DIAMOND_SHOVEL,

    STONE_SWORD,
    STONE_AXE,
    STONE_HOE,
    STONE_PICKAXE,
    STONE_SHOVEL,

    LEATHER_HELMET,
    LEATHER_CHESTPLATE,
    LEATHER_LEGGINGS,
    LEATHER_BOOTS,

    WOOD_SWORD,
    WOOD_AXE,
    WOOD_HOE,
    WOOD_PICKAXE,
    WOOD_SHOVEL,

    BLADE_OF_HERMES,
    THUNDERBOLT,
    MJOLNIR,

    GRAPPLING_HOOK,

    DOUBLE_JUMP_BOOTS,

    //Ability scrolls
    FIREBALL_SPELL_SCROLL,
    METEOR_SUMMON_SCROLL;

    fun getPossibleEnchants(): List<BEnchant> {
        val enchants = ArrayList<BEnchant>()
        when {
            this.toString().contains("helmet", true) -> enchants.addAll(EnchantUtils.helmetEnchants)
            this.toString().contains("chestplate", true) -> enchants.addAll(EnchantUtils.helmetEnchants)
            this.toString().contains("leggings", true) -> enchants.addAll(EnchantUtils.helmetEnchants)
            this.toString().contains("boots", true) -> enchants.addAll(EnchantUtils.helmetEnchants)
            this.toString().contains("sword", true) -> enchants.addAll(EnchantUtils.helmetEnchants)
        }
        return enchants
    }


    fun getBukkitMaterial(): Material {
        return when (this) {
            IRON_HELMET -> Material.valueOf(this.toString())
            IRON_CHESTPLATE -> Material.valueOf(this.toString())
            IRON_LEGGINGS -> Material.valueOf(this.toString())
            IRON_BOOTS -> Material.valueOf(this.toString())
            IRON_SWORD -> Material.valueOf(this.toString())
            IRON_AXE -> Material.valueOf(this.toString())
            IRON_HOE -> Material.valueOf(this.toString())
            IRON_PICKAXE -> Material.valueOf(this.toString())
            IRON_SHOVEL -> Material.IRON_SPADE
            GOLD_HELMET -> Material.valueOf(this.toString())
            GOLD_CHESTPLATE -> Material.valueOf(this.toString())
            GOLD_LEGGINGS -> Material.valueOf(this.toString())
            GOLD_BOOTS -> Material.valueOf(this.toString())
            GOLD_SWORD -> Material.valueOf(this.toString())
            GOLD_AXE -> Material.valueOf(this.toString())
            GOLD_HOE -> Material.valueOf(this.toString())
            GOLD_PICKAXE -> Material.valueOf(this.toString())
            GOLD_SHOVEL -> Material.GOLD_SPADE
            DIAMOND_HELMET -> Material.valueOf(this.toString())
            DIAMOND_CHESTPLATE -> Material.valueOf(this.toString())
            DIAMOND_LEGGINGS -> Material.valueOf(this.toString())
            DIAMOND_BOOTS -> Material.valueOf(this.toString())
            DIAMOND_SWORD -> Material.valueOf(this.toString())
            DIAMOND_AXE -> Material.valueOf(this.toString())
            DIAMOND_HOE -> Material.valueOf(this.toString())
            DIAMOND_PICKAXE -> Material.valueOf(this.toString())
            DIAMOND_SHOVEL -> Material.DIAMOND_SPADE
            STONE_SWORD -> Material.valueOf(this.toString())
            STONE_AXE -> Material.valueOf(this.toString())
            STONE_HOE -> Material.valueOf(this.toString())
            STONE_PICKAXE -> Material.valueOf(this.toString())
            STONE_SHOVEL -> Material.STONE_SPADE
            LEATHER_HELMET -> Material.valueOf(this.toString())
            LEATHER_CHESTPLATE -> Material.valueOf(this.toString())
            LEATHER_LEGGINGS -> Material.valueOf(this.toString())
            LEATHER_BOOTS -> Material.valueOf(this.toString())
            WOOD_SWORD -> Material.valueOf(this.toString())
            WOOD_AXE -> Material.valueOf(this.toString())
            WOOD_HOE -> Material.valueOf(this.toString())
            WOOD_PICKAXE -> Material.valueOf(this.toString())
            WOOD_SHOVEL -> Material.WOOD_SPADE

            BLADE_OF_HERMES -> Material.DIAMOND_SWORD
            GRAPPLING_HOOK -> Material.FISHING_ROD
            CACTUS_HELMET -> Material.LEATHER_HELMET
            CACTUS_CHESTPLATE -> Material.LEATHER_CHESTPLATE
            CACTUS_LEGGINGS -> Material.LEATHER_LEGGINGS
            CACTUS_BOOTS -> Material.LEATHER_BOOTS
            LAPIS_HELMET -> Material.LEATHER_HELMET
            LAPIS_CHESTPLATE -> Material.LEATHER_CHESTPLATE
            LAPIS_LEGGINGS -> Material.LEATHER_LEGGINGS
            LAPIS_BOOTS -> Material.LEATHER_BOOTS
            DOUBLE_JUMP_BOOTS -> Material.LEATHER_BOOTS
            THUNDERBOLT -> Material.BLAZE_ROD
            HARDENED_DIAMOND_HELMET -> Material.DIAMOND_HELMET
            HARDENED_DIAMOND_CHESTPLATE -> Material.DIAMOND_CHESTPLATE
            HARDENED_DIAMOND_LEGGINGS -> Material.DIAMOND_LEGGINGS
            HARDENED_DIAMOND_BOOTS -> Material.DIAMOND_BOOTS
            HARDENED_DIAMOND_SWORD -> Material.DIAMOND_SWORD
            HARDENED_DIAMOND_AXE -> Material.DIAMOND_AXE
            HARDENED_DIAMOND_HOE -> Material.DIAMOND_HOE
            HARDENED_DIAMOND_PICKAXE -> Material.DIAMOND_PICKAXE
            HARDENED_DIAMOND_SHOVEL -> Material.DIAMOND_SPADE
            MJOLNIR -> Material.IRON_PICKAXE
            FIREBALL_SPELL_SCROLL -> TODO()
            METEOR_SUMMON_SCROLL -> TODO()
        }
    }
}