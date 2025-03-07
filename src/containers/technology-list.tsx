'use client'

import Section from '@/components/section';
import TecnologieCardMin from '@/components/tecnologie-card-min';
import { useEffect, useRef, useState } from 'react';

const TechnologyList = ({ repos }: { repos: any }) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <Section>
      <div className='flex flex-col gap-[50vh] my-20 '>
        <h2 className="w-full sticky top-1/3  flex justify-center text-lg lg:text-2xl mt-8">
          <div className=' font-extrabold  text-white'>MY TECHNOLOGIES</div>
        </h2>
        {repos.technologies.map((item: any, index: number) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`shadow-sm sticky top-2/4 transition-transform duration-300 ${activeIndex === index ? 'rotate-6' : ''
              }`}
          >
            <TecnologieCardMin data={item} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechnologyList;
