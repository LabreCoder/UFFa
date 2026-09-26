import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";

export function ResearchQuestion() {
  return (
    <SectionDefault colorDefault="bg-uffa-white">
      <SectionImage image="image1" />
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xl italic font-medium tracking-widest uppercase text-uffa-blue/70 block mb-10">
          Pergunta de Pesquisa
        </span>
        <blockquote className="font-display text-2xl md:text-4xl text-uffa-navy leading-relaxed">
          "Como as pessoas que circulam pela UFF em Niterói{" "}
          <span className="italic">procuram, entregam e recuperam objetos</span>{" "}
          hoje, e quais condições tornam esse processo{" "}
          <span className="text-uffa-blue">compreensível, acessível e confiável</span>?"
        </blockquote>
      </div>
    </SectionDefault>
  );
}