import { FIRST_CLICK } from "../../../data/etapa3";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { BarChart } from "../../ui/BarChart";
import relatorioFirstClick from "../../../../public/Relatorio_First_Click_UFFa.pdf";

export function FirstClick() {
  return (
    <SectionDefault id="first-click" colorDefault="bg-uffa-navy">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Curiosidade · First Click"
          tone="dark"
          title="O primeiro clique está no lugar certo?"
          description={`Além da avaliação heurística, testamos o protótipo com ${FIRST_CLICK.participants} participantes no ${FIRST_CLICK.tool}: em cada situação, onde a pessoa clica primeiro?`}
          className="mb-14"
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          <div className="xl:col-span-2 flex flex-col gap-6">
            {FIRST_CLICK.tasks.map((t) => (
              <div key={t.id} className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 bg-white/5 border border-white/10 rounded-3xl p-7 md:p-8">
                <figure className="w-36 md:w-44 shrink-0">
                  <img
                    src={t.image}
                    alt={`Mapa de calor dos primeiros cliques na tarefa ${t.id}`}
                    className="w-full h-auto rounded-2xl border border-white/15"
                  />
                  <figcaption className="mt-2 text-xs text-white/60 text-center">Mapa de calor · {t.id}</figcaption>
                </figure>
                <div>
                  <span className="font-display text-4xl text-uffa-tractorgreen leading-none block mb-3">{t.id}</span>
                  <h3 className="font-bold text-white text-lg md:text-xl mb-2">{t.title}</h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    <span className="font-semibold text-white">Clique esperado:</span> {t.target}
                  </p>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    <span className="font-semibold text-white">Resultado:</span> {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
            <BarChart
              tone="dark"
              title="Confiança média"
              caption="Nota de 0 a 5 dada após cada tarefa."
              max={5}
              items={FIRST_CLICK.tasks.map((t) => ({ label: t.id, detail: t.title, value: t.confidence }))}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-white/80 leading-relaxed max-w-3xl">{FIRST_CLICK.conclusion}</p>
          <a
            href={relatorioFirstClick}
            download="Relatorio_First_Click_UFFa.pdf"
            className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full border-2 border-white/40 text-white text-sm font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors shrink-0"
          >
            Baixar relatório completo (PDF)
          </a>
        </div>
      </div>
    </SectionDefault>
  );
}
