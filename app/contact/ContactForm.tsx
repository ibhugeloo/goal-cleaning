"use client";

import { useActionState } from "react";
import { sendContactEmail, ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [state, formAction, isPending] = useActionState<
        ContactFormState,
        FormData
    >(sendContactEmail, null);

    return (
        <>
            {state?.success && (
                <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>{state.message}</p>
                </div>
            )}

            {state && !state.success && (
                <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>{state.message}</p>
                </div>
            )}

            <form
                action={formAction}
                className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="nom"
                            className="text-sm font-medium text-foreground/70 ml-1"
                        >
                            Nom *
                        </label>
                        <Input
                            id="nom"
                            name="nom"
                            placeholder="Votre nom"
                            required
                            disabled={isPending || state?.success === true}
                            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl transition-all duration-300 hover:border-primary/30 disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="telephone"
                            className="text-sm font-medium text-foreground/70 ml-1"
                        >
                            Numéro de téléphone
                        </label>
                        <Input
                            id="telephone"
                            name="telephone"
                            placeholder="+262"
                            disabled={isPending || state?.success === true}
                            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl transition-all duration-300 hover:border-primary/30 disabled:opacity-50"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground/70 ml-1"
                        >
                            Adresse e-mail *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="exemple@email.com"
                            required
                            disabled={isPending || state?.success === true}
                            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl transition-all duration-300 hover:border-primary/30 disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="societe"
                            className="text-sm font-medium text-foreground/70 ml-1"
                        >
                            Société (Optionnel)
                        </label>
                        <Input
                            id="societe"
                            name="societe"
                            placeholder="Nom de votre entreprise"
                            disabled={isPending || state?.success === true}
                            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl transition-all duration-300 hover:border-primary/30 disabled:opacity-50"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="sujet"
                        className="text-sm font-medium text-gray-300 ml-1"
                    >
                        Sujet
                    </label>
                    <Input
                        id="sujet"
                        name="sujet"
                        placeholder="Lavage complet, Rénovation optiques..."
                        disabled={isPending || state?.success === true}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl transition-all duration-300 hover:bg-white/10 disabled:opacity-50"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300 ml-1"
                    >
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Dites-nous en plus sur votre besoin..."
                        disabled={isPending || state?.success === true}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 min-h-[150px] rounded-xl transition-all duration-300 hover:border-primary/30 resize-none disabled:opacity-50"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isPending || state?.success === true}
                    className="w-full bg-primary text-white hover:bg-[#004D30] font-bold h-12 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isPending ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Envoi en cours...
                        </span>
                    ) : state?.success ? (
                        <span className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Message envoyé !
                        </span>
                    ) : (
                        "Envoyer le message"
                    )}
                </Button>
            </form>
        </>
    );
}
