import Link from "next/link";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { CalButton, CAL_GENERIC } from "@/components/ui/cal-button";

// ─── Inline helpers ────────────────────────────────────────────────────────────

function StatPill({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span className="text-[#FFEDA8] text-xl md:text-2xl font-extrabold font-display leading-none">
                {value}
            </span>
            <span className="text-[#FFEDA8]/50 text-[0.65rem] tracking-widest uppercase">
                {label}
            </span>
        </div>
    );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

export function Hero() {
    return (
        <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#003631]">

            {/* ── Grain texture ─────────────────────────────────────────── */}
            <div
                aria-hidden
                className="absolute inset-0 z-[1] pointer-events-none opacity-[0.045]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "256px 256px",
                }}
            />

            {/* ── Ambient radial glow ─────────────────────────────────────── */}
            <div
                aria-hidden
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 70% at 30% 55%, rgba(0,90,72,0.45) 0%, transparent 70%)",
                }}
            />

            {/* ── Content ─────────────────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col justify-center min-h-[100svh] px-6 sm:px-10 md:px-14 lg:px-20 pt-32 pb-16">

                {/* Main headline */}
                <AnimateInView delay={0}>
                    <h1
                        className="font-display font-extrabold leading-[0.9] tracking-tight mb-7"
                        style={{ fontSize: "clamp(3.4rem, 7.5vw, 7rem)" }}
                    >
                        <span className="text-[#FFEDA8]/65">Votre voiture<br />mérite<br /></span>
                        <span className="bg-[#FFEDA8] text-[#003631] px-3 inline-block mt-2 leading-tight">
                            l&apos;excellence
                        </span>
                    </h1>
                </AnimateInView>

                {/* Location tag — sous le titre */}
                <AnimateInView delay={80}>
                    <div className="flex items-center gap-3 mb-8">
                        <span aria-hidden className="block w-8 h-px bg-[#FFEDA8]/55" />
                        <span className="text-[#FFEDA8]/55 text-[0.62rem] font-bold tracking-[0.28em] uppercase">
                            Saint‑Denis · La Réunion
                        </span>
                    </div>
                </AnimateInView>

                {/* Body copy */}
                <AnimateInView delay={160}>
                    <p className="text-[#FFEDA8]/55 text-lg leading-relaxed max-w-[32rem] mb-10">
                        Lavage &amp; detailing professionnel. Chaque surface traitée avec
                        précision — une finition qui dépasse les standards d&apos;usine.
                    </p>
                </AnimateInView>

                {/* CTAs */}
                <AnimateInView delay={230}>
                    <div className="flex flex-col sm:flex-row gap-3 mb-14">
                        <CalButton
                            calLink={CAL_GENERIC}
                            className="bg-[#FFEDA8] text-[#003631] hover:bg-[#fff5c2] h-14 text-sm px-8 font-bold tracking-[0.12em] uppercase rounded-none transition-colors duration-150"
                        >
                            Réserver en ligne
                        </CalButton>
                        <Link href="/#services" className="w-full sm:w-auto">
                            <button
                                type="button"
                                className="w-full h-14 text-sm px-8 font-semibold tracking-[0.1em] uppercase text-[#FFEDA8] border border-[#FFEDA8]/25 hover:border-[#FFEDA8] hover:bg-[#FFEDA8]/10 transition-colors duration-150"
                            >
                                Nos Services
                            </button>
                        </Link>
                    </div>
                </AnimateInView>

                {/* Trust stats */}
                <AnimateInView delay={300}>
                    <div className="flex items-center gap-6">
                        <StatPill value="4.9 ★" label="Avis clients" />
                        <span aria-hidden className="block w-px h-7 bg-[#FFEDA8]/15" />
                        <StatPill value="500+" label="Véhicules traités" />
                        <span aria-hidden className="block w-px h-7 bg-[#FFEDA8]/15" />
                        <StatPill value="100%" label="Satisfait ou repris" />
                    </div>
                </AnimateInView>
            </div>

            {/* ── Bottom accent hairline ──────────────────────────────────── */}
            <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-px z-20"
                style={{
                    background:
                        "linear-gradient(to right, transparent 5%, rgba(255,237,168,0.35) 40%, rgba(255,237,168,0.35) 60%, transparent 95%)",
                }}
            />
        </section>
    );
}
