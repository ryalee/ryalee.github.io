"use client";

import React, { useRef } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import Botao from "@/components/Botao";

function ProjectCard({ item }: { item: (typeof projects)[0] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-between mx-auto bg-textLight text-textDark p-8 gap-3 md:w-[80%] rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-105 duration-500 h-180">
      <div className="flex flex-col gap-3">
        <p className="md:text-xl font-bold">{item.title}</p>
        <p className="text-xs md:text-lg">{item.description}</p>
      </div>

      <div>
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={0}
          className="w-full h-full rounded-2xl"
        />
      </div>

      <div>
        <p className="text-xs">Tecnologias utilizadas:</p>

        <div className="flex items-center">
          <button
            type="button"
            className="p-1 hover:opacity-70 text-2xl font-bold cursor-pointer select-none"
            onClick={() => scroll(-120)}
            aria-label="Rolar para esquerda"
          >
            &lsaquo;
          </button>

          <div
            className="flex overflow-x-auto space-x-2 p-2 scrollbar-none whitespace-nowrap scroll-smooth"
            ref={scrollRef}
          >
            {item.stack.map((tech, index) => (
              <p
                key={index}
                className="text-sm border px-2 rounded-full shrink-0"
              >
                {tech}
              </p>
            ))}
          </div>

          <button
            type="button"
            className="p-1 hover:opacity-70 text-2xl font-bold cursor-pointer select-none"
            onClick={() => scroll(120)}
          >
            &rsaquo;
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-2">
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black duration-300"
        >
          <Image
            src="/images/projects/github.png"
            alt="github"
            width={30}
            height={20}
          />
          GitHub
        </a>

        <a
          href={item.webLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center gap-2 hover:text-black duration-300"
        >
          <Image
            src="/images/projects/web.png"
            alt="web"
            width={30}
            height={20}
          />
          {item.webPlaceholder}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex flex-col w-full py-20" id="projetos">
      <div>
        <p className="text-textAlt self-end">/* meus projetos */</p>
        <p>
          Soluções funcionais que desenvolvi <br /> para resolver problemas
          reais
        </p>
      </div>

      <div className="md:grid md:grid-cols-3 mt-10 space-y-20 w-full">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>

      <a 
        href="https://github.com/ryalee" target="_blank" className="self-center mt-20">
        <Botao
          label="Veja mais em meu github"
          icon={
            <Image
              src="/images/projects/github.png"
              alt="github"
              width={30}
              height={25}
            />
          }
          className="w-90"
        />
      </a>
    </section>
  );
}
