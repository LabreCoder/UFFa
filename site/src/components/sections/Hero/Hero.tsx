import { HeroIllustration } from "./HeroIllustraion";
import { useScrollTo } from "../../../hooks/useScrollTo";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";

export function Hero() {
  const { scrollTo } = useScrollTo();

  return (
    <SectionDefault id="hero" className="min-h-screen flex flex-col items-center justify-center relative py-20 px-6 lg:px-12 text-center bg-uffa-white/70">
      <SectionImage image="image1" />
      {/* Contêiner expandido de max-w-3xl para max-w-5xl */}
      <div className="max-w-5xl mx-auto w-full">

        <h1 className="font-display italic text-6xl md:text-9xl text-uffa-navy leading-none mb-4">
          Uffa
        </h1>

        {/* Subtítulo proporcionalmente maior */}
        <h2 className="font-display text-3xl md:text-6xl text-uffa-blue leading-tight mb-8">
          <span className="italic">Achados e Perdidos</span>
        </h2>
        
        {/* Texto descritivo mais largo e legível */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-uffa-navy/80 leading-relaxed">
            Como podemos tornar mais simples, seguro e confiável encontrar e devolver objetos dentro da UFF?
          </p>
        </div>

        {/* Wrapper para dar mais presença à ilustração */}
        <div className="w-full max-w-lg md:max-w-xl mx-auto my-6">
          <HeroIllustration />
        </div>

        <button
          onClick={() => scrollTo("#problema")}
          className="mt-10 inline-flex items-center gap-2 text-xl md:text-2xl font-medium text-uffa-blue hover:text-uffa-navy transition-colors duration-200 group"
        >
          Conheça a pesquisa
          <span className="block transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
        </button>
      </div>
    </SectionDefault>
  );
}