"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CAL_GENERIC = "YOUR_CAL_USERNAME/rdv";
export const CAL_COMPLET = "YOUR_CAL_USERNAME/lavage-complet";
export const CAL_INTERIEUR = "YOUR_CAL_USERNAME/nettoyage-interieur";
export const CAL_EXTERIEUR = "YOUR_CAL_USERNAME/lavage-exterieur";

interface CalButtonProps {
  calLink: string;
  className?: string;
  children: React.ReactNode;
}

export function CalButton({ calLink, className, children }: CalButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "rdv" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#003631" },
          dark: { "cal-brand": "#003631" },
        },
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="rdv"
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={cn(buttonVariants(), className)}
    >
      {children}
    </button>
  );
}
