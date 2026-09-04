import Botao from "@/components/Botao";
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
];

export default function Contact() {
  return (
    <section className="mb-20 py-20" id="contato">
      <div className="w-[40%]">
        <p className="text-textAlt">/* onde me encontrar */</p>
        <p>
          Estou disponível para novos projetos ou fazer parte de times de alto
          nível. Vamos construir algo incrível juntos?
        </p>
      </div>

      <div className="flex px-20 mt-20 justify-between">
        <ul className="flex flex-col gap-2">
          {social.map((item) => (
            <li 
              key={item.id} 
              className="flex gap-2"
            >
              <Image 
                src={item.icon} 
                alt={item.title} 
                width={30} height={30} 
              />
              <div>
                <a href={item.link} className="mt-2 contact-link">
                  {item.title}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <form 
          action=""
          className="flex flex-col gap-15 w-[40%]"
        >
          <input 
            type="text" 
            placeholder= "nome"
            className="inputStyle"
          />

          <input 
            type="email" 
            placeholder="email"
            className="inputStyle"
          />

          <input 
            type="text" 
            placeholder="assunto"
            className="inputStyle"
          />

          <textarea
            placeholder="mensagem"
            className="inputStyle"
            rows={6}
          />

          <Botao
            label="Enviar"
            icon={
              <Image
                src="/images/contact/send.png"
                alt=""
                width={25}
                height={25}
              />
            }
            className=""
          />
        </form>
      </div>
    </section>
  );
}
