import { CRAZY_FOLLOWED, CRAZY_IMAGES, CRAZY_NOT_FOLLOWED, CRAZY_TOTAL_IDEAS } from "../../../data/etapa2";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";

const OUTCOME_STYLE = {
  realidade: { label: "✓ Virou realidade", className: "bg-uffa-azulpetroleo text-white" },
  expectativa: { label: "… Ficou como expectativa", className: "bg-uffa-yellow text-uffa-navy" },
} as const;

export function Ideation() {
  return (
    <SectionDefault id="ideacao" colorDefault="bg-uffa-lightblue/50">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Ideação"
          title="Crazy 4"
          description={`O grupo gerou ${CRAZY_TOTAL_IDEAS} ideias com o Crazy 4. Abaixo, o que foi possível aplicar, o que ficou de fora e como cada ideia seguida se liga à pesquisa da Etapa 1.`}
          tagColor="text-uffa-blue"
        />

        <Card className="mb-8 p-7 md:p-8">
          <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-4">Material feito em sala</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {CRAZY_IMAGES.map((img, i) =>
              img.src ? (
                <figure key={i} className="flex flex-col gap-2">
                  <img src={img.src} alt={img.caption} className="w-full h-auto rounded-xl" />
                  <figcaption className="text-sm text-uffa-navy/70 text-center">{img.caption}</figcaption>
                </figure>
              ) : (
                <div
                  key={i}
                  className="rounded-xl border-2 border-dashed border-uffa-navy/20 min-h-48 flex items-center justify-center text-center px-6 text-uffa-navy/50"
                >
                  {img.caption}
                </div>
              ),
            )}
          </div>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
          <div className="xl:col-span-2">
            <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-4">O que seguimos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CRAZY_FOLLOWED.map((idea) => (
                <Card key={idea.title} className="p-6 flex flex-col gap-3">
                  <h4 className="font-display text-xl text-uffa-azulpetroleo-dark leading-snug">{idea.title}</h4>
                  <p className="text-uffa-navy/80 leading-relaxed">{idea.how}</p>
                  {idea.stage1 && (
                    <div className="mt-auto rounded-xl bg-uffa-lightblue p-4 flex flex-col gap-2">
                      <span
                        className={`self-start text-sm font-semibold px-3 py-1 rounded-full ${OUTCOME_STYLE[idea.stage1.outcome].className}`}
                      >
                        {OUTCOME_STYLE[idea.stage1.outcome].label}
                      </span>
                      <p className="text-sm text-uffa-navy/80 leading-relaxed">
                        <strong>{idea.stage1.source}:</strong> {idea.stage1.note}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-4">O que ficou de fora</h3>
            <Card className="p-6">
              <ul className="flex flex-col gap-5">
                {CRAZY_NOT_FOLLOWED.map((idea) => (
                  <li key={idea.title}>
                    <p className="font-semibold text-uffa-navy">{idea.title}</p>
                    <p className="text-sm text-uffa-navy/75 leading-relaxed mt-1">{idea.reason}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </SectionDefault>
  );
}
