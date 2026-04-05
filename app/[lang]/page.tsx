import { getDictionary } from "@/lib/i18n/dictionaries";
import { i18n } from "@/lib/i18n/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SmoothScroll from "@/components/ui/SmoothScroll";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return {
    title: lang === "es" ? "Fullstack Developer" : "Fullstack Developer",
    description:
      lang === "es"
        ? "Desarrollador Fullstack con experiencia en Docker, Kubernetes, MongoDB, PostgreSQL y más."
        : "Fullstack Developer with experience in Docker, Kubernetes, MongoDB, PostgreSQL and more.",
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "es" | "en");

  return (
    <html lang={lang}>
      <body>
        <SmoothScroll>
          <Header lang={lang} dict={dict} />
          <main>
            <Hero dict={dict} />
            <About dict={dict} />
            <Skills dict={dict} />
            <Experience dict={dict} />
            <Projects dict={dict} />
            <Contact dict={dict} />
          </main>
          <Footer lang={lang} dict={dict} />
        </SmoothScroll>
      </body>
    </html>
  );
}

