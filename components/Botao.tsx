"use client";

import { ReactNode, MouseEventHandler } from "react";

interface BotaoProps {
  label: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Botao({ label, className, icon, onClick }: BotaoProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-foreground flex justify-around items-center w-60 py-3 px-6 rounded-[15px] text-textDark md:text-[12pt] hover:scale-105 duration-300 transition cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
      >
        {label}
        {icon}
      </button>
    </>
  );
}