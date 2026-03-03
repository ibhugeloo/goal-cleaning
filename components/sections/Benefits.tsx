import { Clock, ShieldCheck, Home } from "lucide-react";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function Benefits() {
    const benefits = [
        {
            icon: <Home className="h-9 w-9 text-[#003631] mb-5" />,
            title: "Matériel Professionnel",
            description: "Produits et équipements haut de gamme sélectionnés pour un résultat digne des meilleurs ateliers",
        },
        {
            icon: <Clock className="h-9 w-9 text-[#003631] mb-5" />,
            title: "Gain de Temps",
            description: "Profitez de votre temps libre pendant que nous redonnons à votre véhicule son éclat d'origine",
        },
        {
            icon: <ShieldCheck className="h-9 w-9 text-[#003631] mb-5" />,
            title: "Qualité Premium",
            description: "Utilisation de produits professionnels et techniques de detailing avancées pour un résultat impeccable",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#EBE6D6]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-[#003631]/60">Pourquoi choisir </span>
                        <span className="text-[#003631]">Goal Cleaning</span>
                        <span className="text-[#003631]/60"> ?</span>
                    </h2>
                    <p className="text-[#003631]/50 text-lg max-w-2xl mx-auto">
                        Nous transformons l&apos;entretien de votre véhicule en une expérience simple et luxueuse
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <AnimateInView key={index} delay={index * 200}>
                            <div className="flex flex-col items-center text-center p-8 bg-[#FDFAF2] border border-[#003631]/10 hover:border-[#003631]/30 transition-colors duration-300 h-full">
                                {benefit.icon}
                                <h3 className="text-lg font-bold text-[#003631] mb-3 font-display tracking-tight">{benefit.title}</h3>
                                <p className="text-[#003631]/55 leading-relaxed">{benefit.description}</p>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
