"use client";

import { GeistMono } from "geist/font/mono";
import { useState } from "react";
import { LuCheck, LuClipboard } from "react-icons/lu";

export function ClipboardCopy({ copyText }: { copyText: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    return await navigator.clipboard.writeText(text);
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      className={`${GeistMono.className} cursor-pointer hover:text-foreground py-1 px-1 flex gap-2 items-center group`}
      onClick={handleCopyClick}
    >
      {copyText}
      <span>
        {isCopied ? (
          <LuCheck className="size-4 text-lime-500" />
        ) : (
          <LuClipboard className="size-4 group-hover:rotate-6 transition-transform" />
        )}
      </span>
    </button>
  );
}
