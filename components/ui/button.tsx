"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outline" | "ghost" | "secondary" | "destructive"
type ButtonSize = "default" | "sm" | "lg" | "icon"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    asChild?: boolean
}

// Si quisieras soporte real de asChild tipo shadcn, podemos
// luego meter @radix-ui/react-slot. De momento lo ignoramos
// pero lo extraemos para que no llegue al DOM.

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
        const baseClasses =
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium " +
            "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
            "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background"

        const variantClasses: Record<ButtonVariant, string> = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        }

        const sizeClasses: Record<ButtonSize, string> = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        return (
            <button
                ref={ref}
                className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
                {...props}
            />
        )
    },
)

Button.displayName = "Button"
