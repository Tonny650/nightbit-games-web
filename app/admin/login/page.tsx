"use client"

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export default function AdminLogin() {
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080"

    function loginWithGoogle() {
        window.location.href = `${BACKEND_URL}/auth/google/login`
    }

    function loginWithGithub() {
        window.location.href = `${BACKEND_URL}/auth/github/login`
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md border-border">
                <CardHeader>
                    <h2 className="text-2xl font-bold text-center font-kanit">
                        NightBit Admin
                    </h2>
                    <p className="text-sm text-muted-foreground text-center">
                        Panel privado · Orion CMS
                    </p>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Button
                        onClick={loginWithGoogle}
                        className="w-full flex items-center gap-2"
                    >
                        <Mail className="h-5 w-5" />
                        Continuar con Google
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={loginWithGithub}
                        className="w-full flex items-center gap-2"
                    >
                        <Github className="h-5 w-5" />
                        Continuar con GitHub
                    </Button>
                </CardContent>

                <CardFooter>
                    <p className="text-center text-xs text-muted-foreground w-full">
                        Orion CMS · NightBit Games
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
