'use client'

import React, { useEffect, useRef } from 'react'

interface IFadeInScroller {
    children: React.ReactElement
    unobserveDuration: number
    observeDuration: number
    threshold: number
    fadeIn?: ("top" | "bottom")[]
    fadeOut?: ("top" | "bottom")[]
}

const IntersectionFadeIn = ({ children, observeDuration, threshold, unobserveDuration, fadeIn, fadeOut }: IFadeInScroller) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const childWithRef = React.cloneElement(children, { ref: sectionRef });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const target = entry.target as HTMLDivElement;
                const rect = target.getBoundingClientRect();

                if (entry.isIntersecting) {
                    if (rect.top < 0 && fadeIn?.includes("bottom")) {
                        target.style.transition = `${observeDuration}ms, transform ${observeDuration}ms`;
                        target.style.opacity = "1";
                    }
                    else if (rect.top > 0 && fadeIn?.includes("top")) {
                        target.style.transition = `${observeDuration}ms, transform ${observeDuration}ms`;
                        target.style.opacity = "1";
                    }
                } else {
                    if (rect.top < 0 && fadeOut?.includes("top")) {
                        target.style.transition = `${unobserveDuration}ms, transform ${unobserveDuration}ms`;
                        target.style.opacity = "0";
                    }
                    else if (rect.top > 0 && fadeOut?.includes("bottom")) {
                        target.style.transition = `${unobserveDuration}ms, transform ${unobserveDuration}ms`;
                        target.style.opacity = "0";
                    }
                }
            },
            {
                threshold: threshold,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return childWithRef;
}

export default IntersectionFadeIn;
