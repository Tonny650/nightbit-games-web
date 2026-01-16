import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import games from "@/data/games.json"

export default function GamesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Navigation />

            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Minimalista */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-kanit tracking-tight mb-4">
                            OUR GAMES
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Immersive worlds. Dark atmospheres. Uncompromising survival.
                        </p>
                    </div>

                    {/* Lista de Juegos - Estilo "Poster Cinemático" */}
                    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                        {games.map((game, index) => (
                            <div
                                key={game.slug ?? index}
                                className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 hover:border-primary/50 transition-all duration-500"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">

                                    {/* Imagen (Ocupa 3/5 del espacio en escritorio) */}
                                    <div className="lg:col-span-3 h-64 lg:h-auto relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-zinc-900 lg:to-zinc-900/50 z-10" />
                                        <img
                                            src={game.image}
                                            alt={game.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Info (Ocupa 2/5 del espacio) */}
                                    <div className="lg:col-span-2 p-8 flex flex-col justify-center relative z-20">
                                        <h2 className="text-3xl font-bold mb-3 font-kanit text-white">
                                            {game.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {game.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded">
                                {tag.toUpperCase()}
                            </span>
                                            ))}
                                        </div>

                                        <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                                            {game.description}
                                        </p>

                                        <Button asChild variant="outline" className="w-fit border-white/20 text-white hover:bg-white hover:text-black">
                                            <Link href={`/games/${game.slug}`}>
                                                Explore Game <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

