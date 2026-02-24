"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in ms
    duration?: number; // Duration in s
}

export function AnimateInView({
    children,
    className,
    delay = 0,
    duration = 0.6
}: AnimateInViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Hysteresis logic:
                // Trigger when > 20% visible
                // Reset only when completely out of view (0%)
                if (entry.intersectionRatio > 0.2) {
                    setIsVisible(true);
                } else if (entry.intersectionRatio === 0 && !entry.isIntersecting) {
                    setIsVisible(false);
                }
            },
            {
                threshold: [0, 0.2], // Listen for 0% and 20% visibility
                rootMargin: "0px", // Remove negative margin to simplify
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={cn(className)}>
            <div
                style={{
                    animationName: isVisible ? "fadeInSlideInBlur" : "none",
                    animationDuration: `${duration}s`,
                    animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    animationFillMode: "both",
                    animationDelay: isVisible ? `${delay}ms` : "0ms",
                    width: "100%",
                    height: "100%",
                    opacity: isVisible ? 1 : 0, // Prevent flash: hidden by default, visible when animating (animation handles the transition, this handles the reset state)
                }}
            >
                {children}
            </div>
        </div>
    );
}
