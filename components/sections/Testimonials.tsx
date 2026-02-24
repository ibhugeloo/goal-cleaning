import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function Testimonials() {
    const testimonials = [
        {
            name: "Thomas D.",
            role: "Propriétaire Tesla Model 3",
            content: "Service impeccable. Ma voiture est plus propre qu'à la sortie de concession. L'équipe est ponctuelle et très professionnelle",
            rating: 5,
        },
        {
            name: "Sophie M.",
            role: "Cliente Régulière",
            content: "Quel plaisir de retrouver sa voiture comme neuve. Je recommande vivement Goal Cleaning !",
            rating: 5,
        },
        {
            name: "Karim B.",
            role: "Passionné Auto",
            content: "Le souci du détail est impressionnant. Ils ont réussi à ravoir des tâches que je pensais indélébiles. Bravo",
            rating: 5,
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                        Ce qu&apos;ils disent de <span className="text-primary">nous</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        La satisfaction de nos clients est notre meilleure publicité
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimateInView key={index} delay={index * 200}>
                            <Card className="bg-card border border-border h-full">
                                <CardHeader>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 italic mb-6">&quot;{testimonial.content}&quot;</p>
                                    <div>
                                        <p className="font-bold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
