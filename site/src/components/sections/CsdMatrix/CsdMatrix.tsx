import { CSD_DATA } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

export function CsdMatrix() {
  return (
    <section id="descobertas" className="relative py-24 px-6 bg-uffa-lightblue">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Matriz CSD"
          title="Certezas, Suposições e Dúvidas"
          description="Mapeamos o que sabemos, o que supomos e o que ainda precisamos investigar antes de partir para a coleta de campo."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {/* Certezas */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-uffa-green" />
              <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">Certezas</span>
            </div>
            <div className="flex flex-col gap-3">
              {CSD_DATA.certezas.map((item, i) => (
                <div key={i} className="bg-uffa-green/15 border border-uffa-green/30 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-green/20 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Suposições */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-uffa-yellow" />
              <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">Suposições</span>
            </div>
            <div className="flex flex-col gap-3">
              {CSD_DATA.suposicoes.map((item, i) => (
                <div key={i} className="bg-uffa-yellow/20 border border-uffa-yellow/40 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-yellow/30 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dúvidas */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-uffa-coral" />
              <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">Dúvidas</span>
            </div>
            <div className="flex flex-col gap-3">
              {CSD_DATA.duvidas.map((item, i) => (
                <div key={i} className="bg-uffa-coral/12 border border-uffa-coral/30 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-coral/18 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}