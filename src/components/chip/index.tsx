import { ReactNode } from "react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Chip = ({ children, className }: ChipProps) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/[.1] dark:bg-white/[.1] text-foreground dark:text-white">
      {children}
    </span>
  );
};
