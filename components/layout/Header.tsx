'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  lang: string;
  dict: {
    nav: {
      about: string;
      skills: string;
      experience: string;
      projects: string;
      contact: string;
    };
  };
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: `/#about`, label: dict.nav.about },
    { href: `/#skills`, label: dict.nav.skills },
    { href: `/#experience`, label: dict.nav.experience },
    { href: `/#projects`, label: dict.nav.projects },
    { href: `/#contact`, label: dict.nav.contact },
  ];

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    const currentPath = pathname.replace(`/${lang}`, '') || '/';
    window.location.href = `/${newLang}${currentPath}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-3 text-xl font-bold text-gradient"
        >
          <Image
            src="/Imagen2.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-lg">💻</span>
          
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <Globe size={16} />
            {lang.toUpperCase()}
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--foreground)]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <Globe size={18} />
            {lang === 'es' ? 'English' : 'Español'}
          </button>
        </div>
      )}
    </header>
  );
}