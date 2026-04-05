'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, CheckCircle } from 'lucide-react';

interface AboutProps {
  dict: {
    about: {
      title: string;
      description: string;
      location: string;
      availability: string;
    };
  };
}

export default function About({ dict }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(contentRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    gsap.to(imageRef.current, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-4xl font-bold mb-6">{dict.about.title}</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              {dict.about.description}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin size={20} className="text-[var(--accent)]" />
                <span>{dict.about.location}</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <CheckCircle size={20} className="text-[var(--accent)]" />
                <span>{dict.about.availability}</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass glow">
              <div className="w-full h-full bg-gradient-to-br from-[var(--accent-dim)] to-[var(--card)] flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--accent)] rounded-2xl blur-xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}