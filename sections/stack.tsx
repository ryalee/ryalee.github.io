import React from "react";
import { stack, stackTools } from "../data/stack";
import Image from "next/image";

export default function Stack() {
  return (
    <section className="flex flex-col w-full py-20" id="stack">
      <div className="flex flex-col">
        <p className="text-textAlt">/* tecnologias que uso */</p>
        <p className="w-[40%]">
          Da prototipação ao deploy: Linguagens e ferramentas que uso no meu
          ambiente de trabalho e estudo.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="mb-5">Linguagens & Frameworks</h3>

        <div className="grid grid-cols-3 space-x-5">
          {stack.map((item) => (
            <div className="items-center my-2 w-110" key={item.id}>
              <div className="flex justify-between mb-2">
                <div className="flex gap-1">
                  <img src={item.icon} alt={item.name} className="w-10" />
                  <p className="mt-4">{item.name}</p>
                </div>

                <p className="self-end">{item.percent}%</p>
              </div>

              <div className="bg-[#909090] rounded-full border-2 relative h-3 shadow-[1px_6px_0px_0px_rgba(0,0,0,1)]">
                <span
                  className="bg-textLight absolute h-full rounded-r-full"
                  style={{ width: `${item.percent}%` }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="mb-5">Ferramentas</h3>

        <div className="flex w-full items-center justify-between">
          {stackTools.map((tool) => (
            <article
              key={tool.id}
              className="flex gap-2 items-center text-center flex-col"
            >
              <div className="flex gap-5 items-center justify-center w-full">
                {tool.images.map((imgItem, index) => (
                  <Image
                    key={index}
                    src={imgItem}
                    width={60}
                    height={60}
                    alt={`Ferramenta de ${tool.type}`}
                  />
                ))}
              </div>

              <p className="w-full text-center">{tool.type}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
