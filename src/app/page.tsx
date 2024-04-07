import { Divider } from "@/components/divider";
import { Chip } from "@/components/chip";
import { GitUrlParser } from "@/services/git-url-parser";
import { skills, projects } from "@/data";
import { ClipboardCopy } from "@/components/clipboard-copy";
import { Section } from "@/components/section";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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

      <Section name="Skills">
        <div className="space-y-5">
          {skills.map((category) => {
            return (
              <div key={`${category.id}-skills-category`}>
                <Divider textAlign="left" className="before:border-transparent">
                  {category.categoryName}
                </Divider>
                <ul className="flex gap-2 flex-wrap">
                  {category.technologies.map((technology, id) => {
                    return (
                      <Chip key={`${technology}-${id}`}>{technology.name}</Chip>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section name="Projects" className="px-0">
        <div>
          {projects.map((project, id) => {
            const urlParser = new GitUrlParser(project.repoUrl);
            const [, username, repository] = urlParser.extractAll();
            return (
              <Link
                target="_blank"
                href={project.repoUrl}
                key={`project-${id}`}
                className="flex flex-col px-3 no-underline hover:bg-card-hover py-3 cursor-pointer border-b border-border-muted first:border-t"
              >
                <p className="font-medium text-sm">
                  <span className="text-foreground-light">{username}/</span>
                  {repository}
                </p>
                <p className="text-sm mt-2 font-medium text-foreground-light">
                  {project.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section name="Contact">
        <div className="font-medium text-foreground-light text-sm">
          <div className="border-border-muted border-b pb-4">
            <p>Email:</p>
            <ClipboardCopy copyText="evgeny.efimenko@proton.me" />
          </div>
          <div className="pt-4">
            <p>Github:</p>
            <ClipboardCopy copyText="https://github.com/togawalk" />
          </div>
        </div>
      </Section>
    </main>
  );
}
