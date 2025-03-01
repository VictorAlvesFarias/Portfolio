'use client'

import { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

function FadeIn({ children }: { children: React.ReactNode }) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Se a entrada estiver visível, mostra a div
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Quando a div sai, esconde ela
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`flex xs:flex-row xs:items-stretch items-center xs:gap-6 flex-col justify-between text-2xl pb-6 transition-opacity duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            {children}
        </div>
    )
}

export default FadeIn;
