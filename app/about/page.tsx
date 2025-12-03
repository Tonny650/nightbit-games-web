import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Gamepad2, Lightbulb, Mail } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About NightBit Games</h1>

                        <div className="prose prose-lg max-w-none mb-12">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                Welcome! I'm an independent game developer passionate about creating immersive 3D gaming experiences.
                                NightBit Games is my creative outlet where I explore innovative gameplay mechanics, atmospheric
                                storytelling, and technical challenges in game development.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                I specialize in 3D game development using <strong className="text-foreground">Godot Engine</strong> and{" "}
                                <strong className="text-foreground">C#</strong>. This powerful combination allows me to create
                                performant, scalable games while maintaining the flexibility and creative freedom that indie development
                                offers.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Through this website, I share my journey, showcase my projects, and provide insights into the game
                                development process. Whether you're a fellow developer, a gaming enthusiast, or just curious about indie
                                game development, I hope you find something interesting here.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <Card className="bg-card border-border">
                                <CardContent className="pt-6 text-center">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Gamepad2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-foreground">Game Design</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Crafting engaging gameplay experiences with unique mechanics
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-border">
                                <CardContent className="pt-6 text-center">
                                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                        <Code2 className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-foreground">Technical Development</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Building robust systems with C# and Godot Engine
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-card border-border">
                                <CardContent className="pt-6 text-center">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Lightbulb className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-foreground">Creative Innovation</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Pushing boundaries with experimental concepts and ideas
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">Technical Stack</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-semibold mb-2 text-foreground">Game Engine</h3>
                                        <ul className="space-y-1 text-muted-foreground">
                                            <li>• Godot Engine 4.x</li>
                                            <li>• C# / .NET</li>
                                            <li>• GDScript (when needed)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-foreground">Tools & Software</h3>
                                        <ul className="space-y-1 text-muted-foreground">
                                            <li>• Blender (3D Modeling)</li>
                                            <li>• GIMP / Krita (Textures)</li>
                                            <li>• Audacity (Audio)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-foreground">Development</h3>
                                        <ul className="space-y-1 text-muted-foreground">
                                            <li>• Visual Studio / Rider</li>
                                            <li>• Git Version Control</li>
                                            <li>• Agile Methodology</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-foreground">Focus Areas</h3>
                                        <ul className="space-y-1 text-muted-foreground">
                                            <li>• 3D Graphics & Rendering</li>
                                            <li>• Physics & Collision</li>
                                            <li>• AI & Pathfinding</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="mt-12 text-center">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Get in Touch</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Interested in collaborating or have questions about my work? I'd love to hear from you!
                            </p>
                            <Button size="lg" asChild>
                                <a href="mailto:contact@nightbitgames.com">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Contact Me
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}