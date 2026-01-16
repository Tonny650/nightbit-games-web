export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <section className="container mx-auto px-4 py-10">
            {children}
        </section>
    )
}
