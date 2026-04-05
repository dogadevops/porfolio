'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsByCategory } from '@/data/skills';

interface SkillsProps {
  dict: {
    skills: {
      title: string;
      subtitle: string;
    };
  };
}

export default function Skills({ dict }: SkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

    const cards = categoriesRef.current?.querySelectorAll('.skill-card');
    cards?.forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });
    });

  }, { scope: containerRef });

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps',
    mobile: 'Mobile',
    other: 'Other',
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 md:py-32 px-6 bg-[var(--card)]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{dict.skills.title}</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            {dict.skills.subtitle}
          </p>
        </div>

        <div ref={categoriesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, skillList]) => (
            <div
              key={category}
              className="skill-card p-6 rounded-2xl glass hover:bg-[var(--card-hover)] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm bg-[var(--card)] rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] hover:bg-opacity-20 transition-all cursor-default"
                  >
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}