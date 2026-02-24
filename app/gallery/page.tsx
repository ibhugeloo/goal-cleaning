import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Galerie — Nos Réalisations",
  description:
    "Découvrez les réalisations de Goal Cleaning. Photos avant/après de nos prestations de lavage et detailing automobile à Saint-Denis, La Réunion.",
  alternates: {
    canonical: "https://www.goalcleaning.re/gallery",
  },
};
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
    // Simulating a larger gallery with repeated images for now
    const galleryImages = [
        "/images/gallery/gallery-1.jpg",
        "/images/gallery/gallery-2.jpg",
        "/images/gallery/gallery-3.jpg",
        "/images/gallery/gallery-4.jpg",
        "/images/gallery/gallery-5.jpg",
        "/images/gallery/gallery-6.jpg",
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 px-4 text-center">
                <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 text-foreground">
                    Notre <span className="text-primary">Galerie</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Explorez nos réalisations et constatez par vous-même la qualité de nos prestations de detailing
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="pb-20 px-4 container mx-auto">
                <Suspense fallback={<div className="text-center py-20 text-muted-foreground">Chargement…</div>}>
                    <GalleryGrid images={galleryImages} />
                </Suspense>
            </section>

            <Footer />
        </main>
    );
}
