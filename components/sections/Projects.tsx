'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectsProps {
  dict: {
    projects: {
      title: string;
      subtitle: string;
      view: string;
      code: string;
    };
  };
}

export default function Projects({ dict }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

    const cards = projectsRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });
    });

  }, { scope: containerRef });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 md:py-32 px-6 bg-[var(--card)]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{dict.projects.title}</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            {dict.projects.subtitle}
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative rounded-2xl overflow-hidden glass hover:glow transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-[var(--accent-dim)] to-[var(--card)] flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">🚀</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-[var(--card)] rounded text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                    >
                      <ExternalLink size={16} />
                      {dict.projects.view}
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      <GitBranch size={16} />
                      {dict.projects.code}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}