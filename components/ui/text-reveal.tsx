import React from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number; // Initial delay in ms
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const letters = text.split("");

    return (
        <span className={cn("inline-flex flex-wrap justify-center gap-[0.2em]", className)}>
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className="inline-block overflow-hidden"
                    style={{ verticalAlign: "bottom" }}
                >
                    <span
                        className="inline-block opacity-0"
                        style={{
                            animation: `slideDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                            animationDelay: `${delay + index * 50}ms`,
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                </span>
            ))}
        </span>
    );
}
