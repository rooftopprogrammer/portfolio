import { Header } from "@/components/header";
import { ParticleBackground } from "@/components/particle-background";
import {
  HeroSection,
  StatsSection,
  AboutSection,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
