'use client';

import { useEffect, useRef, useState } from 'react';

export default function ExpansiveBackground({ className, screenMultiplier }: { className: string, screenMultiplier: number }) {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function updateSize() {
            const newSize = Math.min((window.scrollY * 100) / window.screen.height * screenMultiplier, 100);
            if (backgroundRef.current) {
                backgroundRef.current.style.width = `${newSize}vw`;
                backgroundRef.current.style.height = `${newSize}vh`;
            }
        }

        let ticking = false;

        function handleScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateSize();
                    ticking = false;
                });
                ticking = true;
            }
        }

        updateSize();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div
            ref={backgroundRef}
            className={className}
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
            }}
        />
    );
}
