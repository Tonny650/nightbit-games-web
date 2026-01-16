"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BACKEND_URL } from "@/lib/config"

const TOKEN_KEY = "nb-token"

export default function NewPostPage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [banner, setBanner] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function uploadBanner(token: string): Promise<string | null> {
        if (!banner) return null

        const formData = new FormData()
        formData.append("file", banner)

        const res = await fetch(`${BACKEND_URL}/api/media/upload`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })

        if (!res.ok) {
            console.error("Error subiendo banner")
            return null
        }

        const data = await res.json()
        return data.url
    }

    async function createPost() {
        setError("")
        setLoading(true)

        const token = localStorage.getItem(TOKEN_KEY)
        if (!token) {
            window.location.href = "/admin/login"
            return
        }

        // 1. Subir imagen si existe
        const bannerURL = await uploadBanner(token)

        // 2. Crear post en backend
        const res = await fetch(`${BACKEND_URL}/api/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title,
                content,
                banner_url: bannerURL,
                image_urls: [],
                video_links: []
            }),
        })

        if (!res.ok) {
            const data = await res.json()
            setError(data.error || "Error creando post")
            setLoading(false)
            return
        }

        // 3. Redirigir al listado
        window.location.href = "/admin/posts"
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-3xl">
                    <h1 className="text-3xl font-bold text-foreground mb-6">Nuevo Post</h1>

                    <Card className="bg-card border-border">
                        <CardContent className="pt-6 space-y-6">
                            {/* Título */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-foreground">Título</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-background border border-border text-foreground"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Ejemplo: Bienvenido a NightBit CMS"
                                />
                            </div>

                            {/* Banner */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-foreground">Banner (opcional)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full text-muted-foreground"
                                    onChange={(e) => setBanner(e.target.files?.[0] || null)}
                                />

                                {banner && (
                                    <img
                                        src={URL.createObjectURL(banner)}
                                        className="mt-4 rounded-md w-full max-h-64 object-cover border border-border"
                                    />
                                )}
                            </div>

                            {/* Contenido */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-foreground">Contenido</label>
                                <textarea
                                    className="w-full h-60 px-4 py-2 rounded-md bg-background border border-border text-foreground"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Escribe aquí tu publicación..."
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}

                            <div className="flex justify-end">
                                <Button onClick={createPost} disabled={loading}>
                                    {loading ? "Guardando..." : "Crear Post"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <Footer />
        </div>
    )
}