import { NEXT_STEPS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

export function NextSteps() {
  return (
    <section id="proximos" className="relative py-24 px-6 bg-uffa-navy">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Próximos Passos"
          tagColor="text-uffa-blue"
          title={<span className="text-white">O que vem a seguir</span>}
          description="A pesquisa está em andamento. Estes são os passos planejados antes de propor qualquer solução."
        />

        <div className="flex flex-col gap-4">
          {NEXT_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-6 bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl px-6 py-5 transition-colors duration-200 group"
            >
              <span className="font-display text-4xl text-uffa-tractorgreen/40 group-hover:text-uffa-tractorgreen/60 transition-colors shrink-0 leading-none mt-1">
                {step.num}
              </span>
              <div>
                <h3 className="font-semibold text-white mb-1">{step.label}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/40 text-center">
          Sem prazos prometidos · Sem telas de solução ainda · Processo honesto e em andamento
        </p>
      </div>
    </section>
  );
}