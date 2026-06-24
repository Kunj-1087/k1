"use client";

import { useState } from "react";
import { BiEnvelope, BiCopy } from "react-icons/bi";

export default function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-x-2 dark:hover:text-white hover:text-black hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md px-2 sm:px-2 py-1.5 sm:py-1 -ml-2 cursor-pointer transition-all duration-200 text-sm sm:text-base"
      title="Click to copy email"
    >
      <BiEnvelope className="text-base sm:text-lg flex-shrink-0" />
      <span className="truncate">{copied ? "Copied to clipboard!" : email}</span>
      {!copied && <BiCopy className="text-zinc-500 text-xs sm:text-sm flex-shrink-0" />}
    </button>
  );
}
