import React from "react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="flex flex-col py-20" id="projetos">
      <div>
        <p className="text-textAlt self-end">/* meus projetos */</p>
        <p>Soluções funcionais que desenvolvi para resolver problemas reais</p>
      </div>

      <div className="grid grid-cols-3 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex flex-col mx-auto bg-textLight text-textDark p-8 gap-3 w-[80%] rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <p className="text-xl font-bold">{item.title}</p>
            <p>{item.description}</p>

            <div className="flex flex-col">
              <a href={item.github} className="flex gap-2">
                <Image
                  src="/images/projects/github.png"
                  alt="github"
                  width={20}
                  height={20}
                />

                GitHub
              </a>

              <a href={item.webLink} className="flex w-full gap-2">
                <Image
                  src="/images/projects/web.png"
                  alt="github"
                  width={20}
                  height={20}
                />

                {item.webPlaceholder}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
