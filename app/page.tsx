import Hero from "@/components/site/Hero";
import Projects from "@/components/site/Projects";
import DesignGallery from "@/components/site/DesignGallery";
import About from "@/components/site/About";
import Experience from "@/components/site/Experience";
import Skills from "@/components/site/Skills";
import Contact from "@/components/site/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <DesignGallery />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
