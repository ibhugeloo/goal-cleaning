import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display text-4xl font-extrabold mb-8 text-primary">Mentions Légales</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Éditeur du site</h2>
                    <p className="text-muted-foreground mb-2">
                        Le site Goal Cleaning est édité par [Nom de la Société / Entrepreneur], immatriculée au Registre du Commerce et des Sociétés sous le numéro [Numéro SIRET].
                    </p>
                    <p className="text-muted-foreground">
                        <strong>Siège social :</strong> [Adresse Complète]<br />
                        <strong>Email :</strong> [Email de contact]<br />
                        <strong>Téléphone :</strong> [Numéro de téléphone]
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Directeur de la publication</h2>
                    <p className="text-muted-foreground">
                        Le directeur de la publication est [Nom du Directeur].
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Hébergement</h2>
                    <p className="text-muted-foreground">
                        Le site est hébergé par [Nom de l&apos;hébergeur], dont le siège social est situé [Adresse de l&apos;hébergeur].
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Propriété intellectuelle</h2>
                    <p className="text-muted-foreground">
                        L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
