import Image from "next/image";
import React from "react";

const priorities = [
  {
    id: 1,
    text: "// arquitetura do software",
    image: "/images/about/code.png",
  },
  {
    id: 2,
    text: "// segurança",
    image: "/images/about/lock.png",
  },
  {
    id: 3,
    text: "// controle",
    image: "/images/about/code-fork.png",
  },
  {
    id: 4,
    text: (
      <span className="inline-flex items-center gap-1">
        // cafeína{" "}
        <Image
          src="/images/about/infinity.png"
          alt="Infinity"
          width={20}
          height={20}
          className="inline-block"
        />
      </span>
    ),
    image: "/images/about/coffee.png",
  },
  {
    id: 5,
    text: "// Experiência do usuário",
    image: "/images/about/circus.png"
  }
];

export default function About() {
  return (
    <section className="flex flex-col py-20" id="sobre">
      <div className="flex items-center">
        <div className="w-[40%]">
          <p className="text-textAlt">/* quem sou eu? */</p>

          <div className="text-[18pt] mt-4">
            <p className="">
              Me chamo Ryan, sou bacharelando em Engenharia de
              Software e desenvolvedor fullstack.
              <br />
            </p>
            <br />
            <p>
              Possuo 4 anos de experiência atuando de forma autônoma como
              freelancer, permaneço nesse modelo atualmente com um perfil de{" "}
              <a
                href="https://zunbee.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffc300] font-semibold underline hover:text-[19pt] hover:text-[#ffd95b] duration-300"
              >
                agência
              </a>
              .
            </p>
            <br />
            <p>
              Também me aventuro no mundo da cibersegurança para entender as
              principais falhas e brechas perigosas para assim construir
              soluções mais robustas
            </p>
          </div>
        </div>

        <div className="w-[60%] flex flex-col">
          <p className="text-textAlt self-end">
            /* minhas prioridades ao <br /> trabalhar em um projeto */
          </p>

          <div className="md:grid md:grid-cols-2 md:space-y-10 md:gap-x-20 md:self-end mt-4">
            {priorities.map((priority) => (
              <div key={priority.id} className="gap-2 mt-4 flex flex-col">
                <Image
                  src={priority.image}
                  alt={priority.text}
                  width={80}
                  height={80}
                />
                <p className="text-center text-textAlt self-start">
                  {priority.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
