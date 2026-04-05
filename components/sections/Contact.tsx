"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GitBranch, Link, X, Mail, Send, ChevronUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact({ dict }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Seleccionamos todos los elementos que tienen la clase de animación
    const elements = gsap.utils.toArray(".animate-on-scroll");

    if (elements.length === 0) return;

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 px-6 relative z-10"
      // style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* ESTILO CRÍTICO: 
          Ocultamos los elementos mediante CSS antes de que GSAP tome el control.
          'opacity-0' y 'translate-y-10' son clases de Tailwind.
      */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          will-change: transform, opacity;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-30">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 text-[#00d4ff]">{dict.contact.title}</h2>
          <p className="text-gray-400 text-lg">{dict.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <form className="space-y-6">
            <input
              type="text"
              placeholder={dict.contact.name}
              className="animate-on-scroll w-full px-4 py-4 bg-[#1a1a1a] border border-[#444] rounded-xl text-white outline-none focus:border-[#00d4ff]"
            />
            <input
              type="email"
              placeholder={dict.contact.email}
              className="animate-on-scroll w-full px-4 py-4 bg-[#1a1a1a] border border-[#444] rounded-xl text-white outline-none focus:border-[#00d4ff]"
            />
            <textarea
              placeholder={dict.contact.message}
              rows={5}
              className="animate-on-scroll w-full px-4 py-4 bg-[#1a1a1a] border border-[#444] rounded-xl text-white outline-none resize-none focus:border-[#00d4ff]"
            />
            <button className="animate-on-scroll w-full py-4 bg-[#00d4ff] text-[#0a0a0a] font-bold rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <Send size={18} />
              {dict.contact.send}
            </button>
          </form>

          <div className="flex flex-col animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-8 text-white">{dict.contact.social}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: GitBranch, label: "GitHub" },
                { icon: Link, label: "LinkedIn" },
                { icon: X, label: "Twitter" },
                { icon: Mail, label: "Email" },
              ].map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="flex items-center gap-4 px-6 py-4 bg-[#1a1a1a] border border-[#333] rounded-xl text-gray-400 hover:text-[#00d4ff] transition-all"
                >
                  <link.icon size={22} />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <footer className="animate-on-scroll pt-10 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-8 w-full" >
          <div className="text-center md:text-left">
            {/* Reemplaza 'Tu Nombre' por tu nombre real o mantén dict.contact.name */}
            <p className="text-2xl font-black text-white uppercase tracking-tighter" style= {{color: '#97e0ee'}}>
              JOSE GARCIA
            </p>
            <p className="text-[#00d4ff] text-sm font-medium mt-1">
              Desarrollador Full Stack
            </p>
            <p className="text-gray-500 text-xs mt-2 opacity-60">
              © {new Date().getFullYear()} — Todos los derechos reservados
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 px-8 py-3 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-wide">VOLVER ARRIBA</span>
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </footer>
      </div>
    </section>
  );
}