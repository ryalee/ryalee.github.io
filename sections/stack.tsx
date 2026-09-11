import React from "react";
import { stack, stackTools } from "../data/stack";
import Image from "next/image";

export default function Stack() {
  return (
    <section className="flex flex-col w-full py-20" id="stack">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-[40%]">
          <p className="text-textAlt">/* tecnologias que uso */</p>
          <p className="">
            Da prototipação ao deploy: Linguagens e ferramentas que uso no meu
            ambiente de trabalho e estudo.
          </p>
        </div>

        <div className="flex items-center md:justify-end mt-10 md:mt-0">
          <p className="md:w-[60%] text-xs border-l-2 pl-2 border-[#6f6f6f]">
            Não possuo 100% em nenhuma tecnologia pois sempre haverá algo novo a
            ser aprendido.
          </p>

          <Image src="/images/stack/brain.png" alt="" width={50} height={50} />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-5 text-center md:text-left">
          Linguagens & Frameworks
        </h3>

        <div className="md:grid md:grid-cols-3 flex flex-col gap-5 space-x-5">
          {stack.map((item) => (
            <div className="items-center my-2 w-85 md:w-110" key={item.id}>
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
        <h3 className="mb-5 text-center md:text-left">Ferramentas</h3>

        <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-between">
          {stackTools.map((tool) => (
            <article
              key={tool.id}
              className="flex gap-2 items-center text-center flex-col"
            >
              <div className="flex gap-5 items-center justify-center w-full">
                {tool.images.map((imgItem, index) => (
                  <div
                    key={index}
                    className="relative group flex items-center justify-center"
                  >
                    <Image
                      src={imgItem}
                      width={60}
                      height={60}
                      alt={tool.toolName[index] || tool.type}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />

                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-gray-900 text-white text-xs px-2.5 py-1 rounded whitespace-nowrap shadow-lg border border-gray-800 z-10">
                      {tool.toolName[index]}
                    </span>
                  </div>
                ))}
              </div>

              <p className="w-full text-center mt-2">{tool.type}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
