package me.bnogocarft.bnogorpg.utils.database

import me.bnogocarft.bnogorpg.utils.cast
import java.io.ObjectOutputStream
import java.lang.IllegalArgumentException
import java.sql.Connection
import java.sql.DriverManager
import java.sql.PreparedStatement
import java.sql.ResultSet
import java.sql.SQLException
import kotlin.reflect.KClass
import kotlin.reflect.cast

enum class ClassType

class BnogoSQL {
    enum class Table {
        AUCTION,
        PLAYER;

        fun getSQLName(): String {
            return when (this) {
                AUCTION -> "auctions"
                PLAYER -> "players"
            }
        }

        fun getProperties(): ArrayList<Property> {
            val list = ArrayList<Property>()
            for (property in Property.values()) {
                if (property.getTable() == this) {
                    list.add(property)
                }
            }

            return list
        }

        fun getMap(): ImmutableHashMap<Property, Any?> {
            val map = ImmutableHashMap<Property, Any?>()
            for (property in Property.values()) {
                if (property.getTable() == this) {
                    map.put(property, null)
                }
            }

            return map
        }

        enum class Property {
            PLAYER_STASH,
            PLAYER_TALISMAN,
            PLAYER_SPELLS,
            PLAYER_BITEMS,
            PLAYER_LEVELS,
            AUC_ID,
            AUC_ITEM;

            fun getSQLName(): String {
                return when (this) {
                    PLAYER_STASH -> "stash"
                    PLAYER_TALISMAN -> "talisman"
                    PLAYER_SPELLS -> "spells"
                    PLAYER_BITEMS -> "bItems"
                    PLAYER_LEVELS -> "levels"
                    AUC_ID -> "id"
                    AUC_ITEM -> "item"
                }
            }

            fun getTable(): Table {
                return if (this.toString().contains("auc", true)) {
                    AUCTION
                } else if (this.toString().contains("player", true)) {
                    PLAYER
                } else {
                    throw IllegalArgumentException("Property $this does not belong to any table!")
                }
            }

            fun getType(): KClass<*> {
                return when (this) {
                    PLAYER_STASH -> Array<Array<Byte>>::class
                    PLAYER_TALISMAN -> Array<Array<Byte>>::class
                    PLAYER_SPELLS -> Array<Array<Byte>>::class
                    PLAYER_BITEMS -> Array<Array<Byte>>::class
                    PLAYER_LEVELS -> Array<Byte>::class
                    AUC_ID -> Int::class
                    AUC_ITEM -> Array<Byte>::class
                }
            }
        }

    }
    companion object {
        var con: Connection? = null
        fun enaableDB() {
            Class.forName("org.postgresql.Driver").newInstance()
            val url =
                "jdbc:postgresql://db.bit.io:5432/bongo.bnogodb?user=bongo&password=v2_3wGye_fvVgRRE27ntiZa7ksSaWSKn"
            con = DriverManager.getConnection(url)
        }

        fun prepare(sql: String): PreparedStatement {
            return con?.prepareStatement(sql) ?: throw SQLException("SQL connection has not been establish yet!")
        }

        fun insert(table: Table, vararg values: Any?): Boolean {
            val sql = "INSERT INTO ${table.getSQLName()} VALUES (${values.joinToString(",") { "?" }})"
            val ps = prepare(sql)
            for (i in values.indices) {
                ps.setObject(i + 1, values[i])
            }
            return ps.execute()
        }

        fun update(table: String, vararg values: Any?): Int {
            val sql = "UPDATE $table SET ${values.joinToString(",") { "?" }}"
            val ps = prepare(sql)
            val type = PreparedStatement::class
            for (i in values.indices) {
                ps.setObject(i + 1, values[i])
            }
            return ps.executeUpdate()
        }

        fun select(table: Table, vararg values: Pair<Table.Property, Any>): ResultSet {
            for (property in values) {
                if (property.second::class != property.first.getType()) {
                    throw IllegalArgumentException("Property $property does not belong to table $table!")
                }
            }
            val sql = "SELECT * FROM ${table.getSQLName()} WHERE ${values.joinToString(",") { "?" }}"
            val ps = prepare(sql)
            for (i in values.indices) {
                ps.setObject(i + 1, values[i])
            }
            return ps.executeQuery()
        }
    }

    class BResultSet(val rs: ResultSet, val table: Table) {
        fun next(): Boolean {
            return rs.next()
        }

        fun get(property: Table.Property): Any {
            return when (property) {
                Table.Property.PLAYER_STASH -> rs.getObject("stash")
                Table.Property.PLAYER_TALISMAN -> rs.getObject("talisman")
                Table.Property.PLAYER_SPELLS -> rs.getObject("spells")
                Table.Property.PLAYER_BITEMS -> rs.getObject("bitems")
                Table.Property.PLAYER_LEVELS -> rs.getObject("levels")
                Table.Property.AUC_ID -> rs.getObject("aucid")
                Table.Property.AUC_ITEM -> rs.getObject("aucitem")
            }
        }
    }
}

class ImmutableHashMap<K, V>(vararg initialValues: Pair<K, V>): HashMap<K, V>() {
    init {
        for (pair in initialValues) {
            put(pair.first, pair.second)
        }
    }

    operator fun set(key: K, value: V) {
        if (containsKey(key)) {
            put(key, value)
        }
    }
}