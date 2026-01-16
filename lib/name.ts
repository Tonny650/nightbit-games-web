export function shortName(fullName: string): string {
    if (!fullName) return ""

    const parts = fullName.trim().split(" ")

    if (parts.length === 1) return parts[0] // solo un nombre

    return `${parts[0]} ${parts[1]}` // nombre + primer apellido
}



export function firstName(fullName: string): string {
    if (!fullName) return ""
    return fullName.trim().split(" ")[0]
}
