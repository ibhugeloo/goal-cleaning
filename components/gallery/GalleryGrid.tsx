"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { Button } from "@/components/ui/button";

interface GalleryGridProps {
    images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
    const searchParams = useSearchParams();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Check URL for initial image selection
    useEffect(() => {
        const imgParam = searchParams.get("img");
        if (imgParam) {
            const index = parseInt(imgParam);
            if (!isNaN(index) && index >= 0 && index < images.length) {
                setSelectedIndex(index);
            }
        }
    }, [searchParams, images.length]);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        // Optional: Update URL without reload to make it shareable? 
        // For now, just local state is fine, but user asked for redirection to work.
        // The redirection works because the page loads and the useEffect picks it up.
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        // Clear URL param?
        window.history.replaceState(null, "", "/gallery");
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev! + 1) % images.length);
            if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, images.length]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <AnimateInView key={index} delay={index * 100}>
                        <div
                            className="relative aspect-video overflow-hidden rounded-lg group border border-border hover:border-primary/50 transition-colors cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={src}
                                alt={`Réalisation Goal Cleaning ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={index === 0}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">Zoom</span>
                            </div>
                        </div>
                    </AnimateInView>
                ))}
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:text-primary z-50"
                        onClick={closeLightbox}
                    >
                        <X className="h-8 w-8" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary z-50 hidden md:flex"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="h-10 w-10" />
                    </Button>

                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={images[selectedIndex]}
                            alt={`Réalisation Goal Cleaning ${selectedIndex + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain"
                            quality={85}
                        />
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary z-50 hidden md:flex"
                        onClick={nextImage}
                    >
                        <ChevronRight className="h-10 w-10" />
                    </Button>
                </div>
            )}
        </>
    );
}
