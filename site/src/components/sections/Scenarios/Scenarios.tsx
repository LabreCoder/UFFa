import { SCENARIOS } from "../../../data/etapa2";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";

export function Scenarios() {
  return (
    <SectionDefault id="cenarios" className="relative pt-32 pb-20 px-6 md:px-12 xl:px-16">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Cenários-problema"
          title="Onde o processo atual falha"
          description="Situações reais observadas nas entrevistas e no questionário. São elas que explicam por que criamos as personas e as tarefas que vêm a seguir."
          tagColor="text-uffa-blue"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SCENARIOS.map((s) => (
            <Card key={s.code} className="flex flex-col gap-3 p-7 hover:shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-uffa-blue">{s.code}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-uffa-lightblue text-uffa-azulpetroleo-dark">
                  {s.persona}
                </span>
              </div>
              <h3 className="font-display text-xl text-uffa-azulpetroleo-dark">{s.title}</h3>
              <p className="text-uffa-navy/80 leading-relaxed">{s.problem}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionDefault>
  );
}
