"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BACKEND_URL } from "@/lib/config"

const TOKEN_KEY = "nb-token"

export default function EditPostPage() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [bannerURL, setBannerURL] = useState<string | null>(null)
    const [newBanner, setNewBanner] = useState<File | null>(null)

    const [error, setError] = useState("")

    useEffect(() => {
        async function loadPost() {
            const token = localStorage.getItem(TOKEN_KEY)
            if (!token) {
                window.location.href = "/admin/login"
                return
            }

            const res = await fetch(`${BACKEND_URL}/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (!res.ok) {
                setError("No se pudo cargar el post.")
                setLoading(false)
                return
            }

            const data = await res.json()

            setTitle(data.title)
            setContent(data.content)
            setBannerURL(data.banner_url || null)
            setLoading(false)
        }

        loadPost()
    }, [id])

    async function uploadBanner(token: string): Promise<string | null> {
        if (!newBanner) return null

        const formData = new FormData()
        formData.append("file", newBanner)

        const res = await fetch(`${BACKEND_URL}/api/media/upload`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })

        if (!res.ok) return null

        const data = await res.json()
        return data.url
    }

    async function saveChanges() {
        setSaving(true)
        const token = localStorage.getItem(TOKEN_KEY)

        if (!token) {
            window.location.href = "/admin/login"
            return
        }

        // Subir nuevo banner si existe
        let finalBanner = bannerURL
        const uploaded = await uploadBanner(token)
        if (uploaded) finalBanner = uploaded

        const res = await fetch(`${BACKEND_URL}/api/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title,
                content,
                banner_url: finalBanner,
            }),
        })

        if (!res.ok) {
            const data = await res.json()
            setError(data.error || "Error guardando cambios")
            setSaving(false)
            return
        }

        window.location.href = "/admin/posts"
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-foreground text-xl">
                Cargando publicación…
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-3xl">
                    <h1 className="text-3xl font-bold text-foreground mb-6">Editar Post</h1>

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
                                />
                            </div>

                            {/* Banner actual */}
                            {bannerURL && (
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-foreground">Banner actual</label>
                                    <img
                                        src={
                                            bannerURL.startsWith("http")
                                                ? bannerURL
                                                : `${BACKEND_URL}${bannerURL}`
                                        }
                                        className="mb-4 rounded-md border rounded-md max-h-64 object-cover"
                                    />
                                </div>
                            )}

                            {/* Reemplazar banner */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-foreground">Cambiar banner (opcional)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setNewBanner(e.target.files?.[0] || null)}
                                />

                                {newBanner && (
                                    <img
                                        src={URL.createObjectURL(newBanner)}
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
                                />
                            </div>

                            {error && <p className="text-red-500">{error}</p>}

                            <div className="flex justify-end">
                                <Button onClick={saveChanges} disabled={saving}>
                                    {saving ? "Guardando…" : "Guardar Cambios"}
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
