import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Goal Cleaning — Lavage & Detailing Auto à Saint-Denis, La Réunion",
  description:
    "Centre de lavage et detailing automobile à Saint-Denis, La Réunion. Lavage extérieur dès 40€, lavage complet dès 90€. Produits professionnels, finition premium.",
  alternates: {
    canonical: "https://www.goalcleaning.re",
  },
};
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
