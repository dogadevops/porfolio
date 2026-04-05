'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/data/experience';

interface ExperienceProps {
  dict: {
    experience: {
      title: string;
      subtitle: string;
    };
  };
}

export default function Experience({ dict }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
      });
    });

  }, { scope: containerRef });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
       <div ref={titleRef} className="text-center mb-12">
         <h2 className="text-3xl lg:text-4xl font-bold mb-4">{dict.experience.title}</h2>
         <p className="text-base lg:text-lg text-[var(--text-secondary)]">
           {dict.experience.subtitle}
         </p>
       </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[var(--border)] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-6 rounded-2xl glass hover:bg-[var(--card-hover)] transition-colors">
                    <span className="text-sm text-[var(--accent)]">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                    <p className="text-[var(--text-secondary)] mt-1">{exp.company}</p>
                    <p className="text-sm text-[var(--text-secondary)] mt-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-start">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-[var(--accent)]/20 text-[var(--accent)] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent)] z-10">
                  <div className="w-3 h-3 bg-[var(--background)] rounded-full" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}