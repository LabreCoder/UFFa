import { NEXT_STEPS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";

export function NextSteps() {
  return (
    <SectionDefault id="proximos" colorDefault="bg-uffa-navy">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Próximos Passos"
          tagColor="text-uffa-blue"
          title={<span className="text-white">O que vem a seguir</span>}
          description="Com as entrevistas e questionários concluídos, estruturamos os passos seguintes para traduzir as evidências empíricas em requisitos e protótipos de interação."
          className="mb-14"
        />

        <div className="flex flex-col gap-6">
          {NEXT_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-6 md:gap-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-7 md:p-8 transition-colors duration-200 group"
            >
              <span className="font-display text-4xl md:text-5xl text-uffa-tractorgreen/60 group-hover:text-uffa-tractorgreen transition-colors shrink-0 leading-none mt-1">
                {step.num}
              </span>
              <div>
                <h3 className="font-bold text-white text-lg md:text-xl mb-2">{step.label}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm md:text-base text-white/45 text-center">
          Pesquisa de campo finalizada · Síntese orientada por dados reais · Ideação e prototipação na próxima fase
        </p>
      </div>
    </SectionDefault>
  );
}