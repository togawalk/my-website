"use client";

import { GeistMono } from "geist/font/mono";
import { useState } from "react";
import { LuCheck, LuClipboard } from "react-icons/lu";
import { copyTextToClipboard } from "@/shared/utils";

export function ClipboardCopy({ copyText }: { copyText: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopySuccess = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(handleCopySuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      className={`${GeistMono.className} group flex cursor-pointer items-center gap-2 hover:text-foreground`}
      onClick={handleCopyClick}
    >
      {copyText}
      <span>
        {isCopied ? (
          <LuCheck className="size-4 text-lime-500" />
        ) : (
          <LuClipboard className="size-4 transition-transform group-hover:rotate-6" />
        )}
      </span>
    </button>
  );
}
