import Image from "next/image";
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
            <span className="text-[#F8F5EE]/45 text-[0.65rem] tracking-widest uppercase">
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
                        "radial-gradient(ellipse 65% 60% at 25% 55%, rgba(0,90,72,0.38) 0%, transparent 68%)",
                }}
            />

            {/* ══════════════════════════════════════════════════════════════
                Main split layout
                - Mobile  : flex-col  (text → image stacked)
                - Desktop : flex-row  (text left | image right)
            ═══════════════════════════════════════════════════════════════ */}
            <div className="relative z-10 flex flex-col md:flex-row min-h-[100svh]">

                {/* ── LEFT : text content ──────────────────────────────────── */}
                <div className="flex flex-1 flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 pt-32 pb-12 md:pt-0 md:pb-0 text-center md:text-left">

                    {/* Location tag */}
                    <AnimateInView delay={0}>
                        <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                            <span aria-hidden className="block w-8 h-px bg-[#FFEDA8]" />
                            <span className="text-[#FFEDA8] text-[0.62rem] font-bold tracking-[0.28em] uppercase">
                                Saint‑Denis · La Réunion
                            </span>
                        </div>
                    </AnimateInView>

                    {/* Main headline */}
                    <AnimateInView delay={70}>
                        <h1
                            className="font-display font-extrabold text-[#F8F5EE] leading-[0.88] tracking-tight"
                            style={{ fontSize: "clamp(3.2rem, 6.8vw, 6.4rem)" }}
                        >
                            Votre voiture<br />
                            mérite<br />
                            <span className="text-[#FFEDA8]">l&apos;excellence</span>
                        </h1>
                    </AnimateInView>

                    {/* Decorative rule */}
                    <AnimateInView delay={140}>
                        <div className="flex items-center gap-3 my-7 justify-center md:justify-start">
                            <span aria-hidden className="block h-px w-10 bg-[#FFEDA8]/55" />
                            <span aria-hidden className="block h-px w-20 bg-[#F8F5EE]/10" />
                        </div>
                    </AnimateInView>

                    {/* Body copy */}
                    <AnimateInView delay={200}>
                        <p className="text-[#F8F5EE]/60 text-lg leading-relaxed max-w-[30rem] mb-10 mx-auto md:mx-0">
                            Lavage &amp; detailing professionnel. Chaque surface traitée avec
                            précision — une finition qui dépasse les standards d&apos;usine.
                        </p>
                    </AnimateInView>

                    {/* CTAs */}
                    <AnimateInView delay={270}>
                        <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center md:justify-start">
                            <CalButton
                                calLink={CAL_GENERIC}
                                className="bg-[#FFEDA8] text-[#003631] hover:bg-[#fff5c2] h-14 text-sm px-8 font-bold tracking-[0.12em] uppercase rounded-none transition-colors duration-150"
                            >
                                Réserver en ligne
                            </CalButton>
                            <Link href="/#services" className="w-full sm:w-auto">
                                <button
                                    type="button"
                                    className="w-full h-14 text-sm px-8 font-semibold tracking-[0.1em] uppercase text-[#F8F5EE] border border-[#F8F5EE]/18 hover:border-[#FFEDA8]/50 hover:text-[#FFEDA8] transition-colors duration-150"
                                >
                                    Nos Services
                                </button>
                            </Link>
                        </div>
                    </AnimateInView>

                    {/* Trust stats */}
                    <AnimateInView delay={340}>
                        <div className="flex items-center gap-6 justify-center md:justify-start">
                            <StatPill value="4.9 ★" label="Avis clients" />
                            <span aria-hidden className="block w-px h-7 bg-[#F8F5EE]/12" />
                            <StatPill value="500+" label="Véhicules traités" />
                            <span aria-hidden className="block w-px h-7 bg-[#F8F5EE]/12" />
                            <StatPill value="100%" label="Satisfait ou repris" />
                        </div>
                    </AnimateInView>
                </div>

                {/* ── RIGHT : car image ─────────────────────────────────────── */}
                <div className="relative w-full h-64 md:w-[46%] md:h-auto flex-shrink-0">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Voiture détaillée par Goal Cleaning — finition premium"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 46vw"
                        className="object-cover"
                    />

                    {/* Fade: left edge blends into dark green (desktop) */}
                    <div
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-40 md:w-56 bg-gradient-to-r from-[#003631] to-transparent z-10 hidden md:block"
                    />
                    {/* Fade: top (mobile transition) */}
                    <div
                        aria-hidden
                        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#003631] to-transparent z-10"
                    />
                    {/* Fade: bottom */}
                    <div
                        aria-hidden
                        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#003631] to-transparent z-10"
                    />

                    {/* Floating "Finition Premium" badge */}
                    <div className="absolute bottom-8 right-4 md:right-8 z-20 bg-[#FFEDA8] text-[#003631] px-4 py-3 text-center leading-tight shadow-lg">
                        <div className="text-[0.58rem] font-bold tracking-[0.22em] uppercase">
                            Finition
                        </div>
                        <div className="text-[1.35rem] font-extrabold font-display leading-none mt-0.5">
                            Premium
                        </div>
                    </div>
                </div>
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
