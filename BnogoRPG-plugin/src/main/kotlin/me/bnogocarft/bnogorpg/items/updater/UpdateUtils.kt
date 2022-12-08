package me.bnogocarft.bnogorpg.items.updater

import me.bnogocarft.bnogorpg.items.updater.Updates.Update

val updates = arrayListOf(Update.zerozerotwo)

class UpdateUtils {
    companion object {
        /*fun update(item: ItemStack) {
            // Checks if the BType is "armor" or "weapon"
            if (BItemUtils.getBType(item) == "armor" || BItemUtils.getBType(item) == "weapon") {
                val bitem = BItemUtils.getBGear(item)
                if (bitem.lastUpdate != Main.patch) {// Gets the current server patch
                    // Gets all the updates between the item's last update and the current server patch
                    for (update in updates.indexOf(bitem.lastUpdate)..updates.indexOf(Main.patch)) {
                        for (change in updates[update].getChanges()) { // loops through the iteration's changes
                            if (bitem.bMaterial == change.mat) {
                                when (change) {
                                    is AbilityChange -> {

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }*/
    }
}