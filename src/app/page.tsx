import { Divider } from "@/components/divider";
import { Chip } from "@/components/chip";
import { GeistMono } from "geist/font/mono";
import { GitUrlParser } from "@/services/git-url-parser";
import { skills, projects } from "@/data";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col ">
        <p className="text-foreground font-medium">Евгений Ефименко</p>
        <p className="text-foreground-light leading-none font-medium">
          Full-stack разработчик
        </p>
      </section>

      <section>
        <Divider textAlign="center" className="text-base mt-20">
          Навыки
        </Divider>

        <div>
          {skills.map((category) => {
            return (
              <div>
                <Divider textAlign="left" className="after:border-transparent">
                  {category.categoryName}
                </Divider>
                <ul className="flex gap-2 flex-wrap">
                  {category.technologies.map((technology) => {
                    return <Chip>{technology.name}</Chip>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <Divider textAlign="center" className="text-base mt-20">
          Проекты
        </Divider>
        <div>
          {projects.map((project) => {
            const urlParser = new GitUrlParser(project.repoUrl);
            const [, username, repository] = urlParser.extractAll();
            return (
              <div className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-card-hover sm:py-3 cursor-pointer">
                <p className="font-medium text-sm">
                  <span className="text-foreground-light">{username}/</span>
                  {repository}
                </p>
                <p className="text-sm mt-2 font-medium text-foreground-light">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <Divider textAlign="center" className="text-base mt-20">
          Контакты
        </Divider>
        <div className="font-medium text-foreground-light text-sm flex">
          <p
            className={`${GeistMono.className} cursor-pointer hover:text-foreground py-1 px-1`}
          >
            evgeny.efimenko@proton.me
          </p>
        </div>
      </section>
    </main>
  );
}
