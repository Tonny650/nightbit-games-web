import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import games from "@/data/games.json"
import { notFound } from "next/navigation"
import Link from "next/link"

// Esto genera las rutas estáticas para GitHub Pages al hacer el build
export async function generateStaticParams() {
    return games.map((game) => ({
        slug: game.slug,
    }))
}

export default async function GameDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    // 1. Esperar a los params (Next.js 15+)
    const { slug } = await params

    // 2. Buscar el juego en el JSON
    const game = games.find((g) => g.slug === slug)

    // 3. Si no existe, mostrar 404
    if (!game) return notFound()

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Navigation />

            <main className="flex-1">
                {/* HERO SECTION GIGANTE */}
                <div className="relative h-[80vh] w-full">
                    {/* Imagen de fondo con gradiente */}
                    <div className="absolute inset-0">
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>

                    {/* Contenido sobre la imagen */}
                    <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
                        <div className="max-w-3xl">
                            {/* Tags y Status */}
                            <div className="flex items-center gap-3 mb-6">
                                <Badge variant="secondary" className="bg-primary text-black font-bold uppercase tracking-widest rounded-sm px-3 py-1">
                                    {game.status}
                                </Badge>
                                {game.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono text-gray-300 border border-white/20 px-2 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold font-kanit mb-6 text-white leading-none drop-shadow-xl">
                                {game.title.toUpperCase()}
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-md mb-8">
                                {game.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* INFO SECTION */}
                <section className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Columna Izquierda: Características */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold font-kanit mb-8 text-primary">KEY FEATURES</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {game.features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-zinc-900/30 hover:border-primary/30 transition-colors">
                                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                                        <p className="text-gray-300 leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Columna Derecha: Detalles Extra o Botones */}
                        <div className="lg:col-span-1">
                            <div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50 sticky top-24">
                                <h3 className="text-xl font-bold mb-6 text-white">Project Info</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-gray-500">Platform</span>
                                        <span className="text-white">PC (Windows / Linux)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-gray-500">Engine</span>
                                        <span className="text-white">Godot 4</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-gray-500">Release</span>
                                        <span className="text-white">TBA</span>
                                    </div>
                                </div>

                                <Button asChild className="w-full mb-4 py-6 text-lg font-bold" size="lg">
                                    <Link href="/contact">
                                        Contact regarding this game
                                    </Link>
                                </Button>

                                <Button asChild variant="ghost" className="w-full text-gray-400 hover:text-white hover:bg-white/10">
                                    <Link href="/games">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Games
                                    </Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}