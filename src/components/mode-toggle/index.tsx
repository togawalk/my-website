"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() => setTheme("light")}
        className="group hidden rounded border border-border-muted p-2 transition-all hover:bg-white/5 dark:inline"
      >
        <LuMoon className="size-6 text-foreground-light transition-all group-hover:text-foreground" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="group rounded border border-border-muted p-2 transition-all hover:bg-white/5 dark:hidden"
      >
        <LuSun className="size-6 text-foreground-light transition-all group-hover:text-foreground" />
      </button>
    </>
  );
};
