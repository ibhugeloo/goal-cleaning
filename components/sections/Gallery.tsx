import Image from "next/image";
import Link from "next/link";
import { AnimateInView } from "@/components/ui/animate-in-view";

export function Gallery() {
    const images = [
        "/images/gallery/gallery-1.jpg",
        "/images/gallery/gallery-2.jpg",
        "/images/gallery/gallery-3.jpg",
        "/images/gallery/gallery-4.jpg",
        "/images/gallery/gallery-5.jpg",
        "/images/gallery/gallery-6.jpg",
    ];

    return (
        <section id="gallery" className="py-16 md:py-24 bg-[#002e29]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="text-[#FFEDA8]/60">Notre </span>
                        <span className="text-[#FFEDA8]">Galerie</span>
                    </h2>
                    <p className="text-[#FFEDA8]/50 text-lg max-w-2xl mx-auto">
                        Découvrez nos réalisations et la qualité de notre travail
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {images.map((src, index) => (
                        <AnimateInView key={index} delay={index * 150}>
                            <Link href={`/gallery?img=${index}`}>
                                <div className="relative aspect-video overflow-hidden group cursor-pointer">
                                    <Image
                                        src={src}
                                        alt={`Réalisation Goal Cleaning ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={index === 0}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#003631]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-[#FFEDA8] font-bold text-sm tracking-[0.2em] uppercase">Voir en grand</span>
                                    </div>
                                </div>
                            </Link>
                        </AnimateInView>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/gallery">
                        <button
                            type="button"
                            className="h-12 px-8 text-sm font-bold tracking-[0.12em] uppercase text-[#FFEDA8] border border-[#FFEDA8]/30 hover:border-[#FFEDA8] hover:bg-[#FFEDA8] hover:text-[#003631] transition-all duration-200"
                        >
                            Voir toute la galerie
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
