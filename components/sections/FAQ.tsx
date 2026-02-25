import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function FAQ() {
    const faqs = [
        {
            question: "Où êtes-vous situés ?",
            answer: "Notre centre est situé au cœur de la ville, facile d'accès avec un parking sécurisé.",
        },
        {
            question: "Puis-je attendre sur place ?",
            answer: "Oui, nous disposons d'un espace d'attente confortable avec Wi-Fi et café offert.",
        },
        {
            question: "Combien de temps dure un lavage ?",
            answer: "Cela dépend de la formule choisie et de l'état du véhicule. Comptez entre 1h pour un lavage extérieur et 3h pour un complet.",
        },
        {
            question: "Quels moyens de paiement acceptez-vous ?",
            answer: "Nous acceptons les cartes bancaires, les espèces et les virements instantanés.",
        },
    ];

    return (
        <section id="faq" className="py-16 md:py-24 bg-[#003631]">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-[#FFEDA8]/60">Questions </span>
                        <span className="text-[#FFEDA8]">Fréquentes</span>
                    </h2>
                    <p className="text-[#FFEDA8]/50 text-lg">
                        Tout ce que vous devez savoir sur nos services.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AnimateInView key={index} delay={index * 100}>
                            <AccordionItem value={`item-${index}`} className="border-[#FFEDA8]/15">
                                <AccordionTrigger className="text-base font-medium text-[#FFEDA8]/80 hover:text-[#FFEDA8] transition-colors [&>svg]:text-[#FFEDA8]/50">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#FFEDA8]/55 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimateInView>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
