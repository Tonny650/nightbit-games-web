import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navigation />

            {/* Hero Section - Endnight Style / Cinematic */}
            <main className="flex-1 flex flex-col relative">

                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 z-10" />
                    <img
                        src="/Isotipo_Legacy_of_the_first_sun.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                {/* CENTERED CONTENT */}
                <div className="relative z-20 container mx-auto px-4 flex-1 flex flex-col justify-center items-center text-center py-20">

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
                        LEGACY OF THE<br />
                        <span className="text-primary">FIRST SUN</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 drop-shadow-md leading-relaxed">
                        Survive on Nyx-65. A mutated ecosystem beneath a collapsing dome.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full">
                            <Link href="/games/legacy-of-the-first-sun">
                                Explore the Game
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full bg-black/50 border-white/20 text-white hover:bg-white hover:text-black transition-all">
                            <Link href="/games">
                                View All Games
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}