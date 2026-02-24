"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
    className?: string;
    size?: number; // Length of the beam
    duration?: number; // Duration in seconds
    color?: string; // Color of the beam
}

export function BorderBeam({
    className,
    size = 200,
    duration = 3,
    color = "#006341", // Forest Green
}: BorderBeamProps) {
    return (
        <div className={cn("absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden", className)}>
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="9999" // Pill shape
                    ry="9999"
                    fill="none"
                    stroke={color}
                    strokeWidth="2" // 1px visual, but 2px centered on border? Or just 1.
                    strokeDasharray={`${size} 10000`} // Beam length, then gap
                    strokeLinecap="round"
                    style={{
                        animation: `border-beam ${duration}s linear infinite`,
                    }}
                />
            </svg>
        </div>
    );
}
