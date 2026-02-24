"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
    success: boolean;
    message: string;
} | null;

export async function sendContactEmail(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const nom = formData.get("nom") as string;
    const telephone = formData.get("telephone") as string;
    const email = formData.get("email") as string;
    const societe = formData.get("societe") as string;
    const sujet = formData.get("sujet") as string;
    const message = formData.get("message") as string;

    if (!nom || !email) {
        return {
            success: false,
            message: "Le nom et l'adresse e-mail sont obligatoires.",
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            message: "L'adresse e-mail n'est pas valide.",
        };
    }

    try {
        await resend.emails.send({
            from: "Goal Cleaning <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL || "contact@goalcleaning.re"],
            replyTo: email,
            subject: sujet
                ? `[Goal Cleaning] ${sujet}`
                : `[Goal Cleaning] Nouveau message de ${nom}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
                    <h2 style="color: #D4AF37; margin-bottom: 24px;">Nouveau message - Goal Cleaning</h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #666; font-weight: bold; width: 140px;">Nom</td>
                            <td style="padding: 8px 0; color: #333;">${nom}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td>
                            <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #D4AF37;">${email}</a></td>
                        </tr>
                        ${
                            telephone
                                ? `<tr>
                            <td style="padding: 8px 0; color: #666; font-weight: bold;">Téléphone</td>
                            <td style="padding: 8px 0; color: #333;">${telephone}</td>
                        </tr>`
                                : ""
                        }
                        ${
                            societe
                                ? `<tr>
                            <td style="padding: 8px 0; color: #666; font-weight: bold;">Société</td>
                            <td style="padding: 8px 0; color: #333;">${societe}</td>
                        </tr>`
                                : ""
                        }
                        ${
                            sujet
                                ? `<tr>
                            <td style="padding: 8px 0; color: #666; font-weight: bold;">Sujet</td>
                            <td style="padding: 8px 0; color: #333;">${sujet}</td>
                        </tr>`
                                : ""
                        }
                    </table>

                    <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 6px; border-left: 4px solid #D4AF37;">
                        <p style="color: #666; font-weight: bold; margin: 0 0 8px 0;">Message :</p>
                        <p style="color: #333; white-space: pre-wrap; margin: 0;">${message || "(Aucun message)"}</p>
                    </div>

                    <p style="margin-top: 24px; color: #999; font-size: 12px;">
                        Ce message a été envoyé depuis le formulaire de contact de goalcleaning.re
                    </p>
                </div>
            `,
        });

        return {
            success: true,
            message:
                "Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.",
        };
    } catch (error) {
        console.error("Erreur lors de l'envoi du mail:", error);
        return {
            success: false,
            message:
                "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par téléphone.",
        };
    }
}
