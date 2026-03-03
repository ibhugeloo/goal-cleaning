import { AnimateInView } from "@/components/ui/animate-in-view";

export function Process() {
    const steps = [
        {
            number: "01",
            title: "Contactez-nous",
            description: "Sélectionnez la formule adaptée à vos besoins et choisissez le créneau qui vous convient",
        },
        {
            number: "02",
            title: "Nous Lavons",
            description: "Nos experts prennent soin de votre véhicule avec des produits et techniques de pointe",
        },
        {
            number: "03",
            title: "Vous Profitez",
            description: "Récupérez votre voiture comme neuve et profitez de la route en toute sérénité",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#F5F0E1]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-[#003631]/60">Comment ça </span>
                        <span className="bg-[#003631] text-[#F5F0E1] px-2">marche</span>
                        <span className="text-[#003631]/60"> ?</span>
                    </h2>
                    <p className="text-[#003631]/50 text-lg max-w-2xl mx-auto">
                        Un processus simple et transparent pour un résultat exceptionnel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {steps.map((step, index) => (
                        <AnimateInView key={index} delay={index * 300}>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="font-display text-8xl font-extrabold text-[#003631]/10 leading-none mb-4 select-none">
                                    {step.number}
                                </div>
                                <div className="w-8 h-px bg-[#003631]/40 mb-5" />
                                <h3 className="font-display text-2xl font-bold tracking-tight mb-3 text-[#003631]">{step.title}</h3>
                                <p className="text-[#003631]/55">{step.description}</p>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
