import Image from "next/image";
import React, { ReactNode } from "react";

type Priority = {
  id: number;
  text: ReactNode;
  alt: string;
  image: string;
};

const priorities: Priority[] = [
  {
    id: 1,
    text: "// arquitetura do software",
    alt: "arquitetura do software",
    image: "/images/about/code.png",
  },
  {
    id: 2,
    text: "// segurança",
    alt: "segurança",
    image: "/images/about/lock.png",
  },
  {
    id: 3,
    text: "// controle",
    alt: "controle",
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
    alt: "cafeína",
    image: "/images/about/coffee.png",
  },
  {
    id: 5,
    text: "// Experiência do usuário",
    alt: "Experiência do usuário",
    image: "/images/about/circus.png",
  },
];

export default function About() {
  return (
    <section className="flex flex-col md:py-20" id="sobre">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-[40%]">
          <p className="text-textAlt">/* quem sou eu? */</p>

          <div className="md:text-[18pt] mt-4">
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
              principais falhas e brechas perigosas para ampliar meu repertório e assim construir
              soluções mais robustas.
            </p>
          </div>
        </div>

        <div className="md:w-[60%] mt-20 md:mt-0 flex flex-col">
          <p className="text-textAlt self-center md:self-end">
            /* minhas prioridades ao <br /> trabalhar em um projeto */
          </p>

          <div className="md:grid md:grid-cols-2 justify-center space-y-10 md:gap-x-20 md:self-end mt-4">
            {priorities.map((priority) => (
              <div key={priority.id} className="gap-2 mt-4 flex md:flex-col">
                <Image
                  src={priority.image}
                  alt={priority.alt}
                  width={80}
                  height={80}
                />
                <div className="text-center text-textAlt self-center text-sm">
                  {priority.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}