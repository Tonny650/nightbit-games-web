import Link from "next/link"
import { Github, Twitter, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black text-gray-400 py-12 relative z-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left - BRANDING */}
                <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                    {/* Isotipo en el footer */}
                    <img
                        src="/logo.png"
                        alt="NightBit Logo"
                        className="h-10 w-auto opacity-80 grayscale hover:grayscale-0 transition-all"
                    />

                    <div>
                        <h3 className="font-bold text-lg text-white font-kanit mb-1">NightBit Games</h3>
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} NightBit Games. <br className="hidden md:block"/>Indie Development.
                        </p>
                    </div>
                </div>

                {/* Center - Links */}
                <div className="flex gap-6 text-sm font-medium">
                    <Link href="/games" className="hover:text-primary transition-colors">Games</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">Studio</Link>
                    <Link href="mailto:contact@nightbitgames.com" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Right - Icons */}
                <div className="flex gap-4">
                    <a href="https://github.com/NightBitGames" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                    <a href="https://x.com/NightBitGames" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                    <a href="https://www.youtube.com/@NightBitGames" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
                </div>
            </div>
        </footer>
    )
}