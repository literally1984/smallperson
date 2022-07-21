package games.bnogocarft.bnogorpg.WebsiteCommunication

import org.java_websocket.WebSocket
import org.java_websocket.handshake.ClientHandshake
import org.java_websocket.server.WebSocketServer
import org.java_websocket.*
import java.net.InetSocketAddress


class SimpleServer(address: InetSocketAddress?) : WebSocketServer(address) {
    override fun onOpen(conn: WebSocket, handshake: ClientHandshake) {
        conn.send("Welcome to the server!") //This method sends a message to the new client
        broadcast("new connection: " + handshake.resourceDescriptor) //This method sends a message to all clients connected
        println("new connection to " + conn.remoteSocketAddress)
    }

    override fun onClose(conn: WebSocket, code: Int, reason: String, remote: Boolean) {
        println("closed " + conn.remoteSocketAddress + " with exit code " + code + " additional info: " + reason)
    }

    override fun onMessage(conn: WebSocket, message: String) {
        println("received message from " + conn.remoteSocketAddress + ": " + message)
    }

    override fun onMessage(conn: WebSocket, message: ByteBuffer?) {
        println("received ByteBuffer from " + conn.remoteSocketAddress)
    }

    override fun onError(conn: WebSocket, ex: Exception) {
        System.err.println("an error occurred on connection " + conn.remoteSocketAddress + ":" + ex)
    }

    override fun onStart() {
        println("server started successfully")
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            val host = "0.0.0.0"
            val port = 8887
            val server: WebSocketServer = SimpleServer(InetSocketAddress(host, port))
            server.run()
        }

}