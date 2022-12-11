import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import react.create
import react.dom.client.createRoot

fun main() {
    val container = document.createElement("div")
    document.body!!.appendChild(container)

    val welcome = Welcome.create {
        name = "Steve"
    }
    createRoot(container).render(welcome)
}