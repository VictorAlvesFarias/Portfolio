'use client'

import React, { useEffect, useRef, useState } from 'react'

function FadeIn({ children }: { children: React.ReactNode }) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const lastScrollY = useRef<number>(window.scrollY);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const isScrollingDown = window.scrollY > lastScrollY.current;

            if (rect.top > window.innerHeight * 0.9 && isScrollingDown) {
                setIsVisible(false);
            }
            if (rect.top < window.innerHeight * 0.9 && isScrollingDown) {
                setIsVisible(true);
            }

            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className={`flex xs:flex-row xs:items-stretch items-center xs:gap-6 flex-col justify-between text-2xl transition-opacity duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {children}
        </div>
    );
}

export default FadeIn;
