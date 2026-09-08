import Botao from "@/components/Botao";
import BotaoContato from "@/components/BotaoModal";
import Image from "next/image";
import React from "react";

const social = [
  {
    id: 1,
    icon: "/images/contact/linkedin.png",
    link: "https://www.linkedin.com/in/ryan-alecrim-sodre/",
    title: "Linkedin",
  },
  {
    id: 2,
    icon: "/images/contact/email.png",
    link: "mailto:ryan.alecrimsodre@gmail.com",
    title: "Email",
  },
  {
    id: 3,
    icon: "/images/contact/github.png",
    link: "https://github.com/ryalee",
    title: "Github",
  },
  {
    id: 4,
    icon: "/images/contact/internet.png",
    link: "https://www.zunbee.com.br",
    title: "Meu site profissional",
  },
  {
    id: 5,
    icon: "/images/contact/PDF.png",
    link: "/curriculo_ryan-alecrim-sodre.pdf",
    title: "Meu currículo"
  }
];

export default function Contact() {
  return (
    <section className="mb-20 py-20" id="contato">
      <div className="md:w-[40%]">
        <p className="text-textAlt">/* onde me encontrar */</p>
        <p>
          Estou disponível para novos projetos ou fazer parte de times de alto
          nível. Vamos construir algo incrível juntos?
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-20 mt-20 justify-between">
        <ul className="flex flex-col gap-2">
          {social.map((item) => (
            <li 
              key={item.id} 
              className="flex gap-2 w-60 items-center self-center"
            >
              <Image 
                src={item.icon} 
                alt={item.title} 
                width={30} height={30} 
              />
              <div className="">
                <a href={item.link} className="mt-2 contact-link">
                  {item.title}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <BotaoContato
          label="Entre em contato"
          icon={
            <Image
              src="/images/contact/call-me.png"
              alt="contato"
              width={50}
              height={50}
            />
          }
          className="md:w-[25%] w-72 gap-2 mt-10 items-center self-center"
        />
      </div>
    </section>
  );
}
