package me.bnogocarft.bnogorpg.utils

import org.bukkit.Bukkit
import org.java_websocket.WebSocket
import org.java_websocket.handshake.ClientHandshake
import org.java_websocket.server.WebSocketServer
import java.net.InetSocketAddress
import java.util.logging.Logger

class Websocket(port: Int) : WebSocketServer(InetSocketAddress("localhost", port)) {
    private val logger = Logger.getLogger(Websocket::class.java.name)
    override fun onOpen(conn: WebSocket, handshake: ClientHandshake?) {
        logger.info("Connection opened to " + conn.remoteSocketAddress.hostName)
    }

    override fun onClose(conn: WebSocket, code: Int, reason: String?, remote: Boolean) {
        logger.info("Connection closed to " + conn.remoteSocketAddress.hostName)
    }

    override fun onMessage(conn: WebSocket?, message: String) {
        logger.info("Received message: $message")
    }

    override fun onError(conn: WebSocket?, ex: Exception) {
        logger.info(ex.message)
    }

    override fun onStart() {
        logger.info("Webserver started on port: " + Bukkit.getPort())
    }
}