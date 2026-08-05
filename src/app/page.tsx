import { Header } from "@/components/header";
import { ParticleBackground } from "@/components/particle-background";
import { RevealObserver } from "@/components/reveal-observer";
import {
  HeroSection,
  StatsSection,
  PlatformArchitectureSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  EngineeringMindsetSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <ParticleBackground />
      <Header />

      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <PlatformArchitectureSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EngineeringMindsetSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
