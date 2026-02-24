"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BorderBeam } from "@/components/ui/border-beam";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary font-display tracking-tighter">
            GOAL CLEANING
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Right Side Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="ghost" className="text-foreground hover:text-primary font-semibold hover:bg-primary/5">
                Contactez-nous
              </Button>
            </Link>
            <CalButton calLink={CAL_GENERIC} className="bg-primary text-white hover:bg-primary/90 font-semibold relative group overflow-hidden">
              <span className="relative z-10">Réserver en ligne</span>
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CalButton>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full font-semibold">
                      Contactez-nous
                    </Button>
                  </Link>
                  <CalButton calLink={CAL_GENERIC} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
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
