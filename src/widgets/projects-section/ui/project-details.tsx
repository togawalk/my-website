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
};
