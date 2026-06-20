import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ArchitectureShowcase } from "@/components/sections/Architecture";
import { Projects } from "@/components/sections/Projects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Playground } from "@/components/sections/Playground";
import { Timeline } from "@/components/sections/Timeline";
import { Certifications } from "@/components/sections/Certifications";
import { KnowledgeHub } from "@/components/sections/KnowledgeHub";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <ArchitectureShowcase />
        <Projects />
        <CaseStudies />
        <Playground />
        <Timeline />
        <Certifications />
        <KnowledgeHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
