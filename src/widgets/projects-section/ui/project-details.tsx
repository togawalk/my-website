import { motion } from "framer-motion";
import { config } from "@/shared/config";
import Link from "next/link";
import { GitUrlParser } from "@/services/git-url-parser";
import { Project } from "@/shared/types";

export const ProjectDetails = ({ project }: { project: Project }) => {
  const urlParser = new GitUrlParser(project.repoUrl);
  const [, username, repository] = urlParser.extractAll();
  return (
    <motion.div
      transition={{ duration: config.animation.TRANSITION_DURATION }}
      variants={config.animation.VARIANTS}
      className="border-b border-border-muted first:border-t"
    >
      <Link
        target="_blank"
        href={project.repoUrl}
        className="flex cursor-pointer flex-col px-3 py-3 no-underline hover:bg-card-hover"
      >
        <p className="text-sm font-medium">
          <span className="text-foreground-light">{username}/</span>
          {repository}
        </p>
        <p className="mt-2 text-sm font-medium text-foreground-light">
          {project.description}
        </p>
      </Link>
    </motion.div>
  );
};
