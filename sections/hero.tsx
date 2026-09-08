import Botao from "@/components/Botao";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-around items-center py-20 md:mt-20">
      <div>
        <h1 className="text-xl w-100 py-5 md:py-0 text-center md:text-left md:text-5xl md:w-200">
          Engenheiro de Software, Desenvolvedor FullStack & entusiasta de
          Cybersecurity
        </h1>

        <div className="flex md:items-center justify-center md:justify-start gap-2 mt-4">
          <Image
            src="/images/hero/star.png"
            alt="Star"
            width={20}
            height={20}
          />

          <p>+4 anos de XP como freelancer</p>
        </div>

        <a 
          href="/curriculo-ryan_alecrim_sodre.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mt-10 justify-center md:justify-start"
        >
          <Botao
            label="Meu Currículo"
            icon={
              <Image
                src="/images/hero/attach.png"
                alt="attach"
                width={25}
                height={25}
              />
            }
          />
        </a>
      </div>

      <Image
        src="/images/hero/eu.png"
        alt="Imagem principal"
        width={400}
        height={400}
        className="animate -z-10"
      />
    </section>
  );
}
