"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
    const pathname = usePathname()

    const links = [
        { href: "/", label: "Home" },
        { href: "/games", label: "Games" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
    ]

    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <img src="/logo-light.svg" className="h-7 w-7" />
                        <span className="text-foreground font-kanit">NightBit Games</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-foreground" : "text-muted-foreground",
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}