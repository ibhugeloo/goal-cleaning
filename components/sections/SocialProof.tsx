export function SocialProof() {
    // Placeholder logos or names
    const clients = [
        "Mercedes-Benz",
        "BMW",
        "Audi",
        "Porsche",
        "Tesla",
    ];

    return (
        <section className="py-10 bg-background">
            <div className="container mx-auto px-4">
                <p className="text-center text-muted-foreground text-sm mb-6 uppercase tracking-widest">
                    Ils nous font confiance
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client) => (
                        <span key={client} className="text-xl md:text-2xl font-bold text-foreground/50 hover:text-primary transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
