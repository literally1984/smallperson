package me.bnogocarft.bnogorpg.entity

import org.bukkit.entity.Entity

data class ControlledEntity(val controlled: Entity, val controlType: ControlType, val fly: Boolean) {

}