import Link from "next/link"
import { Github, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border bg-card mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-foreground font-kanit">NightBit Games</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Independent game developer crafting immersive 3D experiences with Godot C#.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/games" className="text-muted-foreground hover:text-primary transition-colors">
                                    Games Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                                    Development Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-foreground">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/NightBitGames" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://x.com/NightBitGames" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://www.youtube.com/@NightBitGames" className="text-muted-foreground hover:text-primary transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </a>
                            <a
                                href="mailto:afigueroav35@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} NightBit Games. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
