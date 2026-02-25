export function SocialProof() {
    const clients = [
        "Mercedes-Benz",
        "BMW",
        "Audi",
        "Porsche",
        "Tesla",
    ];

    return (
        <section className="py-10 bg-[#002e29]">
            <div className="container mx-auto px-4">
                <p className="text-center text-[#FFEDA8]/40 text-sm mb-6 uppercase tracking-widest">
                    Ils nous font confiance
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {clients.map((client) => (
                        <span
                            key={client}
                            className="text-xl md:text-2xl font-bold text-[#FFEDA8]/30 hover:text-[#FFEDA8] transition-colors duration-300 cursor-default tracking-wide"
                        >
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
