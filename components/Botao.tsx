"use client"

import { useState } from "react";
import dynamic from "next/dynamic";

// const ContatoModal = dynamic(() => import("./ContatoModal"), {
//   ssr: false,
// });

export default function Botao({ label = " ", className = "", icon = null }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-foreground flex justify-between w-60 py-3 px-6 rounded-[15px] text-textDark text-[14pt] hover:scale-105 duration-300 transition cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
      >
        {label}
        {icon}
      </button>

      {isOpen && <ContatoModal onClose={() => setIsOpen(false)} />}
    </>
  );
}