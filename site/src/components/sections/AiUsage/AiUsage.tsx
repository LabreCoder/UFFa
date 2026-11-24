import { useState } from "react";
import { AI_USAGE } from "../../../data/aiUsage";
import { StageInfo } from "../../../types";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionDefault } from "../../ui/SectionDefault";
import { Card } from "../../ui/Card";

interface AiUsageProps {
  stage: StageInfo;
  colorDefault?: string;
}

// Registros de uso de IA de uma etapa (página Uso de IA).
export function AiUsage({ stage, colorDefault }: AiUsageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = AI_USAGE.filter((item) => item.stage === stage.label);

  return (
    <SectionDefault id={`ia-${stage.id}`} colorDefault={colorDefault}>
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader tag="Uso de IA" title={stage.label} description={stage.desc} className="mb-10" />

        <div className="flex flex-col gap-6">
          {items.map((item, i) => {
            const open = openIndex === i;
            const panelId = `ai-prompt-${item.num}`;
            return (
              <Card key={item.num} className="p-7 md:p-8 flex items-start gap-6 md:gap-8">
                <span className="font-display text-4xl md:text-5xl text-uffa-blue shrink-0 leading-none mt-1">
                  {item.num}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-uffa-navy/75 leading-relaxed mb-3">{item.summary}</p>
                  <p className="text-sm md:text-base text-uffa-navy/75 mb-4">
                    <span className="font-semibold text-uffa-navy">Ferramenta:</span> {item.tool}
                    <span aria-hidden="true"> · </span>
                    <span className="font-semibold text-uffa-navy">Parte do projeto:</span> {item.stage}
                  </p>

                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className={`inline-flex items-center gap-2 min-h-11 px-4 rounded-lg border-2 text-base font-semibold transition-colors cursor-pointer ${
                      open
                        ? "bg-uffa-azulpetroleo text-white border-uffa-azulpetroleo"
                        : "bg-white text-uffa-azulpetroleo border-uffa-azulpetroleo/40 hover:border-uffa-azulpetroleo hover:bg-uffa-lightblue"
                    }`}
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
                      className="mt-4 rounded-xl border-l-4 border-uffa-azulpetroleo bg-uffa-lightblue/60 p-5 md:p-6"
                    >
                      <p className="text-sm font-bold uppercase tracking-wide text-uffa-azulpetroleo mb-3">
                        Comando (prompt) utilizado
                      </p>
                      <div className="text-base text-uffa-navy leading-relaxed whitespace-pre-wrap break-words">
                        {item.prompt}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionDefault>
  );
}
