"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BACKEND_URL } from "@/lib/config"
import { Button } from "@/components/ui/button"

const TOKEN_KEY = "nb-token"

export default function AdminPostsPage() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const tk = localStorage.getItem(TOKEN_KEY)
        if (!tk) {
            window.location.href = "/admin/login"
            return
        }
        setToken(tk)
        fetchPosts(tk)
    }, [])

    async function fetchPosts(tk: string) {
        setLoading(true)

        try {
            const res = await fetch(`${BACKEND_URL}/api/posts`, {
                headers: { Authorization: `Bearer ${tk}` },
            })

            if (!res.ok) {
                setError("Error cargando posts")
                setLoading(false)
                return
            }

            const data = await res.json()

            // Backend devuelve un array → úsalo directamente
            if (Array.isArray(data)) {
                setPosts(data)
            }
            // Si en algún momento backend cambia y usa { posts: [] }
            else if (data.posts) {
                setPosts(data.posts)
            }
            // fallback
            else {
                setPosts([])
            }

            setLoading(false)

        } catch (err) {
            setError("No se pudo conectar con el servidor")
            setLoading(false)
        }
    }


    async function deletePost(id: string) {
        if (!token) return

        const confirmDelete = confirm("¿Eliminar este post permanentemente?")
        if (!confirmDelete) return

        const res = await fetch(`${BACKEND_URL}/api/posts/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        })

        if (!res.ok) {
            alert("Error eliminando post")
            return
        }

        setPosts(posts.filter((p) => p.id !== id))
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold text-foreground">Administrar Publicaciones</h1>

                        <Button asChild>
                            <Link href="/admin/posts/new">➕ Nueva Publicación</Link>
                        </Button>
                    </div>

                    {/* LOADING */}
                    {loading && (
                        <p className="text-muted-foreground">Cargando publicaciones…</p>
                    )}

                    {/* ERROR */}
                    {!loading && error && (
                        <p className="text-red-500">{error}</p>
                    )}

                    {/* TABLE */}
                    {!loading && !error && (
                        <div className="overflow-x-auto border border-border rounded-lg">
                            <table className="w-full text-left text-foreground">
                                <thead className="bg-muted border-b border-border">
                                <tr>
                                    <th className="px-4 py-3 w-32">Banner</th>
                                    <th className="px-4 py-3">Título</th>
                                    <th className="px-4 py-3 w-40">Fecha</th>
                                    <th className="px-4 py-3 w-40">Acciones</th>
                                </tr>
                                </thead>

                                <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                                        <td className="px-4 py-3">
                                            {post.banner_url ? (
                                                <img
                                                    src={
                                                        post.banner_url?.startsWith("http")
                                                            ? post.banner_url
                                                            : `${BACKEND_URL}${post.banner_url}`
                                                    }
                                                    className="w-24 h-16 object-cover rounded-md border border-border"
                                                />
                                            ) : (
                                                <div className="w-24 h-16 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground">
                                                    Sin imagen
                                                </div>
                                            )}
                                        </td>

                                        <td className="px-4 py-3 font-medium">
                                            {post.title}
                                        </td>

                                        <td className="px-4 py-3 text-muted-foreground">
                                            {new Date(post.created_at).toLocaleDateString()}
                                        </td>

                                        <td className="px-4 py-3 flex gap-3">
                                            <Link
                                                href={`/admin/posts/${post.id}`}
                                                className="text-primary hover:underline"
                                            >
                                                Editar
                                            </Link>

                                            <button
                                                onClick={() => deletePost(post.id)}
                                                className="text-red-500 hover:underline"
                                            >
                                                Borrar
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {posts.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-6 text-center text-muted-foreground">
                                            No hay publicaciones todavía.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    )
}
