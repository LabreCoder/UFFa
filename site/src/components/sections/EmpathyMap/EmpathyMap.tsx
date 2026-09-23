import { EMPATHY_DATA } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
export function EmpathyMap() {
  return (
    <section className="relative py-24 px-6 bg-uffa-lightblue">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <SectionHeader
            tag="Mapa de Empatia"
            title="Hipóteses sobre o usuário"
            className="mb-0"
          />
        </div>
        <p className="text-sm text-uffa-navy/60 mb-12 max-w-lg leading-relaxed bg-uffa-yellow/20 border border-uffa-yellow/40 rounded-xl px-4 py-3 inline-block">
          <strong>Atenção:</strong> Este mapa representa hipóteses de investigação a validar — não dados coletados.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {EMPATHY_DATA.map((q) => (
            <div key={q.quadrant} className={`${q.color} border rounded-2xl p-6 hover:shadow-sm transition-shadow`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{q.icon}</span>
                <span className={`font-semibold text-sm tracking-widest uppercase ${q.header}`}>{q.quadrant}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {q.items.map((item, i) => (
                  <li key={i} className="text-sm text-uffa-navy/75 leading-relaxed flex items-start gap-2">
                    <span className="text-uffa-navy/30 mt-1">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}