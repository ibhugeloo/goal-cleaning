import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CalButton, CAL_GENERIC } from "@/components/ui/cal-button";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Voiture après detailing Goal Cleaning"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Ivory overlay */}
                <div className="absolute inset-0 bg-background/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
                <AnimateInView delay={0}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-2 text-sm font-medium mb-8">
                        Saint-Denis, La Réunion
                    </div>
                </AnimateInView>

                <AnimateInView delay={100}>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-foreground">
                        Votre voiture mérite<br />
                        <span className="text-primary">l&apos;excellence</span>
                    </h1>
                </AnimateInView>

                <AnimateInView delay={200}>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
                        Service de lavage et detailing auto professionnel. Gagnez du temps, nous nous occupons de tout avec une finition premium
                    </p>
                </AnimateInView>

                <AnimateInView delay={300}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CalButton calLink={CAL_GENERIC} className="bg-primary text-white hover:bg-[#004D30] rounded-full h-14 text-lg px-8 font-semibold">
                            Réserver en ligne
                        </CalButton>
                        <Link href="/#services">
                            <Button variant="outline" size="lg" className="h-14 text-lg px-8 border-border text-foreground hover:bg-secondary rounded-full">
                                Nos Services
                            </Button>
                        </Link>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}
