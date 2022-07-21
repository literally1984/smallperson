package games.bnogocarft.bnogorpg.WebsiteCommunication

import org.java_websocket.server.WebSocketServer

class ComUtils : WebSocketServer() {
    // start websocket server
    fun startWebSocketServer(port: Int) {
        val server = WebSocketServer(port)
        server.start()
    }
    // make onOpen websocket function
    fun onOpen(server: WebSocketServer) {
        server.onOpen = {
            println("Connection opened")
        }
    }
    startWebSocketServer(8080)
}