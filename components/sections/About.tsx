'use client';

import Image from 'next/image';
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
             <h2 className="text-3xl lg:text-4xl font-bold mb-6">{dict.about.title}</h2>
             <p className="text-base lg:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
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
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--accent-dim)]/10 blur-3xl opacity-70" />
            <div className="aspect-square rounded-[2rem] overflow-hidden glass glow relative ring-1 ring-white/10 shadow-[0_40px_120px_-70px_rgba(0,212,255,0.8)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_50px_140px_-90px_rgba(0,212,255,0.8)]">
              <Image
                src="/photo.png"
                alt="Perfil"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[var(--accent)] rounded-2xl blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}