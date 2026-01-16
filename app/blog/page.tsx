import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import blogPosts from "@/data/blog.json"

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                            Development Blog
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Insights, tutorials, and thoughts on game development with Godot C#.
                            Follow along as I share my experiences building games and exploring new techniques.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {blogPosts.map((post, index) => (
                            <Link key={post.slug ?? index} href={`/blog/${post.slug}`}>
                                <Card className="bg-card border-border hover:border-primary transition-colors cursor-pointer group">
                                    <CardContent className="pt-6">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                          {post.date}
                      </span>
                                            <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                                                {post.author}
                      </span>
                                        </div>

                                        <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                    </CardContent>
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