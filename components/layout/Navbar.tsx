"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CalButton, CAL_GENERIC } from "@/components/ui/cal-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Galerie", href: "/gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#003631] transition-all duration-300 ${
        isScrolled ? "border-b border-[#FFEDA8]/15 shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-[#FFEDA8] font-display tracking-tighter"
          >
            GOAL CLEANING
          </Link>

          {/* Desktop Navigation — centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#FFEDA8]/65 hover:text-[#FFEDA8] transition-colors duration-150 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <button
                type="button"
                className="text-sm font-semibold text-[#FFEDA8]/65 hover:text-[#FFEDA8] px-4 py-2 transition-colors duration-150 tracking-wide"
              >
                Contactez-nous
              </button>
            </Link>
            <CalButton
              calLink={CAL_GENERIC}
              className="bg-[#FFEDA8] text-[#003631] hover:bg-[#fff5c2] font-bold text-sm px-6 h-10 rounded-none tracking-[0.1em] uppercase transition-colors duration-150"
            >
              Réserver
            </CalButton>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="text-[#FFEDA8] p-2"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#003631] border-[#FFEDA8]/15">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-[#FFEDA8]/70 hover:text-[#FFEDA8] transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/contact" className="w-full">
                    <button
                      type="button"
                      className="w-full h-12 text-sm font-semibold text-[#FFEDA8] border border-[#FFEDA8]/25 hover:border-[#FFEDA8] hover:bg-[#FFEDA8]/10 tracking-wide transition-colors duration-150"
                    >
                      Contactez-nous
                    </button>
                  </Link>
                  <CalButton
                    calLink={CAL_GENERIC}
                    className="w-full h-12 bg-[#FFEDA8] text-[#003631] hover:bg-[#fff5c2] font-bold text-sm tracking-[0.1em] uppercase rounded-none transition-colors duration-150"
                  >
                    Réserver en ligne
                  </CalButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}
