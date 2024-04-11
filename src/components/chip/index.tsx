import { cn } from "@/shared/utils";
import { ReactNode } from "react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Chip = ({ children, className }: ChipProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-x-1.5 rounded-full bg-black/[.1] px-3 py-1.5 text-xs font-medium text-foreground dark:bg-white/[.1] dark:text-white",
        className
      )}
    >
      {children}
    </span>
  );
};
