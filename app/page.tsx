import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Gamepad2, Sparkles } from "lucide-react"

import games from "@/data/games.json"
import blogPosts from "@/data/blog.json"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            <span>Independent Game Developer</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-foreground">
                            Crafting Immersive 3D Game Experiences
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance max-w-2xl mx-auto">
                            Welcome to NightBit Games. I create engaging 3D games using Godot C#, blending creative storytelling with
                            technical innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="text-base">
                                <Link href="/games">
                                    View Games
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                                <Link href="/blog">Read Dev Blog</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Gamepad2 className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">3D Game Development</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Specializing in immersive 3D experiences built with Godot Engine and C#.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Code className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Godot C# Expertise</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Leveraging the power of C# scripting for robust and performant game logic.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Creative Innovation</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pushing boundaries with unique gameplay mechanics and engaging narratives.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Featured Games Preview */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Games</h2>
                        <p className="text-muted-foreground text-lg">Explore my latest projects</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {games.slice(0, 2).map((game) => (
                            <Link key={game.slug} href={`/games/${game.slug}`}>
                                <Card className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                                    <div className="aspect-video bg-muted relative overflow-hidden">
                                        <img
                                            src={game.image}
                                            alt={game.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <CardContent className="pt-6">
                                        <h3 className="text-xl font-bold mb-2 text-foreground">{game.title}</h3>

                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {game.description.substring(0, 120)}...
                                        </p>

                                        <div className="flex gap-2">
                                            {game.tags.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button asChild variant="outline">
                            <Link href="/games">View All Games</Link>
                        </Button>
                    </div>
                </section>

                {/* Latest Blog Posts */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Latest from the Blog</h2>
                        <p className="text-muted-foreground text-lg">Development insights and tutorials</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {blogPosts.slice(0, 3).map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="bg-card border-border hover:border-primary transition-colors cursor-pointer">
                                    <CardContent className="pt-6">
                                        <p className="text-sm text-muted-foreground mb-2">{post.date}</p>

                                        <h3 className="text-lg font-bold mb-2 text-foreground">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>

                                        <span className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button asChild variant="outline">
                            <Link href="/blog">View All Posts</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
