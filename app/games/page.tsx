import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import games from "@/data/games.json"

export default function GamesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Games Portfolio</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A collection of my game development projects, all built with Godot Engine and C#. From action-packed
                            adventures to mind-bending puzzles, each project represents a unique exploration of game mechanics and
                            storytelling.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {games.map((game, index) => (
                            <Link
                                key={game.slug ?? index}
                                href={`/games/${game.slug}`}
                                className="block group"
                            >
                                <Card className="bg-card border-border overflow-hidden cursor-pointer group-hover:border-primary transition-colors">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="aspect-video lg:aspect-auto relative overflow-hidden bg-muted">
                                            <img
                                                src={game.image}
                                                alt={game.title}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        <CardContent className="pt-6 lg:py-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {game.title}
                                                </h2>
                                                <Badge variant={game.status === "In Development" ? "default" : "secondary"}>
                                                    {game.status}
                                                </Badge>
                                            </div>

                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {game.description}
                                            </p>

                                            <div className="mb-4">
                                                <h3 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h3>
                                                <ul className="grid grid-cols-2 gap-2">
                                                    {game.features.map((feature, i) => (
                                                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

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
                                        </CardContent>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}


