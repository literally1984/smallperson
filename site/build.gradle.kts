plugins {
    kotlin("multiplatform") version "1.7.20"
    application
    kotlin("plugin.serialization") version "1.4.21"
}

group = "org.vanillacraft"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven")
    maven {
        url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap")
        name = "Ktor EAP"
    }
    maven {
        url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap")
        name = "Ktor EAP"
    }
    maven {
        url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap")
        name = "Ktor EAP"
    }
}

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
    sourceSets {
        val commonMain by getting {
            val ktorVersion: String by project
            dependencies {
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jvmMain by getting {
            val exposedVersion: String by project
            dependencies {
                // https://mvnrepository.com/artifact/org.postgresql/postgresql
                implementation("org.postgresql:postgresql:42.2.24")
                implementation("io.ktor:ktor-server-netty:2.2.1")
                implementation("io.ktor:ktor-server-html-builder-jvm:2.2.1")
                implementation("org.jetbrains.kotlinx:kotlinx-html-jvm:0.7.2")
                implementation("org.jetbrains.exposed:exposed-core:$exposedVersion")
                implementation("org.jetbrains.exposed:exposed-dao:$exposedVersion")
                implementation("org.jetbrains.exposed:exposed-jdbc:$exposedVersion")
                implementation("io.ktor:ktor-server-content-negotiation:2.2.2-eap-568")
                implementation("io.ktor:ktor-server-cors:2.2.2-eap-568")
                implementation("io.ktor:ktor-server-compression:2.2.2-eap-568")
            }
        }
        val jvmTest by getting
        val jsMain by getting {
            val ktorVersion: String by project
            dependencies {
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:18.2.0-pre.346")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:18.2.0-pre.346")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:11.9.3-pre.346")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom:6.3.0-pre.346")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-redux:4.1.2-pre.346")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-redux:7.2.6-pre.346")
            }
        }
        val jsTest by getting
    }
}

application {
    mainClass.set("org.vanillacraft.application.ServerKt")
}

tasks.named<Copy>("jvmProcessResources") {
    val jsBrowserDistribution = tasks.named("jsBrowserDistribution")
    from(jsBrowserDistribution)
}

tasks.named<JavaExec>("run") {
    dependsOn(tasks.named<Jar>("jvmJar"))
    classpath(tasks.named<Jar>("jvmJar"))
}
