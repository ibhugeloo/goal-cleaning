import { Star } from "lucide-react";
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
        <section className="py-16 md:py-24 bg-[#002e29]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-[#FFEDA8]/60">Ce qu&apos;ils disent de </span>
                        <span className="text-[#FFEDA8]">nous</span>
                    </h2>
                    <p className="text-[#FFEDA8]/50 text-lg max-w-2xl mx-auto">
                        La satisfaction de nos clients est notre meilleure publicité
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <AnimateInView key={index} delay={index * 200}>
                            <div className="bg-[#003631] border border-[#FFEDA8]/10 p-8 h-full flex flex-col">
                                <div className="flex gap-1 mb-5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-[#FFEDA8] text-[#FFEDA8]" />
                                    ))}
                                </div>
                                <p className="text-[#FFEDA8]/65 italic mb-6 leading-relaxed flex-grow">&quot;{testimonial.content}&quot;</p>
                                <div className="border-t border-[#FFEDA8]/10 pt-5">
                                    <p className="font-bold text-[#FFEDA8] text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-[#FFEDA8]/40 mt-0.5">{testimonial.role}</p>
                                </div>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
