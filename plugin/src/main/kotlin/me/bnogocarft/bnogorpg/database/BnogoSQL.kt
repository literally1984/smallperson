package me.bnogocarft.bnogorpg.database

import array
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

class BnogoSQL {

    companion object {
        fun enable() {
            Database.connect(
                "jdbc:postgresql://ep-noisy-mouse-090229.eu-central-1.aws.neon.tech/neondb",
                user = "Fangoboyo",
                password = "Dhsx56YPfiVr",
                driver = "org.postgresql.Driver"
            )
            transaction {
                addLogger(StdOutSqlLogger)
                SchemaUtils.create(players)
            }
            print("connection successful")
        }
    }
}

object players: Table() {
    val stash = array<ByteArray>("stash", BinaryColumnType(100000))
    val name = varchar("name", 50)
    val talismans = array<ByteArray>("talismans", BinaryColumnType(100000))
    val spells = array<ByteArray>("spells", BinaryColumnType(100000))
    val skill_stats = array<Float>("skill_stats", FloatColumnType())
}

object auctions: Table() {
    val seller = varchar("seller_name", 50)
    val endTime = integer("end_time")
    val bidder = varchar("current_bidder", 50).nullable()
    val bid = integer("current_bid").nullable()
    val item = binary("item", 100000)
    val id = integer("id").autoIncrement()
}