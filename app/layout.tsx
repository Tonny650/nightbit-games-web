import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Kanit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const kanit = Kanit({ subsets: ["latin"], weight: ["600"], variable: "--font-kanit",});

export const metadata: Metadata = {
    title: "NightBit Games - Independent Game Developer",
    description: "Portfolio and development blog for NightBit Games. Creating immersive 3D games with Godot C#.",
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }
        ],

        apple: "/apple-touch-icon.png",
    },
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`font-sans antialiased ${kanit.variable}`}>
        {children}
        <Analytics />
        </body>
        </html>
    )
}