package games.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import games.bnogocarft.bnogorpg.CustomItems.*
import games.bnogocarft.bnogorpg.CustomItems.DefaultItems.*
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

    GRAPPLING_HOOK,

    DOUBLE_JUMP_BOOTS;

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
        }
    }
}