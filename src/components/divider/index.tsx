"use client";

import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const dividerVariants = cva(
  "py-3 flex items-center text-sm text-foreground-light font-medium before:border-border-muted after:border-border-muted w-full",
  {
    variants: {
      textAlign: {
        left: "after:flex-[1_1_0%] after:border-t after:ms-6",
        center:
          "before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6",
        right: "before:flex-[1_1_0%] before:border-t before:me-6",
      },
    },
    defaultVariants: {
      textAlign: "center",
    },
  }
);

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  children: ReactNode;
}

export const Divider = ({
  className,
  textAlign,
  children,
  ...props
}: DividerProps) => {
  return (
    <div className={cn(dividerVariants({ textAlign, className }))} {...props}>
      {children}
    </div>
  );
};
