"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BACKEND_URL } from "@/lib/config"

type User = {
    email: string
    name: string
    role: string
    provider: string
}

const TOKEN_KEY = "nb-token"

export default function AdminDashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function init() {
            try {
                // 1) Leer token de la URL
                const params = new URLSearchParams(window.location.search)
                const urlToken = params.get("token")

                if (urlToken) {
                    // Guardar token en localStorage
                    localStorage.setItem(TOKEN_KEY, urlToken)

                    // Limpiar el query param de la URL
                    window.history.replaceState({}, "", "/admin/dashboard")
                }

                // 2) Token final (URL o localStorage)
                const token = urlToken || localStorage.getItem(TOKEN_KEY)

                if (!token) {
                    // Si no hay token -> fuera al login
                    window.location.href = "/admin/login"
                    return
                }

                // 3) Llamar al backend /api/me
                const res = await fetch(`${BACKEND_URL}/api/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                if (!res.ok) {
                    // Token inválido o expirado
                    localStorage.removeItem(TOKEN_KEY)
                    window.location.href = "/admin/login"
                    return
                }

                const data: User = await res.json()
                setUser(data)
                setLoading(false)
            } catch (err) {
                console.error("Error cargando dashboard:", err)
                setError("No se pudo cargar Orion CMS.")
                setLoading(false)
            }
        }

        init()
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground text-lg">Cargando Orion CMS…</p>
                </main>
                <Footer />
            </div>
        )
    }

    if (error || !user) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-1 flex flex-col items-center justify-center gap-4">
                    <p className="text-red-400">{error ?? "No se pudo obtener la sesión."}</p>
                    <Button
                        onClick={() => {
                            localStorage.removeItem(TOKEN_KEY)
                            window.location.href = "/admin/login"
                        }}
                    >
                        Volver al login
                    </Button>
                </main>
                <Footer />
            </div>
        )
    }

    // Aquí user ya NO es null por los returns de arriba
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                    <div className="mb-8">
                        <p className="text-sm text-muted-foreground mb-1">Orion CMS · Admin Area</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                            Bienvenido, <span className="font-kanit">{user.name}</span>
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Sesión iniciada como <span className="font-semibold">{user.email}</span> ({user.role}, {user.provider})
                        </p>
                    </div>

                    {/* Layout principal del Dashboard */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Panel de usuario */}
                        <Card className="lg:col-span-1 bg-card border-border">
                            <CardContent className="pt-6">
                                <h2 className="text-lg font-bold mb-4 text-foreground">Tu cuenta</h2>

                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <p>
                                        <span className="font-semibold text-foreground">Nombre:</span> {user.name}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground">Email:</span> {user.email}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground">Rol:</span> {user.role}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground">Proveedor:</span> {user.provider}
                                    </p>
                                </div>

                                <Button
                                    variant="outline"
                                    className="mt-6 w-full"
                                    onClick={() => {
                                        localStorage.removeItem(TOKEN_KEY)
                                        window.location.href = "/admin/login"
                                    }}
                                >
                                    Cerrar sesión
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Accesos a módulos */}
                        <Card className="lg:col-span-2 bg-card border-border">
                            <CardContent className="pt-6">
                                <h2 className="text-lg font-bold mb-4 text-foreground">Panel de control</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card className="bg-background border-border">
                                        <CardContent className="pt-4">
                                            <h3 className="font-semibold text-foreground mb-2">Devblogs / Posts</h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Crear, editar y publicar devblogs para tu sitio principal.
                                            </p>
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    window.location.href = "/admin/posts"
                                                }}
                                            >
                                                Ir a gestor de posts
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-background border-border">
                                        <CardContent className="pt-4">
                                            <h3 className="font-semibold text-foreground mb-2">Links & Redes</h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Administrar enlaces públicos y redes sociales de NightBit.
                                            </p>
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    window.location.href = "/admin/links"
                                                }}
                                            >
                                                Ir a gestor de links
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-background border-border">
                                        <CardContent className="pt-4">
                                            <h3 className="font-semibold text-foreground mb-2">Media / Imágenes</h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Subir capturas, artes y recursos que usarás en los posts.
                                            </p>
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    window.location.href = "/admin/media"
                                                }}
                                            >
                                                Ir a gestor de media
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-background border-border">
                                        <CardContent className="pt-4">
                                            <h3 className="font-semibold text-foreground mb-2">Configuración futura</h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Aquí podremos agregar ajustes de Orion CMS, roles, etc.
                                            </p>
                                            <Button size="sm" variant="outline" disabled>
                                                Próximamente
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

