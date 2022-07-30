package games.bnogocarft.bnogorpg.RecipeBook

import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class RecipeBookCommand : CommandExecutor {
    //TODO: register in Main class
    override fun onCommand(sender: CommandSender, cmd: Command, label: String?, args: Array<out String>?): Boolean {
        // Player Checker
        if (sender !is Player) {
            sender.sendMessage("Only players can execute this command because it is a GUI command!")
            return true
        }

        if (args == null) { // Checks if argument exists
            sender.sendMessage("You must provide arguments!")
            return true
        }

        if (args.size == 1) {
            // Checks if the ItemStack in the argument is a valid ItemStack
            if (RecipeManager.textRecipeMap[args[0]] == null) {
                sender.sendMessage("That is not a valid item with a crafting recipe!")
                return true
            }

            val shapedRecipe =
                RecipeManager.textRecipeMap[args[0]] // Gets ShapedRecipe from the textRecipe HashMap based on player arguments
            val recipePage = RecipeManager.pageMap[shapedRecipe] // Gets RecipePage from shapedRecipe

            // recipePage null checker
            if (recipePage!!.pageInventory == null) {
                sender.sendMessage("Internal error translating ShapedRecipe to RecipePage")
                return true
            }

            sender.openInventory(recipePage.pageInventory)
            return true
        }


        return false
    }
}