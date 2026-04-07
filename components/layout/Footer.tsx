import { GitBranch, Link, Mail, X } from 'lucide-react';

interface FooterProps {
  lang: string;
  dict: {
    footer: {
      rights: string;
    };
    contact: {
      social: string;
    };
  };
}

export default function Footer({ lang, dict }: FooterProps) {
  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/dogadevops', label: 'GitHub' },
    { icon: Link, href: 'https://www.linkedin.com/in/jose-garcia-31bb103b9/', label: 'LinkedIn' },
    { icon: X, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'dogadevops@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} — {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}