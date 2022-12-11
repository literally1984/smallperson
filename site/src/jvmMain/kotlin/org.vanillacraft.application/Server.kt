package org.vanillacraft.application

import Person
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.html.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.Netty
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.vanillacraft.application.test.age
import org.vanillacraft.application.test.name
import java.net.http.HttpResponse
import javax.print.attribute.standard.Compression

object test : Table() {
    val name = varchar("name", 50)
    val age = integer("age")
}

fun HTML.index() {
    head {
        title("Hello from Ktor!")
    }
    body {
        script(src = "/static/site.js") {}
    }
}

fun main() {
    Database.connect(
        "jdbc:postgresql://ep-noisy-mouse-090229.eu-central-1.aws.neon.tech/neondb",
        user = "Fangoboyo",
        password = "Dhsx56YPfiVr",
        driver = "org.postgresql.Driver"
    )
    val respondList = mutableListOf<Person>()
    transaction {
        addLogger(StdOutSqlLogger)
        SchemaUtils.create(test)

        transaction {
            test.select {
                name eq "Steve"
            }.forEach {
                respondList.add(Person(it[name], it[age]))
            }
        }
    }
    println(respondList)
    print("connection successsful")
    val port = System.getenv("PORT")?.toInt() ?: 6969
    embeddedServer(Netty, port = port, host = "localhost", module = Application::module).start(wait = true)
}

fun Application.module() {
    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
        anyHost()
    }
    install(Compression) {
        gzip()
    }
    routing {
        route("/") {
            get {
                call.respondHtml(HttpStatusCode.OK, HTML::index)
            }
        }

        route("/test") {
            get("/{name}") {
                val arg = call.parameters["name"] as String
                val response = ArrayList<Person>()
                transaction {
                    test.select {
                        name eq arg
                    }.forEach {
                        println("user found")
                        response.add(Person(it[name], it[age]))
                    }
                }
                if (response.isNotEmpty()) {
                    print("not null ")
                    call.respond(response as List<Person>)
                } else {
                    print("null ")
                    call.respond(listOf<Person>())
                }
                println("response posted")
            }
        }
        static("/static") {
            resources()
        }
    }
}