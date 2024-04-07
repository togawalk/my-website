import { cn } from "@/utils";
import { ReactNode } from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
}

export const Section = ({ children, className, name }: SectionProps) => {
  return (
    <section
      className={cn(
        "border-border-muted my-12 border rounded-xl py-4 px-4 relative",
        className,
      )}
    >
      <h2 className="absolute top-[-0.5rem] bg-background px-3 leading-none text-foreground-light font-medium -translate-x-1/2 left-1/2">
        {name}
      </h2>
      {children}
    </section>
  );
};
