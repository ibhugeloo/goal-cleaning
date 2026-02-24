import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CGV() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display text-4xl font-extrabold mb-8 text-primary">Conditions Générales de Vente (CGV)</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Objet</h2>
                    <p className="text-muted-foreground mb-4">
                        Les présentes conditions régissent les ventes de prestations de services de nettoyage et detailing automobile par Goal Cleaning.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Prix</h2>
                    <p className="text-muted-foreground mb-4">
                        Les prix de nos services sont indiqués en euros toutes taxes comprises (TTC). Goal Cleaning se réserve le droit de modifier ses prix à tout moment, mais le service sera facturé sur la base du tarif en vigueur au moment de la validation de la commande.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Réservation et Paiement</h2>
                    <p className="text-muted-foreground mb-4">
                        La réservation peut s&apos;effectuer en ligne ou par téléphone. Le paiement s&apos;effectue sur place une fois la prestation réalisée, par carte bancaire, espèces ou virement instantané.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Annulation</h2>
                    <p className="text-muted-foreground mb-4">
                        Toute annulation doit être effectuée au moins 24 heures avant l&apos;heure du rendez-vous. En cas d&apos;annulation tardive ou de non-présentation, Goal Cleaning se réserve le droit de facturer des frais.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Responsabilité</h2>
                    <p className="text-muted-foreground mb-4">
                        Goal Cleaning s&apos;engage à fournir ses services avec soin et diligence. Toutefois, notre responsabilité ne saurait être engagée pour des dommages préexistants sur le véhicule ou pour la perte d&apos;objets laissés à l&apos;intérieur.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
