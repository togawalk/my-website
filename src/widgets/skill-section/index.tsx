"use client";
import { Divider } from "@/components/divider";
import { Chip } from "@/components/chip";
import { skillCategory } from "@/data";
import { Section } from "@/components/section";
import { SkillCategory } from "@/shared/types";

export const SkillsSection = () => {
  return (
    <Section name="Skills">
      <div className="space-y-5">
        {skillCategory.map((category) => {
          return (
            <SkillsCategory
              key={`${category.id}-skills-category`}
              category={category}
            />
          );
        })}
      </div>
    </Section>
  );
};

const SkillsCategory = ({ category }: { category: SkillCategory }) => {
  return (
    <div key={`${category.id}-skills-category`}>
      <Divider textAlign="left" className="before:border-transparent">
        {category.categoryName}
      </Divider>
      <ul className="flex flex-wrap gap-2">
        {category.technologies.map((technology, id) => {
          return <Chip key={`${technology}-${id}`}>{technology.name}</Chip>;
        })}
      </ul>
    </div>
  );
};
