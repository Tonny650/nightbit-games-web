import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Github, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Navigation />

            <main className="flex-1 flex flex-col items-center justify-center py-20">
                <div className="container max-w-xl px-4 text-center">

                    <h1 className="text-4xl md:text-5xl font-bold font-kanit mb-6">
                        GET IN TOUCH
                    </h1>

                    <p className="text-gray-400 mb-10 text-lg">
                        Have a question about <em>Legacy of the First Sun</em>, press inquiries,
                        or just want to say hello?
                    </p>

                    <div className="p-8 border border-white/10 rounded-2xl bg-zinc-900/30 backdrop-blur-sm">
                        <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Email Us</h2>
                        <a
                            href="mailto:contact@nightbitgames.com"
                            className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors break-all"
                        >
                            contact@nightbitgames.com
                        </a>
                    </div>

                    <div className="mt-12">
                        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Follow Updates</p>
                        <div className="flex justify-center gap-6">
                            <a href="https://x.com/NightBitGames" className="p-3 rounded-full bg-zinc-900 hover:bg-white hover:text-black transition-all">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/NightBitGames" className="p-3 rounded-full bg-zinc-900 hover:bg-white hover:text-black transition-all">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.youtube.com/@NightBitGames" className="p-3 rounded-full bg-zinc-900 hover:bg-white hover:text-black transition-all">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
