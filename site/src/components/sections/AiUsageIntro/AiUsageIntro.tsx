import { AI_USAGE } from "../../../data/aiUsage";
import { STAGES } from "../../../data/stages";
import { useScrollTo } from "../../../hooks/useScrollTo";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

// Abertura da página Uso de IA: o que é e um atalho para cada etapa.
export function AiUsageIntro() {
  const { scrollTo } = useScrollTo();

  return (
    <SectionDefault id="uso-de-ia" className="relative pt-32 pb-20 px-6 md:px-12 xl:px-16" colorDefault="bg-uffa-white/70">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Uso de IA"
          title="Como usamos IA no projeto"
          description="Registro das ferramentas de inteligência artificial usadas em cada parte do projeto, com o comando aplicado."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAGES.map((s) => {
            const count = AI_USAGE.filter((item) => item.stage === s.label).length;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(`#ia-${s.id}`)}
                className="text-left bg-white border border-uffa-navy/10 rounded-3xl p-7 hover:shadow-md hover:border-uffa-blue transition-all cursor-pointer"
              >
                <span className="font-display text-3xl text-uffa-azulpetroleo-dark block">{s.label}</span>
                <span className="mt-2 block text-uffa-navy/70">
                  {count} {count === 1 ? "registro" : "registros"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </SectionDefault>
  );
}
