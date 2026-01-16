import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Navigation />

            <main className="flex-1 flex items-center justify-center py-20">
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">

                    <h1 className="text-5xl md:text-7xl font-bold font-kanit mb-8 tracking-tighter">
                        THE STUDIO
                    </h1>

                    <div className="prose prose-invert prose-lg mx-auto leading-relaxed text-gray-300">
                        <p className="mb-8 text-xl md:text-2xl font-light text-white">
                            We build worlds that don't want you to survive.
                        </p>

                        <p className="mb-6">
                            <strong>NightBit Games</strong> is an independent development studio focused on creating
                            immersive 3D experiences. We believe in atmosphere over exposition,
                            mechanics over menus, and the thrill of the unknown.
                        </p>

                        <p>
                            Founded with a passion for hardcore survival and sci-fi horror,
                            our mission is to push the boundaries of what indie games can achieve visually
                            and technically using the Godot Engine.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
                        <div>
                            <h3 className="text-primary font-bold mb-2 tracking-widest text-sm uppercase">Focus</h3>
                            <p className="text-sm text-gray-500">Atmospheric Survival</p>
                        </div>
                        <div>
                            <h3 className="text-primary font-bold mb-2 tracking-widest text-sm uppercase">Engine</h3>
                            <p className="text-sm text-gray-500">Godot 4 / C#</p>
                        </div>
                        <div>
                            <h3 className="text-primary font-bold mb-2 tracking-widest text-sm uppercase">Location</h3>
                            <p className="text-sm text-gray-500">México</p>
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}