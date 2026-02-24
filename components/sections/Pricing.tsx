import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
        <section id="services" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                        Nos <span className="text-primary">Offres</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Des formules adaptées à vos besoins et à votre budget
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <AnimateInView key={index} delay={index * 200} className="flex">
                            <Card
                                className={`relative flex flex-col w-full ${plan.popular
                                    ? 'bg-primary border-primary scale-105 z-10 shadow-lg'
                                    : 'bg-card border-border'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold">
                                        Recommandé
                                    </div>
                                )}
                                <CardHeader className="text-center">
                                    <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                                        {plan.name}
                                    </CardTitle>
                                    <div className={`text-3xl font-bold mt-2 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                                        {plan.price}
                                    </div>
                                    <CardDescription className={`mt-2 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-center ${plan.popular ? 'text-white/90' : 'text-foreground/80'}`}>
                                                <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    {plan.popular ? (
                                        <CalButton calLink={plan.calLink} className="w-full bg-white text-primary hover:bg-gray-100">
                                            Choisir cette formule
                                        </CalButton>
                                    ) : (
                                        <CalButton calLink={plan.calLink} className="w-full bg-primary text-white hover:bg-[#004D30]">
                                            Choisir cette formule
                                        </CalButton>
                                    )}
                                </CardFooter>
                            </Card>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
