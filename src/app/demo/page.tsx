import { HeroSection } from "@/components/ui/hero-section-5"
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Content from "@/components/Content";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Demo() {
  return (
    <>
      <HeroSection />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Content />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
