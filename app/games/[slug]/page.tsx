import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import games from "@/data/games.json"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    return games.map((game) => ({
        slug: game.slug,
    }))
}

export default async function GameDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    // 👇 Desempaquetar params porque ahora es una Promesa
    const { slug } = await params

    const game = games.find((g) => g.slug === slug)

    if (!game) return notFound()

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        {game.title}
                    </h1>

                    <Badge variant={game.status === "In Development" ? "default" : "secondary"}>
                        {game.status}
                    </Badge>

                    <div className="aspect-video rounded-lg overflow-hidden bg-muted my-6">
                        <img
                            src={game.image}
                            alt={game.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {game.description}
                    </p>

                    <h2 className="text-2xl font-bold mb-3 text-foreground">Key Features</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-12">
                        {game.features.map((feature, i) => (
                            <li key={i} className="text-muted-foreground flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold mb-3 text-foreground">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        {game.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
