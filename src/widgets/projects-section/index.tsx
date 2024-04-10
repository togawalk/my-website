"use client";
import { GitUrlParser } from "@/services/git-url-parser";
import { projects } from "@/data";
import { Section } from "@/components/section";
import Link from "next/link";
import { motion } from "framer-motion";
import { config } from "@/shared/config";

export const ProjectsSection = () => {
  return (
    <Section name="Projects" className="px-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: config.animation.TRANSITION_DURATION,
          staggerChildren: config.animation.STAGGER_CHILDREN,
        }}
        variants={config.animation.VARIANTS}
      >
        {projects.map((project, id) => {
          const urlParser = new GitUrlParser(project.repoUrl);
          const [, username, repository] = urlParser.extractAll();
          return (
            <motion.div
              transition={{ duration: config.animation.TRANSITION_DURATION }}
              variants={config.animation.VARIANTS}
              key={`project-${id}`}
              className="first:border-t border-b border-border-muted"
            >
              <Link
                target="_blank"
                href={project.repoUrl}
                className="flex flex-col px-3 no-underline hover:bg-card-hover py-3 cursor-pointer"
              >
                <p className="font-medium text-sm">
                  <span className="text-foreground-light">{username}/</span>
                  {repository}
                </p>
                <p className="text-sm mt-2 font-medium text-foreground-light">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};
