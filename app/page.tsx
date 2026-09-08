import About from "../sections/about";
import Contact from "../sections/contact";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Stack from "../sections/stack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center fixed w-full backdrop-blur-md px-10 py-6 z-20">
        <div className="flex items-center gap-2">
          <p className="text-2xl">// Ryan </p>
          <Image
            src="/images/header/coffee.png"
            alt="Coffee"
            width={35}
            height={35}
          />
        </div>

        <nav>
          <ul className="hidden md:flex gap-12 w-150 justify-center">
            <a
              href="#sobre"
              className="hover:text-[#f7f7f7] duration-300 text-lg"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="hover:text-[#f7f7f7] duration-300 text-lg"
            >
              Projetos
            </a>
            <a
              href="#stack"
              className="hover:text-[#f7f7f7] duration-300 text-lg"
            >
              Stack
            </a>
            <a
              href="#contato"
              className="hover:text-[#f7f7f7] duration-300 text-lg"
            >
              Contato
            </a>
          </ul>
        </nav>

        {/* <div className="flex items-center gap-2">
          <button>
            <Image
              src="/images/header/portuguese.png"
              alt="pt-br"
              width={25}
              height={25}
            />
          </button>

          <button>
            <Image
              src="/images/header/english.png"
              alt="en"
              width={25}
              height={25}
            />
          </button>
        </div> */}
      </header>

      <main className="p-5 md:10 flex flex-col">
        <Hero />
        <div className="w-full h-px self-center bg-foreground rounded-full my-22"></div>
        <About />
        <div className="w-full h-px self-center bg-foreground rounded-full my-22"></div>
        <Projects />
        <div className="w-full h-px self-center bg-foreground rounded-full my-22"></div>
        <Stack />
        <div className="w-full h-px self-center bg-foreground rounded-full my-22"></div>
        <Contact />
      </main>

      <footer className="bg-textLight w-full h-30 flex flex-col items-center justify-center gap-4 py-6">
        <p className="text-textDark">
          {" "}
          &lsaquo;&rsaquo;{" "}
          <a
            href="https://www.linkedin.com/in/ryan-alecrim-sodre/"
            target="_blank"
            className="underline text-blue-900 text-center hover:text-blue-700 duration-300"
          >
            Ryan Alecrim Sodre
          </a>{" "}
          | {new Date().getFullYear()} &lsaquo;&frasl;&rsaquo;{" "}
        </p>
      </footer>
    </>
  );
}
