import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Contactez Goal Cleaning à Saint-Denis, La Réunion. Demande de devis, renseignements sur nos prestations de lavage et detailing automobile.",
  alternates: {
    canonical: "https://www.goalcleaning.re/contact",
  },
};
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="relative py-24 flex items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4">
                    <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
                        Contactez-nous
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-20 pt-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Column: Form */}
                        <div>
                            <div className="mb-8">
                                <p className="text-lg text-muted-foreground mb-4">
                                    Contactez-nous pour tout ce qui concerne notre entreprise ou nos services
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Pour toutes demande de prestations, merci de réserver <span className="text-primary cursor-pointer hover:underline">ici</span></li>
                                    <li>Nous ferons de notre mieux pour vous répondre dans les plus brefs délais</li>
                                </ul>
                            </div>

                            <ContactForm />
                        </div>

                        {/* Right Column: Info */}
                        <div className="lg:pl-12">
                            <h3 className="text-2xl font-bold mb-8 text-foreground">Goal Cleaning</h3>

                            <div className="space-y-6 text-muted-foreground">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <p>
                                        Centre Ville<br />
                                        Saint-Denis, La Réunion
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <p>+262 692 00 00 00</p>
                                        <p>+262 693 00 00 00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <p>contact@goalcleaning.re</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
