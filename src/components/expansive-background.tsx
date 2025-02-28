'use client'

import { useEffect, useState } from 'react';

export default function ExpansiveBackground() {
    const [size, setSize] = useState(Math.trunc((window.scrollY * 100) / window.screen.height));
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            setScrolled(true)
            setSize(prevSize => {
                if (event.deltaY > 0) {
                    if (window.scrollY < window.screen.height) {
                        return Math.min(prevSize + 15, 100);
                    }
                } else if (window.scrollY < window.screen.height) {
                    return Math.max(prevSize - 15, 0);
                }

                return prevSize;
            });
        };

        setSize((window.scrollY * 100) / window.screen.height)

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);


    return (
        <div
            className={`${scrolled ? "transition-all" : ""} flex bg-gradient-to-r from-rose-400 to-violet-600 z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${size == 100 ? "rounded-none" : "rounded-lg"}`}
            style={{
                width: `${size}vw`,
                height: `${size}vh`,
                boxShadow: '0 4px 30px rgba(255, 0, 255, 0.2), 0 4px 30px rgba(0, 0, 255, 0.3)', // exemplo de sombra com gradiente
            }}
        >
        </div>
    );
}
