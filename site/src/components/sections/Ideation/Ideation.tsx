import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";

const BLOCKS = [
  { title: "Ideação (Crazy 4)", desc: "Espaço reservado para as ideias geradas pelo grupo com a técnica Crazy 4." },
  { title: "Prototipação em Papel", desc: "Espaço reservado para os esboços e o protótipo de baixa fidelidade em papel." },
];

export function Ideation() {
  return (
    <SectionDefault id="ideacao" colorDefault="bg-uffa-lightblue/50">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Ideação"
          title="Crazy 4 e protótipo em papel"
          description="Alternativas de solução geradas pelo grupo e sua primeira materialização em baixa fidelidade."
          tagColor="text-uffa-blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {BLOCKS.map((b) => (
            <Card key={b.title} className="p-7 md:p-8">
              <h3 className="font-display text-2xl text-uffa-azulpetroleo-dark mb-3">{b.title}</h3>
              <div className="rounded-xl border-2 border-dashed border-uffa-navy/20 min-h-48 flex items-center justify-center text-center px-6 text-uffa-navy/50">
                {b.desc}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionDefault>
  );
}
