'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitBranch, Link, X, Mail, Send } from 'lucide-react';

interface ContactProps {
  dict: {
    contact: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      social: string;
    };
  };
}

export default function Contact({ dict }: ContactProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
    { icon: Link, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: X, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:tu@email.com', label: 'Email' },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = formRef.current?.children;
    if (elements) {
      Array.from(elements).forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        });
      });
    }

  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{dict.contact.title}</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder={dict.contact.name}
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={dict.contact.email}
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder={dict.contact.message}
                rows={5}
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  {dict.contact.sending}
                </>
              ) : isSuccess ? (
                <>
                  <Send size={18} />
                  {dict.contact.success}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {dict.contact.send}
                </>
              )}
            </button>
          </form>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">{dict.contact.social}</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 glass rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--card-hover)] transition-all"
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}