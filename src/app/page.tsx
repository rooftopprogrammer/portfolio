import { Header } from "@/components/header";
import { ParticleBackground } from "@/components/particle-background";
import {
  HeroSection,
  StatsSection,
  PlatformArchitectureSection,
  AIHubProjectSection,
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
      <ParticleBackground />
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <PlatformArchitectureSection />
        <ExperienceSection />
        <AIHubProjectSection />
        <SkillsSection />
        <EngineeringMindsetSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
