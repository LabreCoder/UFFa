import { FIGMA_PROTOTYPE_URL, PROTOTYPE_VIEWS } from "../../../data/etapa2";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";
import { TechniqueTags } from "../../ui/TechniqueTags";

export function DigitalPrototype() {
  const hasLink = FIGMA_PROTOTYPE_URL !== "";

  return (
    <SectionDefault id="prototipo-digital">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Prototipação Digital"
          title="Nosso protótipo"
          description="Telas do protótipo digital, separadas pela visão do aluno e pela visão da equipe que cuida dos objetos perdidos, e o acesso ao protótipo navegável."
          tagColor="text-uffa-blue"
          className="mb-6"
        />
        <TechniqueTags
          ids={["fitts", "hick", "uxwriting", "competitiva", "gestalt", "artefatos", "cognitiva", "semiotica"]}
          className="mb-10"
        />

        {PROTOTYPE_VIEWS.map((view) => (
          <div key={view.id} className="mb-12">
            <h3 className="font-display text-3xl text-uffa-azulpetroleo-dark">{view.title}</h3>
            <p className="mt-2 mb-6 text-uffa-navy/75 leading-relaxed max-w-3xl">{view.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {view.images.map((img, i) => (
                <Card key={`${view.id}-${i}`} className="p-5 flex flex-col gap-3">
                  {img.src ? (
                    <img src={img.src} alt={img.caption} className="w-full h-auto rounded-xl" />
                  ) : (
                    <div className="rounded-xl border-2 border-dashed border-uffa-navy/20 aspect-9/16 flex items-center justify-center text-uffa-navy/50">
                      {img.title}
                    </div>
                  )}
                  <p className="text-sm text-uffa-navy/70 text-center">{img.caption}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-4 flex justify-center">
          {hasLink ? (
            <a
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario"
            >
              Abrir protótipo no Figma ↗
            </a>
          ) : (
            <span className="px-8 py-4 rounded-full bg-uffa-navy/10 text-uffa-navy/50 font-bold">
              Link do protótipo no Figma
            </span>
          )}
        </div>
      </div>
    </SectionDefault>
  );
}
