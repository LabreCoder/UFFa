import { RESEARCH_STEPS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { Badge } from "../../ui/Badge";
import { SectionImage } from "../../ui/SectionImage";

export function ResearchTimeline() {
  return (
    <section id="pesquisa" className="relative py-24 px-6 bg-uffa-blue/50">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Nossa Pesquisa"
          title="O que fizemos até aqui"
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-uffa-navy/10 hidden md:block" />

          <div className="flex flex-col gap-6">
            {RESEARCH_STEPS.map((step, i) => (
              <div key={i} className="relative flex gap-6 items-start">
                {/* Dot */}
                <div
                  className="hidden md:flex shrink-0 w-10 h-10 rounded-full border-2 items-center justify-center z-10 mt-0.5"
                  style={{
                    backgroundColor: step.done ? "var(--color-uffa-blue)" : "var(--color-uffa-bg)",
                    borderColor: step.done ? "var(--color-uffa-blue)" : "rgba(10, 24, 40, 0.18)",
                  }}
                >
                  {step.done ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-uffa-navy/25" />
                  )}
                </div>

                <div
                  className={`flex-1 rounded-2xl p-6 border transition-all duration-200 ${
                    step.done
                      ? "bg-white border-uffa-navy/8 hover:shadow-sm"
                      : "bg-uffa-yellow/10 border-uffa-yellow/40"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {!step.done && (
                      <Badge variant="yellow">Em andamento</Badge>
                    )}
                    <h3 className="font-semibold text-uffa-navy">{step.label}</h3>
                  </div>
                  <p className="text-sm text-uffa-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}