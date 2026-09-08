"use client"

import { useState } from "react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface BotaoModalProps {
  label: string;
  icon?: ReactNode; 
  className?: string;
  onClick?: () => void;
}

const ContatoModal = dynamic(() => import("./modalContato"), {
  ssr: false,
});

export default function BotaoContato({ label, icon, className, onClick }: BotaoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={onClick}
        className={`bg-foreground flex justify-around w-60 py-3 px-6 rounded-[15px] text-textDark text-[14pt] hover:scale-105 duration-300 transition cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
      >
        {label}
        {icon}
      </button>

      {isOpen && <ContatoModal onClose={() => setIsOpen(false)} />}
    </>
  );
}