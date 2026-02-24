import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function Gallery() {
    // Using placeholder images or reusing the hero assets for now
    const images = [
        "/images/gallery/gallery-1.jpg",
        "/images/gallery/gallery-2.jpg",
        "/images/gallery/gallery-3.jpg",
        "/images/gallery/gallery-4.jpg",
        "/images/gallery/gallery-5.jpg",
        "/images/gallery/gallery-6.jpg",
    ];

    return (
        <section id="gallery" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                        Notre <span className="text-primary">Galerie</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Découvrez nos réalisations et la qualité de notre travail
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <AnimateInView key={index} delay={index * 150}>
                            <Link href={`/gallery?img=${index}`}>
                                <div className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer">
                                    <Image
                                        src={src}
                                        alt={`Réalisation Goal Cleaning ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={index === 0}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">Voir en grand</span>
                                    </div>
                                </div>
                            </Link>
                        </AnimateInView>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/gallery">
                        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                            Voir toute la galerie
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
