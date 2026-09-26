import { RESEARCH_PROFILES, QUESTIONNAIRE_TOPICS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

export function ResearchInstruments() {
  return (
    <section className="relative py-24 px-6 bg-uffa-coral/30">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Instrumentos de Pesquisa"
          title="Entrevistas e Questionário"
          tagColor="text-uffa-blue"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Entrevistas */}
          <div className="bg-white border border-uffa-navy/8 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-uffa-blue/10 flex items-center justify-center text-lg">🎙️</div>
              <h3 className="font-semibold text-uffa-navy">Roteiro Semiestruturado</h3>
            </div>
            <p className="text-sm text-uffa-navy/60 leading-relaxed mb-6">
              Instrumento qualitativo elaborado para explorar experiências, motivações e barreiras em profundidade. Quatro perfis de participantes definidos:
            </p>
            <div className="flex flex-col gap-3">
              {RESEARCH_PROFILES.map((p) => (
                <div key={p.label} className="flex items-start gap-3 bg-uffa-lightblue rounded-xl px-4 py-3">
                  <span className="text-lg shrink-0">{p.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-uffa-navy">{p.label}</p>
                    <p className="text-xs text-uffa-navy/55 leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questionário */}
          <div className="bg-white border border-uffa-navy/8 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-uffa-blue/10 flex items-center justify-center text-lg">📊</div>
              <h3 className="font-semibold text-uffa-navy">Questionário Quantitativo</h3>
            </div>
            <p className="text-sm text-uffa-navy/60 leading-relaxed mb-6">
              Instrumento de escala ampla para validar hipóteses com um número maior de respondentes dentro da comunidade UFF.
            </p>
            <div className="flex flex-col gap-4">
              {QUESTIONNAIRE_TOPICS.map((t) => (
                <div key={t.label} className="border-l-2 border-uffa-blue/30 pl-4">
                  <p className="text-sm font-medium text-uffa-navy">{t.label}</p>
                  <p className="text-xs text-uffa-navy/50 mt-0.5">{t.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-uffa-gold/15 border border-uffa-gold/40 rounded-xl p-4">
              <p className="text-xs text-uffa-navy/70 leading-relaxed">
                <strong>Nota:</strong> Nenhum número apresentado aqui é dado coletado — são metas e definições do instrumento de pesquisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}