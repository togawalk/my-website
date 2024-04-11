import { cn } from "@/shared/utils";
import { ReactNode } from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
}

export const Section = ({ children, className, name }: SectionProps) => {
  return (
    <section
      className={cn(
        "relative my-12 rounded-xl border border-border-muted px-4 py-4",
        className
      )}
    >
      <h2 className="absolute left-1/2 top-[-0.5rem] -translate-x-1/2 bg-background px-3 font-medium leading-none text-foreground-light">
        {name}
      </h2>
      {children}
    </section>
  );
};
