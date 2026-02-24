import { Clock, ShieldCheck, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function Benefits() {
    const benefits = [
        {
            icon: <Home className="h-10 w-10 text-primary mb-4" />,
            title: "Matériel Professionnel",
            description: "Produits et équipements haut de gamme sélectionnés pour un résultat digne des meilleurs ateliers",
        },
        {
            icon: <Clock className="h-10 w-10 text-primary mb-4" />,
            title: "Gain de Temps",
            description: "Profitez de votre temps libre pendant que nous redonnons à votre véhicule son éclat d'origine",
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
            title: "Qualité Premium",
            description: "Utilisation de produits professionnels et techniques de detailing avancées pour un résultat impeccable",
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                        Pourquoi choisir <span className="text-primary">Goal Cleaning</span> ?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Nous transformons l&apos;entretien de votre véhicule en une expérience simple et luxueuse
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <AnimateInView key={index} delay={index * 200}>
                            <Card className="bg-card border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-300 h-full">
                                <CardHeader className="flex flex-col items-center text-center pb-2">
                                    {benefit.icon}
                                    <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center text-muted-foreground">
                                    {benefit.description}
                                </CardContent>
                            </Card>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
