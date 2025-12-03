import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import blogPosts from "@/data/blog.json"
import { notFound } from "next/navigation"
import { Calendar, Clock } from "lucide-react"

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params  // <<— IMPORTANTE en Next 16

    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) return notFound()

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
                {post.date}
            </span>
                        <span className="flex items-center gap-1">
              <p className="text-sm text-muted-foreground">{post.author}</p>
            </span>
                    </div>

                    <div className="prose prose-invert max-w-none mb-12">
                        {post.content.map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8">
                        {post.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}