"use client";

import { useState, useCallback, useMemo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ContatoModalProps = {
  onClose: () => void;
};

export default function ContatoModal({ onClose }: ContatoModalProps) {
  // Corrigido a tipagem para aceitar JSX (ex: componente Image)
  const [result, setResult] = useState<ReactNode>("");
  const [isSending, setIsSending] = useState(false);

  const wppLink = useMemo(() => {
    const number = "5574999944759";
    const msg = encodeURIComponent(
      "Olá! Vi seu portfólio e decidi entrar em contato"
    );
    return `https://wa.me/${number}?text=${msg}`;
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSending(true);

      setResult(
        <Image
          src="/images/contact/waiting.gif"
          alt="waiting"
          width={70}
          height={70}
          className="flex items-center justify-center"
        />
      );

      const form = e.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      data.append("access_key", "e3f0b990-31ba-4ae8-8051-c6c8cbb880f5");

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        }).then((r) => r.json());

        if (res.success) {
          setResult("Mensagem enviada com sucesso!");
          form.reset();
          setTimeout(onClose, 1500);
        } else {
          setResult("Erro ao enviar. Tente novamente ou fale pelo WhatsApp.");
        }
      } catch {
        setResult("Erro de conexão. Tente novamente mais tarde.");
      } finally {
        setIsSending(false);
      }
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-foreground p-8 rounded-2xl max-w-md w-full shadow-lg relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-1 right-4 md:top-1 md:right-3 text-gray-500 hover:text-gray-800 text-4xl"
            aria-label="Fechar modal"
          >
            &times;
          </button>

          <div className="mb-6 text-center">
            <h2 className="text-2xl text-textDark font-bold mb-2">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-textAlt text-sm">
              Seja para tirar um projeto do papel, solicitar um orçamento ou
              discutir uma oportunidade em seu time de engenharia.
            </p>
          </div>

          <a
            href={wppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-[15px] mb-5 w-full flex justify-center items-center gap-2 transition"
          >
            Falar pelo WhatsApp
          </a>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="hidden"
              name="subject"
              value="Novo contato recebido pelo Portfólio"
            />
            <input type="hidden" name="from_name" value="Portfolio Web" />

            <input
              name="name"
              placeholder="Nome"
              required
              className="border text-textDark rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border text-textDark rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none"
            />

            <input
              name="assunto"
              type="text"
              placeholder="Assunto"
              required
              className="border text-textDark rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none"
            />

            <textarea
              name="message"
              placeholder="Descreva sua ideia ou problema"
              required
              className="border text-textDark rounded-lg px-4 py-2 focus:ring-2 focus:ring-main outline-none"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`${
                isSending
                  ? "bg-green-800"
                  : "bg-background hover:bg-background/90"
              } text-white font-semibold py-2 px-6 rounded-[15px] transition cursor-pointer`}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>

            {result && (
              <div className="text-sm text-center text-gray-600 mt-2 flex justify-center items-center">
                {result}
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}