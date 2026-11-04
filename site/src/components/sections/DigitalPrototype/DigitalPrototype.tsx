import { FIGMA_PROTOTYPE_URL, PROTOTYPE_IMAGES } from "../../../data/etapa2";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";

export function DigitalPrototype() {
  const hasLink = FIGMA_PROTOTYPE_URL !== "";

  return (
    <SectionDefault id="prototipo-digital">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Prototipação Digital"
          title="Nosso protótipo"
          description="As três telas principais do protótipo digital e o acesso ao protótipo navegável no Figma."
          tagColor="text-uffa-blue"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROTOTYPE_IMAGES.map((img) => (
            <Card key={img.title} className="p-5 flex flex-col gap-3">
              {img.src ? (
                <img src={img.src} alt={img.caption} className="w-full rounded-xl object-cover" />
              ) : (
                <div className="rounded-xl border-2 border-dashed border-uffa-navy/20 aspect-9/16 flex items-center justify-center text-uffa-navy/50">
                  {img.title}
                </div>
              )}
              <p className="text-sm text-uffa-navy/70 text-center">{img.caption}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {hasLink ? (
            <a
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-uffa-blue text-white font-bold hover:opacity-90 transition-opacity"
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
