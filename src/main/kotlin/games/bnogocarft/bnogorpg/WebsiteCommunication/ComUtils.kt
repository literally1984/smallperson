package games.bnogocarft.bnogorpg.WebsiteCommunication

import org.java_websocket.WebSocket
import org.java_websocket.handshake.ClientHandshake
import org.java_websocket.server.WebSocketServer
import java.net.InetAddress
import java.net.InetSocketAddress
import java.nio.ByteBuffer


class ComUtils(address: InetSocketAddress?) : WebSocketServer(address) {
    override fun onOpen(conn: WebSocket, handshake: ClientHandshake) {
        conn.send("[BnogoWebSocket] Welcome to the server!") //This method sends a message to the new client
        broadcast("[BnogoWebSocket] New connection: " + handshake.resourceDescriptor) //This method sends a message to all clients connected
        println("[BnogoWebSocket] New connection to " + conn.remoteSocketAddress)
    }

    override fun onClose(conn: WebSocket, code: Int, reason: String, remote: Boolean) {
        println("[BnogoWebSocket] Closed " + conn.remoteSocketAddress + " with exit code " + code + " additional info: " + reason)
    }

    override fun onMessage(conn: WebSocket, message: String) {
        println("[BnogoWebSocket] Received message from " + conn.remoteSocketAddress + ": " + message)
    }

    override fun onMessage(conn: WebSocket, message: ByteBuffer?) {
        println("[BnogoWebSocket] Received ByteBuffer from " + conn.remoteSocketAddress)
    }

    override fun onError(conn: WebSocket, ex: Exception) {
        System.err.println("[BnogoWebSocket] an error occurred on connection " + conn.remoteSocketAddress + ":" + ex)
    }

    override fun onStart() {
        println("[BnogoWebSocket] Websocket server started")
    }

    companion object {
        @JvmStatic
        fun main() {
            val host = InetAddress.getLocalHost()
            val port = 25566
            val server: WebSocketServer = ComUtils(InetSocketAddress(host, port))
            server.run()
        }
    }
}