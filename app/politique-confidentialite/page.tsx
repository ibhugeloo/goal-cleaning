import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PolitiqueConfidentialite() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display text-4xl font-extrabold mb-8 text-primary">Politique de Confidentialité</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Collecte des données</h2>
                    <p className="text-muted-foreground mb-4">
                        Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez notre formulaire de contact ou de réservation (nom, email, téléphone, informations sur le véhicule).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Utilisation des données</h2>
                    <p className="text-muted-foreground mb-4">
                        Vos données sont utilisées uniquement pour :
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4">
                        <li>Gérer vos rendez-vous et commandes.</li>
                        <li>Répondre à vos demandes de contact.</li>
                        <li>Vous envoyer des informations sur nos services (si vous l&apos;avez accepté).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Protection des données</h2>
                    <p className="text-muted-foreground mb-4">
                        Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles. Vos données ne sont jamais vendues à des tiers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Vos droits</h2>
                    <p className="text-muted-foreground mb-4">
                        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à [Email de contact].
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies</h2>
                    <p className="text-muted-foreground mb-4">
                        Ce site peut utiliser des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
