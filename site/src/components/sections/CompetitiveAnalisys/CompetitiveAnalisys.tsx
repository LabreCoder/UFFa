import { COMPETITORS, OPPORTUNITIES } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

export function CompetitiveAnalysis() {
  return (
    <section className="relative py-24 px-6 bg-uffa-coral">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Análise Competitiva"
          title="O que o mercado já faz"
          description="Estudamos soluções existentes em três grupos para identificar padrões, lacunas e fontes de inspiração."
        />

        <div className="flex flex-col gap-8 mb-14">
          {COMPETITORS.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">{group.group}</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <div key={item.name} className={`${group.bg} border ${group.border} rounded-2xl p-5 hover:shadow-sm transition-shadow`}>
                    <p className="font-semibold text-uffa-navy text-sm mb-2">{item.name}</p>
                    <p className="text-xs text-uffa-navy/60 leading-relaxed">{item.obs}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Oportunidades */}
        <div className="bg-uffa-navy rounded-3xl p-8 md:p-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-uffa-yellow mb-6">Oportunidades Identificadas</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {OPPORTUNITIES.map((opp, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/6 rounded-xl px-4 py-3">
                <span className="text-uffa-yellow mt-0.5">→</span>
                <span className="text-white/85 text-sm leading-relaxed">{opp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}