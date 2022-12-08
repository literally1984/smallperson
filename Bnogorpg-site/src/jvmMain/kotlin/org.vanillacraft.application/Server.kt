package org.vanillacraft.application

import io.ktor.http.HttpStatusCode
import io.ktor.server.application.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.html.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.Netty
import io.ktor.server.routing.*
import kotlinx.html.*

fun HTML.index() {
    head {
        title("Hello from Ktor!")
        style {
            unsafe {
                raw("""
                    .div-1 {
                        background-color: #272727;
                        position: relative;
                        height: 500px;
                        right: 500px;
                    }
                    """)
            }
        }
    }
    body {
        div {
            classes = setOf("div-1")
            +"Hello from Ktor"

        }
        div {
            id = "root"
        }
        div {
            script(src = "/static/Bnogorpg-site.js") {}
        }
    }
}

fun main() {
    embeddedServer(Netty, port = 6969, host = "127.0.0.1", module = Application::myApplicationModule).start(wait = true)
}

fun Application.myApplicationModule() {
    routing {
        get("/") {
            call.respondHtml(HttpStatusCode.OK, HTML::index)
        }
        static("/static") {
            resources()
        }
    }
}