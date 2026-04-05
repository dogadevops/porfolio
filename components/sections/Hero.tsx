'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      scroll: string;
    };
  };
}

export default function Hero({ dict }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6')
    .from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4')
    .from(scrollRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
    }, '-=0.2');

    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(titleRef.current, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'center top',
        scrub: true,
      },
    });

  }, { scope: containerRef });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-[var(--accent-dim)] to-transparent opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 30%, var(--accent-dim) 0%, transparent 60%)',
        }}
      />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--accent)] rounded-full blur-[96px]" />
      </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gradient"
          >
            {dict.hero.title}
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg lg:text-xl xl:text-2xl text-[var(--text-secondary)] mb-8 max-w-xl mx-auto"
          >
            {dict.hero.subtitle}
          </p>

          <button
          ref={ctaRef}
          onClick={scrollToProjects}
          className="px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-full hover:scale-105 transition-transform"
        >
          {dict.hero.cta}
        </button>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
      >
        <span className="text-sm">{dict.hero.scroll}</span>
        <ArrowDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}