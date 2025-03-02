'use client'

import { useEffect, useState } from 'react';

export default function ExpansiveBackground() {
    const [size, setSize] = useState(Math.trunc((window.scrollY * 100) / window.screen.height));
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll: any = () => {
            const x = Math.min((window.scrollY * 100) / window.screen.height * 1.8, 100);
            if (x <= 100) {
                setSize(x);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='w-full'>
            <div className="w-full h-[130vh]" />
            <div
                className="rounded flex  bg-gradient-to-r z-20 from-rose-200 to-violet-400 dark:from-rose-400 dark:to-violet-600 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: `${size}vw`,
                    height: `${size}vh`,
                }}
            >
                <div
                    className="w-full h-full relative flex items-center justify-center rounded bg-gradient-to-r from-rose-200 to-violet-400 dark:from-rose-400 dark:to-violet-600  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="absolute inset-0 z-10 blur-xl opacity-50 rounded-lg bg-gradient-to-r from-rose-300 to-violet-500 dark:from-rose-500 dark:to-violet-700"></div>
                    <div className="w-full h-full"></div>
                </div>
            </div>
        </div>
    );
}
