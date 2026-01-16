"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* LOGO + TEXTO */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* IMAGEN DEL ISOTIPO */}
                            <img
                                src="/logo.png" // Asegúrate de que la extensión sea correcta (.png, .svg, .jpg)
                                alt="NightBit Logo"
                                className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
                            />

                            {/* TEXTO */}
                            <span className="text-xl font-bold font-kanit tracking-wider text-white transition-colors group-hover:text-primary">
                                NightBit <span className="text-primary group-hover:text-white">Games</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/games" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-widest">
                                GAMES
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-widest">
                                STUDIO
                            </Link>
                            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-widest">
                                CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-white/10">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <Link href="/games" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
                            Games
                        </Link>
                        <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
                            Studio
                        </Link>
                        <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}