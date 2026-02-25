import { Check } from "lucide-react";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CalButton, CAL_COMPLET, CAL_INTERIEUR, CAL_EXTERIEUR } from "@/components/ui/cal-button";

export function Pricing() {
    const plans = [
        {
            name: "Intérieur",
            price: "À partir de 50€",
            description: "Pour un habitacle sain et propre",
            calLink: CAL_INTERIEUR,
            features: [
                "Aspiration complète",
                "Nettoyage des plastiques",
                "Nettoyage des vitres",
                "Dépoussiérage",
                "Parfum habitacle",
            ],
        },
        {
            name: "Complet",
            price: "À partir de 90€",
            description: "Le meilleur rapport qualité/prix",
            calLink: CAL_COMPLET,
            features: [
                "Tout le pack Intérieur",
                "Lavage extérieur manuel",
                "Nettoyage des jantes",
                "Brillant pneus",
                "Cire de protection rapide",
            ],
            popular: true,
        },
        {
            name: "Extérieur",
            price: "À partir de 40€",
            description: "Redonnez de l'éclat à votre carrosserie",
            calLink: CAL_EXTERIEUR,
            features: [
                "Lavage manuel",
                "Nettoyage des jantes",
                "Nettoyage des vitres ext.",
                "Séchage microfibre",
                "Brillant pneus",
            ],
        },
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-[#003631]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-[#FFEDA8]/60">Nos </span>
                        <span className="text-[#FFEDA8]">Offres</span>
                    </h2>
                    <p className="text-[#FFEDA8]/50 text-lg max-w-2xl mx-auto">
                        Des formules adaptées à vos besoins et à votre budget
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <AnimateInView key={index} delay={index * 200} className="flex">
                            {plan.popular ? (
                                /* ── Popular card: inverted (butter yellow bg) ── */
                                <div className="relative flex flex-col w-full bg-[#FFEDA8] p-8 scale-105 z-10 shadow-2xl shadow-black/30">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#003631] text-[#FFEDA8] px-4 py-1 text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                                        Recommandé
                                    </div>
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-[#003631] font-display">{plan.name}</h3>
                                        <div className="text-3xl font-extrabold text-[#003631] mt-2 font-display">{plan.price}</div>
                                        <p className="text-[#003631]/60 mt-1 text-sm">{plan.description}</p>
                                    </div>
                                    <ul className="space-y-3 flex-grow mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-[#003631]/80">
                                                <Check className="h-4 w-4 mr-2.5 flex-shrink-0 text-[#003631]" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <CalButton
                                        calLink={plan.calLink}
                                        className="w-full h-12 bg-[#003631] text-[#FFEDA8] hover:bg-[#002e29] font-bold text-sm tracking-[0.1em] uppercase rounded-none transition-colors duration-150"
                                    >
                                        Choisir cette formule
                                    </CalButton>
                                </div>
                            ) : (
                                /* ── Standard card ── */
                                <div className="flex flex-col w-full bg-[#002e29] border border-[#FFEDA8]/12 hover:border-[#FFEDA8]/25 transition-colors duration-300 p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-[#FFEDA8] font-display">{plan.name}</h3>
                                        <div className="text-3xl font-extrabold text-[#FFEDA8] mt-2 font-display">{plan.price}</div>
                                        <p className="text-[#FFEDA8]/45 mt-1 text-sm">{plan.description}</p>
                                    </div>
                                    <ul className="space-y-3 flex-grow mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-[#FFEDA8]/65">
                                                <Check className="h-4 w-4 mr-2.5 flex-shrink-0 text-[#FFEDA8]" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <CalButton
                                        calLink={plan.calLink}
                                        className="w-full h-12 bg-[#FFEDA8] text-[#003631] hover:bg-[#fff5c2] font-bold text-sm tracking-[0.1em] uppercase rounded-none transition-colors duration-150"
                                    >
                                        Choisir cette formule
                                    </CalButton>
                                </div>
                            )}
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
