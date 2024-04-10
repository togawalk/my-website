import { ModeToggle } from "@/components/mode-toggle";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SkillsSection } from "@/widgets/skill-section";
import { ContactSection } from "@/widgets/contact-section";
import { ProjectsSection } from "@/widgets/projects-section";

export default function Home() {
  return (
    <main>
      <ScrollIndicator />
      <section className="flex justify-between">
        <div>
          <p className="text-foreground font-medium">Evgeny Efimenko</p>
          <p className="text-foreground-light leading-none font-medium">
            Full-stack developer
          </p>
        </div>
        <div>
          <ModeToggle />
        </div>
      </section>

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
