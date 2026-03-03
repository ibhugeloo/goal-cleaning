import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="pt-16 pb-8 text-[#F5F0E1] bg-[#003631]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-[#F5F0E1] font-display tracking-tighter mb-4 block">
                            GOAL CLEANING
                        </Link>
                        <p className="text-[#F5F0E1]/70 text-sm leading-relaxed">
                            L&apos;excellence du lavage auto de précision. Nous prenons soin de votre véhicule comme si c&apos;était le nôtre
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-[#F5F0E1] mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm text-[#F5F0E1]/70">
                            <li><Link href="/" className="hover:text-[#F5F0E1] transition-colors">Accueil</Link></li>
                            <li><Link href="/#services" className="hover:text-[#F5F0E1] transition-colors">Services</Link></li>
                            <li><Link href="/gallery" className="hover:text-[#F5F0E1] transition-colors">Galerie</Link></li>
                            <li><Link href="/#faq" className="hover:text-[#F5F0E1] transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-[#F5F0E1] mb-4">Légal</h4>
                        <ul className="space-y-2 text-sm text-[#F5F0E1]/70">
                            <li><Link href="/mentions-legales" className="hover:text-[#F5F0E1] transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/politique-confidentialite" className="hover:text-[#F5F0E1] transition-colors">Politique de Confidentialité</Link></li>
                            <li><Link href="/cgv" className="hover:text-[#F5F0E1] transition-colors">CGV</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-[#F5F0E1] mb-4">Suivez-nous</h4>
                        <div className="flex gap-4 mb-6">
                            <Link href="#" className="text-[#F5F0E1]/70 hover:text-[#F5F0E1] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-[#F5F0E1]/70 hover:text-[#F5F0E1] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-[#F5F0E1]/70 hover:text-[#F5F0E1] transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </Link>

                        </div>
                        <Link href="/contact">
                            <Button className="w-full bg-[#F5F0E1] text-[#003631] hover:bg-[#EBE6D6] font-semibold">
                                Contactez-nous
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-[#F5F0E1]/15 pt-8 text-center text-sm text-[#F5F0E1]/50">
                    <p>&copy; {new Date().getFullYear()} Goal Cleaning. Tous droits réservés</p>
                </div>
            </div>
        </footer>
    );
}
