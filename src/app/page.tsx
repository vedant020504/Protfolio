import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutAndSkills } from "@/components/sections/AboutSkills";
import { Projects } from "@/components/sections/Projects";
import { Education, Certifications } from "@/components/sections/EducationCertifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary/30 scroll-smooth">
      <Navbar />
      <Hero />
      <AboutAndSkills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
