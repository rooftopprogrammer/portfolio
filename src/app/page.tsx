import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { Spotlight } from "@/components/spotlight";
import {
    AiProjectsSection,
    CapabilitiesSection,
    ContactSection,
    EmployerMarquee,
    ExperienceSection,
    Footer,
    HeroSection,
    ImpactSection,
    SkillsSection,
} from "@/components/sections";

export default function Home() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <Header />

            <main id="main-content">
                <HeroSection />
                <EmployerMarquee />
                <ImpactSection />
                <CapabilitiesSection />
                <ExperienceSection />
                <AiProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>

            <Footer />
            <RevealObserver />
            <Spotlight />
        </>
    );
}
