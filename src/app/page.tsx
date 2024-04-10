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
          <p className="font-medium text-foreground">Evgeny Efimenko</p>
          <p className="font-medium leading-none text-foreground-light">
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
