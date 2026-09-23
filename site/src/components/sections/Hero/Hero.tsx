import { HeroIllustration } from "./HeroIllustraion";
import { useScrollTo } from "../../../hooks/useScrollTo";
import { SectionImage } from "../../ui/SectionImage";


export function Hero() {
  const { scrollTo } = useScrollTo();

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">      
      <SectionImage image="image1" />
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70 mb-8">
          Projeto de Interação Humano-Computador&nbsp;·&nbsp;Universidade Federal Fluminense
        </p>

        <h1 className="font-display text-5xl md:text-7xl text-uffa-navy leading-tight mb-6">
          UFFa —<br />
          <span className="italic">Achados e Perdidos</span>
        </h1>

        <p className="text-lg md:text-xl text-uffa-navy/65 max-w-2xl mx-auto leading-relaxed mb-14">
          Como podemos tornar mais simples, seguro e confiável encontrar e devolver objetos dentro da UFF?
        </p>

        <HeroIllustration />

        <button
          onClick={() => scrollTo("#problema")}
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-uffa-blue hover:text-uffa-navy transition-colors duration-200 group"
        >
          Conheça a pesquisa
          <span className="block transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
        </button>
      </div>
    </section>
  );
}