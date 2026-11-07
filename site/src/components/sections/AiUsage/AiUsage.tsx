import { useState } from "react";
import { AI_USAGE } from "../../../data/aiUsage";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";

export function AiUsage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionDefault id="uso-de-ia" colorDefault="bg-uffa-navy">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Uso de IA"
          tagColor="text-uffa-blue"
          title={<span className="text-white">Como usamos IA no projeto</span>}
          description="Registro das ferramentas de inteligência artificial usadas em cada parte do projeto, com o comando aplicado."
          className="mb-14"
        />

        <div className="flex flex-col gap-6">
          {AI_USAGE.map((item, i) => {
            const open = openIndex === i;
            const panelId = `ai-prompt-${item.num}`;
            return (
              <div
                key={item.num}
                className="flex items-start gap-6 md:gap-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-7 md:p-8 transition-colors duration-200 group"
              >
                <span className="font-display text-4xl md:text-5xl text-uffa-tractorgreen/60 group-hover:text-uffa-tractorgreen transition-colors shrink-0 leading-none mt-1">
                  {item.num}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white text-lg md:text-xl mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed mb-3">{item.summary}</p>
                  <p className="text-sm md:text-base text-white/70 mb-4">
                    <span className="font-semibold text-white">Ferramenta:</span> {item.tool}
                    <span aria-hidden="true"> · </span>
                    <span className="font-semibold text-white">Parte do projeto:</span> {item.stage}
                  </p>

                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="inline-flex items-center gap-2 min-h-11 px-4 rounded-lg border-2 border-white/40 text-white text-base font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors cursor-pointer"
                  >
                    {open ? "Ocultar comando" : "Ver comando utilizado"}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </button>

                  {open && (
                    <div
                      id={panelId}
                      role="region"
                      aria-label={`Comando utilizado: ${item.title}`}
                      className="mt-4 rounded-2xl bg-black/30 border border-white/15 p-5 md:p-6"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wide text-white/60 mb-3">
                        Comando (prompt) utilizado
                      </p>
                      <div className="text-base text-white/90 leading-relaxed whitespace-pre-wrap break-words">
                        {item.prompt}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionDefault>
  );
}
