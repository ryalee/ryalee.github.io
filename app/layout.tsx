import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan | Portfólio",
  description:
    "Meu portfólio pessoal, mostrando meus projetos e habilidades como Engenheiro de Software, Desenvolvedor Fullstack e entusiasta de Cybersecurity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <html
        lang="pt-br"
        className={`${jetbrainsMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ReactLenis>
  );
}
