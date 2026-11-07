import { PERSONAS, SCENARIOS } from "../../../data/etapa2";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { TechniqueTags } from "../../ui/TechniqueTags";

export function Personas() {
  return (
    <SectionDefault id="personas" colorDefault="bg-uffa-lightblue/50">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Personas"
          title="Quem usa o UFFa"
          description="Os cenários mostraram quem vive cada problema. Por isso, criamos três personas a partir das entrevistas com a equipe administrativa do IC e do questionário aplicado a estudantes. Nomes e idades são fictícios."
          tagColor="text-uffa-blue"
          className="mb-6"
        />
        <TechniqueTags ids={["segmentacao", "personasCenarios"]} className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PERSONAS.map((p) => (
            <Card key={p.id} className="flex flex-col gap-5 p-7 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-uffa-azulpetroleo text-white flex items-center justify-center font-display text-xl">
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark leading-tight">
                    {p.givenName}, {p.age} anos
                  </h3>
                  <p className="text-sm text-uffa-navy/60">
                    {p.name} · {p.role}
                  </p>
                </div>
              </div>

              <p className="text-uffa-navy/80 leading-relaxed">{p.bio}</p>

              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-uffa-blue">Cenários que vive</span>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {SCENARIOS.filter((s) => p.scenarios.includes(s.code)).map((s) => (
                    <li key={s.code}>
                      <a
                        href="#cenarios"
                        className="inline-flex items-center gap-2 min-h-11 px-3 rounded-full bg-white border border-uffa-azulpetroleo/30 text-sm text-uffa-azulpetroleo-dark hover:bg-uffa-lightblue"
                      >
                        <strong>{s.code}</strong> {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <Badge variant={p.basisTone === "gold" ? "yellow" : "blue"} className="self-start !text-white">
                {p.basis}
              </Badge>

              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-uffa-blue">Objetivo</span>
                <p className="mt-1 text-uffa-navy/80 leading-relaxed">{p.goal}</p>
              </div>

              {p.pains.length > 0 && (
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-uffa-blue">Outras evidências da pesquisa</span>
                  <ul className="mt-2 flex flex-col gap-2">
                    {p.pains.map((pain, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-uffa-navy/80 leading-relaxed">
                        <span className="text-uffa-navy/40 font-bold">–</span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.variation && (
                <div className="bg-uffa-lightblue rounded-xl p-4 text-sm text-uffa-navy/80 leading-relaxed">
                  <strong>Variação interna:</strong> {p.variation}
                </div>
              )}

              {p.evidence && (
                <div className="bg-uffa-lightblue rounded-xl p-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-uffa-blue">Perfil</span>
                  <ul className="mt-2 flex flex-col gap-1.5 text-sm text-uffa-navy/80">
                    {p.evidence.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </SectionDefault>
  );
}
