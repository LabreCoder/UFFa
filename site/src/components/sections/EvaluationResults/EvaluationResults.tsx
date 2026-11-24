import { HEURISTICS, PROBLEMS, SEVERITY_SCALE, SEVERITY_BAR_CLASS, findingsByEvaluator, consolidatedSeverity } from "../../../data/etapa3";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";
import { BarChart } from "../../ui/BarChart";

export function EvaluationResults() {
  const byEvaluatorData = findingsByEvaluator();
  const totalFindings = byEvaluatorData.reduce((sum, e) => sum + e.total, 0);
  const severe = PROBLEMS.filter((p) => consolidatedSeverity(p) >= 3).length;

  const byHeuristic = HEURISTICS.map((h) => ({
    label: `H${h.id}`,
    detail: h.name,
    value: PROBLEMS.filter((p) => p.heuristics.includes(h.id)).length,
  })).sort((a, b) => b.value - a.value);

  const bySeverity = SEVERITY_SCALE.map((s) => ({
    label: `${s.level} · ${s.label}`,
    value: PROBLEMS.filter((p) => consolidatedSeverity(p) === s.level).length,
    barClass: SEVERITY_BAR_CLASS[s.level],
  }));

  const byEvaluator = byEvaluatorData.map((e) => ({ label: `Avaliador ${e.code}`, value: e.total }));
  const heuristicMarks = byHeuristic.reduce((sum, h) => sum + h.value, 0);

  const top = byHeuristic.slice(0, 2);
  const registros = PROBLEMS.filter((p) => p.screen === "Meus registros").length;

  const stats = [
    { value: byEvaluatorData.length, label: "avaliações" },
    { value: totalFindings, label: "problemas apontados" },
    { value: PROBLEMS.length, label: "problemas após a consolidação" },
    { value: severe, label: "grandes ou catastróficos" },
  ];

  return (
    <SectionDefault id="resultados" colorDefault="bg-uffa-lightblue">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Resultados"
          title="O que a avaliação mostrou"
          description="Números da lista consolidada. Um problema pode violar mais de uma heurística, por isso a soma por heurística é maior que o total de problemas."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <Card key={s.label} className="p-6">
              <span className="font-display text-5xl text-uffa-azulpetroleo-dark leading-none block">{s.value}</span>
              <span className="mt-2 block text-sm text-uffa-navy/70">{s.label}</span>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          <Card className="p-7 md:p-8 xl:col-span-2">
            <BarChart
              title="Problemas por heurística"
              caption={`Quantos problemas consolidados violam cada heurística, da mais para a menos violada. São ${heuristicMarks} marcações nos ${PROBLEMS.length} problemas, porque alguns violam duas heurísticas.`}
              items={byHeuristic}
            />
          </Card>
          <div className="flex flex-col gap-6">
            <Card className="p-7 md:p-8">
              <BarChart title="Problemas por severidade" caption="Severidade consolidada (média das notas)." items={bySeverity} />
            </Card>
            <Card className="p-7 md:p-8">
              <BarChart title="Problemas por avaliador" caption="Antes da consolidação." items={byEvaluator} />
            </Card>
          </div>
        </div>

        <Card className="p-7 md:p-8">
          <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-4">Principais achados</h3>
          <ul className="flex flex-col gap-3 text-uffa-navy/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-uffa-blue font-bold">→</span>
              <span>
                As heurísticas mais violadas foram <strong>{top[0].label} ({top[0].detail})</strong> e{" "}
                <strong>{top[1].label} ({top[1].detail})</strong>: rótulos pouco claros e componentes que mudam de uma tela para outra.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-uffa-blue font-bold">→</span>
              <span>
                A tela <strong>Meus registros</strong> concentra {registros} problemas, incluindo o único catastrófico: o aluno não consegue responder a um pedido de informação da equipe.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-uffa-blue font-bold">→</span>
              <span>
                Apenas um problema foi apontado por mais de um avaliador (o botão de scanner sem rótulo), o que mostra como as inspeções se complementaram.
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </SectionDefault>
  );
}
