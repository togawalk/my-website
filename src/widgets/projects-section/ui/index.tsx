"use client";
import { projects } from "@/data";
import { Section } from "@/components/section";
import { motion } from "framer-motion";
import { config } from "@/shared/config";
import { ProjectDetails } from "./project-details";

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
          return <ProjectDetails key={`project-${id}`} project={project} />;
        })}
      </motion.div>
    </Section>
  );
};
