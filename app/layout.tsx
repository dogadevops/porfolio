import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fullstack Developer Portfolio",
  description: "Fullstack Developer with experience in Docker, Kubernetes, MongoDB, PostgreSQL and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full">
        <div className="canvas-background" />
        {children}
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener('mousemove', (e) => {
            const x = e.clientX + 'px';
            const y = e.clientY + 'px';
            document.documentElement.style.setProperty('--x', x);
            document.documentElement.style.setProperty('--y', y);
          });
        `}} />
      </body>
    </html>
  );
}