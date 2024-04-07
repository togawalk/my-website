"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() => setTheme("light")}
        className="hidden dark:inline p-2 rounded border-border-muted border group hover:bg-white/5 transition-all"
      >
        <LuMoon className="size-6 text-foreground-light group-hover:text-foreground transition-all" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="dark:hidden p-2 rounded border-border-muted border group hover:bg-white/5 transition-all"
      >
        <LuSun className="size-6 text-foreground-light group-hover:text-foreground transition-all" />
      </button>
    </>
  );
};
