package games.bnogocarft.bnogorpg.NPC

import net.citizensnpcs.api.CitizensAPI
import org.bukkit.Location
import org.bukkit.entity.EntityType


class SpawnNPC {
    fun spawnNPC(loc: Location) {
        val skin =
            "ewogICJ0aW1lc3RhbXAiIDogMTY1ODA0OTk0Mzg0MywKICAicHJvZmlsZUlkIiA6ICIyMWUzNjdkNzI1Y2Y0ZTNiYjI2OTJjNGEzMDBhNGRlYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJHZXlzZXJNQyIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kYjI3NjA3NTllNjY1NTZlMWFjOGZjNDdhZmM2ZDIyNmFmYTQ3Yjg2YTE1NzEwNGQ1NTRjOTMzNmRmOTZjODM0IgogICAgfQogIH0KfQ=="
        val skinsig =
            "rpj+3s+ZNHOckiKfMMFjWXJisKaE5X05bVHfKye9aF3255qrrpi2Dr3nDxnR6CDHNucTHvuQnOcCwMghxvxWXf1apmVcnzzNqMLhcTVt+7PZvWVSAZFy07iObc/qAMqpFU4eZ/75OJ3jcYFwJzMqiw/kpORVQdbzSb3A0xt2NQUpxJHRY2HUjs/F0fm9da4kJmwoegK4e9Eg035/NRvjb+F9Lv4DIgQZ1qS4m9t75uk0vkegQcdCUwnh3Qt12PA9OxzgkxqFA8cos4EapSadLBK2sNZ3PgF6zgCJeyc4tWpUlD64k6SQASI10WqJo/WHwxgscQ5RsVmiBCLkepgNOEPyV3Vz+XThvxbyvKIRXH3Ba5awi2/B/puiIzZi6zwJJQSIrRtr1ltEQH6hwtSJIeOAhyzOeZyskCMWQz+7hsrW7mwCyojq6gmYiIH9iMxZmWYWxc8cA25S0AfP91SEB+EXX/tDlgkfp3dt8AujQ30LISw+HtFHdbJzIHzQbHyrO2NeSuz5gv+F9f5tkQ3nv5Sz4hvDcJ/WhauO0jkg6KA7FqHh5u8/QUmduTX5PtahYx3kPtB0GW8rJB4wv0Adb4bJspw1lacBu7qLa2MzDsf50e3fFbBxL4mWLagxy7TECeNYyPTl4ASDaBSWZezq+UqzeYpqxpUbYuKYp5YxtFM="
        val npc = CitizensAPI.getNPCRegistry().createNPC(EntityType.PLAYER, "EaglerMan")
        npc.spawn(loc)
    }
}