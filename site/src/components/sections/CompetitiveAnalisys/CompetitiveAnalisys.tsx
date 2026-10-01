import { useState } from "react";
import { COMPETITORS, COMPETITORS_AFTER, OPPORTUNITIES } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";
import analiseCompetitiva from "../../../../public/Analise_Competitiva.pdf";

// Matriz inicial (Antes)
function CompetitorsBefore({ data, badgeLabel }) {
  return (
    <div className="flex flex-col gap-6 p-7 md:p-8 bg-white/70 border border-uffa-navy/10 rounded-3xl h-full shadow-xs">
      {badgeLabel && (
        <div className="mb-2 flex items-center justify-between border-b border-uffa-navy/20 pb-3">
          <span className="text-sm font-bold uppercase tracking-wider text-uffa-navy">
            {badgeLabel}
          </span>
        </div>
      )}
      {data.map((group) => (
        <div key={group.group}>
          <div className="flex items-center gap-2 mb-4">
            <span className={`w-3 h-3 rounded-full ${group.dot}`} />
            <span className="text-xs font-bold tracking-widest uppercase text-uffa-navy/70">
              {group.group}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {group.items.map((item) => (
              <div
                key={item.name}
                className={`${group.bg} border ${group.border} rounded-2xl p-5 hover:shadow-sm transition-all`}
              >
                <p className="font-bold text-uffa-navy text-sm md:text-base mb-2">{item.name}</p>
                <p className="text-xs md:text-sm text-uffa-navy/70 leading-relaxed">{item.obs}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Matriz detalhada (Depois)
function CompetitorsAfter({ data, badgeLabel }) {
  return (
    <div className="flex flex-col gap-6 p-7 md:p-8 bg-white/70 border border-uffa-navy/10 rounded-3xl h-full shadow-xs">
      {badgeLabel && (
        <div className="mb-2 flex items-center justify-between border-b border-uffa-navy/20 pb-3">
          <span className="text-sm font-bold uppercase tracking-wider text-uffa-navy">
            {badgeLabel}
          </span>
        </div>
      )}      
      {data.map((group) => (
        <div key={group.group}>
          <div className="flex items-center gap-2 mb-5">
            <span className={`w-3 h-3 rounded-full ${group.dot}`} />
            <span className="text-xs font-bold tracking-widest uppercase text-uffa-navy/70">
              {group.group}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {group.items.map((item) => (
              <div
                key={item.name}
                className={`${group.bg} border ${group.border} rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-all`}
              >
                <div>
                  <h4 className="font-bold text-uffa-navy text-base md:text-lg mb-2">{item.name}</h4>
                  <p className="text-xs md:text-sm text-uffa-navy/75 mb-4 leading-relaxed">{item.desc}</p>

                  <div className="space-y-2.5 text-xs md:text-sm">
                    {item.positives && (
                      <p className="text-uffa-navy/85">
                        <strong className="text-uffa-tractorgreen">Positivo:</strong> {item.positives}
                      </p>
                    )}
                    {item.negatives && (
                      <p className="text-uffa-navy/85">
                        <strong className="text-uffa-coral">Negativo:</strong> {item.negatives}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-uffa-navy/10 space-y-3">
                  {/* Ideia de Design */}
                  <div className="p-3.5 bg-white/80 rounded-xl border border-uffa-navy/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-uffa-navy mb-1.5">
                      💡 Ideia para o nosso design
                    </p>
                    <p className="text-xs md:text-sm text-uffa-navy/90 leading-snug font-medium">
                      {item.designIdea}
                    </p>
                  </div>

                  {/* Links / Fontes */}
                  {item.links && item.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-uffa-navy/70 hover:text-uffa-navy underline decoration-uffa-navy/30 underline-offset-2"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompetitiveAnalysis() {
  const [viewMode, setViewMode] = useState("all");

  const pdfDownloadUrl = analiseCompetitiva;
  const color = "bg-uffa-azulpetroleo";

  return (
    <SectionDefault colorDefault="bg-uffa-blue/25">
      <SectionImage image="image3" />
      
      {/* Contêiner mestre com alinhamento rigoroso */}
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        {/* Topo com Header e Tabs de navegação */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="Análise Competitiva"
            title="O que o mercado já faz"
            description="Estudamos soluções existentes em três grupos para identificar padrões, lacunas, referências de UX e ideias de design."
            className="mb-0"
            tagColor="text-uffa-gold"
          />

          <div className="inline-flex self-start md:self-auto p-1.5 bg-white/70 backdrop-blur-sm border border-uffa-navy/10 rounded-2xl shadow-xs shrink-0">
            <button
              onClick={() => setViewMode("before")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === "before"
                  ? `${color} text-white shadow-sm`
                  : "text-uffa-navy/70 hover:text-uffa-navy hover:bg-black/5"
              }`}
            >
              Antes
            </button>
            <button
              onClick={() => setViewMode("after")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === "after"
                  ? `${color} text-white shadow-sm`
                  : "text-uffa-navy/70 hover:text-uffa-navy hover:bg-black/5"
              }`}
            >
              Depois
            </button>
            <button
              onClick={() => setViewMode("all")}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                viewMode === "all"
                  ? `${color} text-white shadow-sm`
                  : "text-uffa-navy/70 hover:text-uffa-navy hover:bg-black/5"
              }`}
            >
              Comparativo
            </button>
          </div>
        </div>

        {/* Visualizações Condicionais */}
        {viewMode === "before" && (
          <div className="mb-10">
            <CompetitorsBefore 
              data={COMPETITORS} 
              badgeLabel="Versão Inicial (Resumo Geral)" 
            />
          </div>
        )}

        {viewMode === "after" && (
          <div className="mb-10">
            <CompetitorsAfter 
              data={COMPETITORS_AFTER} 
              badgeLabel="Versão Refinada (Com Ideias de Design e Fontes)" 
            />
          </div>
        )}

        {viewMode === "all" && (
          <div className="flex flex-col xl:flex-row items-stretch gap-8 mb-10">
            <div className="w-full xl:w-1/2">
              <CompetitorsBefore 
                data={COMPETITORS} 
                badgeLabel="Versão Inicial (Resumo Geral)" 
              />
            </div>

            <div className="w-full xl:w-1/2">
              <CompetitorsAfter 
                data={COMPETITORS_AFTER} 
                badgeLabel="Versão Refinada (Com Ideias de Design e Fontes)" 
              />
            </div>
          </div>
        )}

        {/* Oportunidades Identificadas */}
        <div className="bg-uffa-azulpetroleo rounded-3xl p-8 md:p-12 mb-10 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-uffa-gold mb-6">
            Oportunidades & Diretrizes de Design Consolidadas
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {OPPORTUNITIES.map((opp, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-2xl p-5 border border-white/5">
                <span className="text-uffa-gold font-bold text-lg mt-0.5">→</span>
                <span className="text-white/90 text-sm md:text-base leading-relaxed">{opp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Área de Download do PDF */}
        <div className="p-7 md:p-8 rounded-3xl bg-white/60 border border-uffa-navy/10 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-uffa-navy/10 text-uffa-navy flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-semibold text-uffa-navy">
                Documento de Análise Competitiva (PDF)
              </h4>
              <p className="text-xs md:text-sm text-uffa-navy/65">
                Baixe a tabela completa com critérios de seleção, justificativas e ideias consolidadas.
              </p>
            </div>
          </div>

          <a
            href={pdfDownloadUrl}
            download="Analise_Competitiva.pdf"
            className={`inline-flex items-center gap-2.5 px-6 py-3 ${color} hover:bg-uffa-navy/90 text-white rounded-xl text-xs md:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow shrink-0 cursor-pointer`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar PDF
          </a>
        </div>
      </div>
    </SectionDefault>
  );
}