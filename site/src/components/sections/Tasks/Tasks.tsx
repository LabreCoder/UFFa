import { TASK_GROUPS } from "../../../data/etapa2";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";

export function Tasks() {
  return (
    <SectionDefault id="tarefas">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Tarefas"
          title="O que cada persona precisa fazer"
          description="Tarefas que o sistema deve suportar, agrupadas por persona."
          tagColor="text-uffa-blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TASK_GROUPS.map((g) => (
            <Card key={g.persona} className="p-7 md:p-8">
              <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-5">{g.persona}</h3>
              <ul className="flex flex-col gap-3">
                {g.tasks.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-uffa-navy/80 leading-relaxed">
                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-uffa-blue text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </SectionDefault>
  );
}
