"use client";
import { Divider } from "@/components/divider";
import { Chip } from "@/components/chip";
import { skills } from "@/data";
import { Section } from "@/components/section";

export const SkillsSection = () => {
  return (
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
  );
};
