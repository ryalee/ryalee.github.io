import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-6">
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
            <a href="#sobre" className="hover:text-[#f7f7f7] duration-300 text-lg">Sobre</a>
            <a href="#projetos" className="hover:text-[#f7f7f7] duration-300 text-lg">Projetos</a>
            <a href="#stack" className="hover:text-[#f7f7f7] duration-300 text-lg">Stack</a>
            <a href="#contato" className="hover:text-[#f7f7f7] duration-300 text-lg">Contato</a>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
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
        </div>
      </header>

      <main className="flex flex-col ">
        <Hero/>
        <div className="w-[90%] h-px self-center bg-foreground rounded-full my-22"></div>
        <About/>
        <div className="w-[90%] h-px self-center bg-foreground rounded-full my-22"></div>
      </main>
    </>
  );
}
