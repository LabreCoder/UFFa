import { METHOD_STEPS, SEVERITY_SCALE, EVALUATORS } from "../../../data/etapa3";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import { Card } from "../../ui/Card";
import { SeverityBadge } from "../../ui/SeverityBadge";

export function EvaluationMethod() {
  return (
    <SectionDefault id="metodo" className="relative pt-32 pb-20 px-6 md:px-12 xl:px-16" colorDefault="bg-uffa-white/70">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Avaliação Heurística"
          title="Como avaliamos o protótipo"
          description="Colegas da turma inspecionaram o protótipo de alta fidelidade do UFFa com base nas 10 heurísticas de Nielsen. Cada avaliação foi feita de forma independente e depois consolidada pelo grupo."
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-14">
          {METHOD_STEPS.map((step, i) => (
            <li key={step.title}>
              <Card className="h-full p-7 flex flex-col gap-3">
                <span className="font-display text-4xl text-uffa-blue leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark">{step.title}</h3>
                <p className="text-sm text-uffa-navy/75 leading-relaxed">{step.desc}</p>
              </Card>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-7 md:p-8">
            <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-5">Escala de severidade</h3>
            <ul className="flex flex-col gap-4">
              {SEVERITY_SCALE.map((s) => (
                <li key={s.level} className="flex items-start gap-4">
                  <SeverityBadge level={s.level} />
                  <span className="text-sm text-uffa-navy/75 leading-relaxed">{s.desc}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-7 md:p-8">
            <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-2">Avaliadores</h3>
            <p className="text-sm text-uffa-navy/75 leading-relaxed mb-5">
              Identificados por código. Uma das avaliações foi feita em dupla.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {EVALUATORS.map((e) => (
                <div key={e.code} className="rounded-2xl bg-uffa-lightblue p-4 text-center">
                  <span className="font-display text-3xl text-uffa-azulpetroleo-dark block">{e.code}</span>
                  {e.note && <span className="text-xs text-uffa-navy/60">{e.note}</span>}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SectionDefault>
  );
}
