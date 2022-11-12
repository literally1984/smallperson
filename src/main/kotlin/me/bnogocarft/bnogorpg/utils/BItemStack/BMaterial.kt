package me.bnogocarft.bnogorpg.utils.BItemStack

import me.bnogocarft.bnogorpg.items.*
import me.bnogocarft.bnogorpg.items.DefaultItems.*
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
            else -> {
                Material.PAPER
            }
        }
    }

    fun getDefaultMeta(): ItemMeta {
        /*Iron.helm.itemMeta
        Iron.chestplate.itemMeta
        Iron.leggings.itemMeta
        Iron.boots.itemMeta
        Iron.sword.itemMeta
        Iron.axe.itemMeta
        Iron.hoe.itemMeta
        Iron.pickaxe.itemMeta
        Iron.shovel.itemMeta*/
        return when (this) {
            BLADE_OF_HERMES -> BladeOfHermes.blade.itemMeta
            GRAPPLING_HOOK -> GrapplerItem.grapple.itemMeta

            CACTUS_HELMET -> CactusArmor.helm.itemMeta
            CACTUS_CHESTPLATE -> CactusArmor.chestplate.itemMeta
            CACTUS_LEGGINGS -> CactusArmor.leggings.itemMeta
            CACTUS_BOOTS -> CactusArmor.boots.itemMeta
            LAPIS_HELMET -> LapisArmor.helm.itemMeta
            LAPIS_CHESTPLATE -> LapisArmor.chestplate.itemMeta
            LAPIS_LEGGINGS -> LapisArmor.leggings.itemMeta
            LAPIS_BOOTS -> LapisArmor.boots.itemMeta
            IRON_HELMET -> Iron.helm.itemMeta
            IRON_CHESTPLATE -> Iron.chestplate.itemMeta
            IRON_LEGGINGS -> Iron.leggings.itemMeta
            IRON_BOOTS -> Iron.boots.itemMeta
            IRON_SWORD -> Iron.sword.itemMeta
            IRON_AXE -> Iron.axe.itemMeta
            IRON_HOE -> Iron.hoe.itemMeta
            IRON_PICKAXE -> Iron.pickaxe.itemMeta
            IRON_SHOVEL -> Iron.shovel.itemMeta
            GOLD_HELMET -> Gold.helm.itemMeta
            GOLD_CHESTPLATE -> Gold.chestplate.itemMeta
            GOLD_LEGGINGS -> Gold.leggings.itemMeta
            GOLD_BOOTS -> Gold.boots.itemMeta
            GOLD_SWORD -> Gold.sword.itemMeta
            GOLD_AXE -> Gold.axe.itemMeta
            GOLD_HOE -> Gold.hoe.itemMeta
            GOLD_PICKAXE -> Gold.pickaxe.itemMeta
            GOLD_SHOVEL -> Gold.shovel.itemMeta
            DIAMOND_HELMET -> Diamond.helm.itemMeta
            DIAMOND_CHESTPLATE -> Diamond.chestplate.itemMeta
            DIAMOND_LEGGINGS -> Diamond.leggings.itemMeta
            DIAMOND_BOOTS -> Diamond.boots.itemMeta
            DIAMOND_SWORD -> Diamond.sword.itemMeta
            DIAMOND_AXE -> Diamond.axe.itemMeta
            DIAMOND_HOE -> Diamond.hoe.itemMeta
            DIAMOND_PICKAXE -> Diamond.pickaxe.itemMeta
            DIAMOND_SHOVEL -> Diamond.shovel.itemMeta
            STONE_SWORD -> Stone.sword.itemMeta
            STONE_AXE -> Stone.axe.itemMeta
            STONE_HOE -> Stone.hoe.itemMeta
            STONE_PICKAXE -> Stone.pickaxe.itemMeta
            STONE_SHOVEL -> Stone.shovel.itemMeta
            LEATHER_HELMET -> Leather.helm.itemMeta
            LEATHER_CHESTPLATE -> Leather.chestplate.itemMeta
            LEATHER_LEGGINGS -> Leather.leggings.itemMeta
            LEATHER_BOOTS -> Leather.boots.itemMeta
            WOOD_SWORD -> Wood.sword.itemMeta
            WOOD_AXE -> Wood.axe.itemMeta
            WOOD_HOE -> Wood.hoe.itemMeta
            WOOD_PICKAXE -> Wood.pickaxe.itemMeta
            WOOD_SHOVEL -> Wood.shovel.itemMeta
            DOUBLE_JUMP_BOOTS -> DoubleJumpBoots.boots.itemMeta
            THUNDERBOLT -> Thunderbolt.blade.itemMeta
            FIREBALL_SPELL_SCROLL -> FireballSpell.scroll.itemMeta
            METEOR_SUMMON_SCROLL -> MeteorSpell.scroll.itemMeta
            HARDENED_DIAMOND_HELMET -> TODO()
            HARDENED_DIAMOND_CHESTPLATE -> TODO()
            HARDENED_DIAMOND_LEGGINGS -> TODO()
            HARDENED_DIAMOND_BOOTS -> TODO()
            HARDENED_DIAMOND_SWORD -> TODO()
            HARDENED_DIAMOND_AXE -> TODO()
            HARDENED_DIAMOND_HOE -> TODO()
            HARDENED_DIAMOND_PICKAXE -> TODO()
            HARDENED_DIAMOND_SHOVEL -> TODO()
        }
    }

    fun getStatVary(): ArrayList<String> {
        val vary = ArrayList<String>()
        when (this) {
            CACTUS_HELMET -> {
                vary.add("0-1")
                vary.add("2-5")
                vary.add("0-1")
                vary.add("1-3")
                vary.add("4-7")
                vary.add("6-9")
                vary.add("2-3")
            }

            CACTUS_CHESTPLATE -> {
                vary.add("1-3")
                vary.add("7-10")
                vary.add("1-2")
                vary.add("5-8")
                vary.add("12-17")
                vary.add("5-10")
                vary.add("2-3")
            }

            CACTUS_LEGGINGS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("2-3")
            }

            CACTUS_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("2-3")
            }

            LAPIS_HELMET -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            LAPIS_CHESTPLATE -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            LAPIS_LEGGINGS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            LAPIS_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            IRON_HELMET -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            IRON_CHESTPLATE -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            IRON_LEGGINGS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            IRON_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            IRON_SWORD -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }


            GOLD_HELMET -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            GOLD_CHESTPLATE -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            GOLD_LEGGINGS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            GOLD_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            GOLD_SWORD -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            DIAMOND_HELMET -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            DIAMOND_CHESTPLATE -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            DIAMOND_LEGGINGS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            DIAMOND_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            DIAMOND_SWORD -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            STONE_SWORD -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }


            LEATHER_HELMET -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            LEATHER_CHESTPLATE -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            LEATHER_LEGGINGS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            LEATHER_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            WOOD_SWORD -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            BLADE_OF_HERMES -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            DOUBLE_JUMP_BOOTS -> {
                vary.add("0-1")
                vary.add("9-11")
                vary.add("0-2")
                vary.add("7-9")
                vary.add("3-5")
                vary.add("5-10")
                vary.add("3-4")
            }

            THUNDERBOLT -> {
                vary.add("10-12")
                vary.add("2-4")
                vary.add("8-10")
                vary.add("1-3")
                vary.add("40-50")
                vary.add("35-45")
                vary.add("3-4")
            }

            else -> {}
        }

        return vary
    }
}